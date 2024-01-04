import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import { axiosInstance } from '../helpers/axiosInstance';
import { Col, Row, message } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import SeatSelection from '../components/SeatSelection';
import StripeCheckout from 'react-stripe-checkout';

function BookNow() {
  const params = useParams();
  const dispatch = useDispatch();
  const [bus, setBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const getBus = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post('/api/buses/get-bus-by-id', {
        _id: params.id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        setBus(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const bookNow = async (transactionId) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post('/api/bookings/book-seat', {
        bus: bus._id,
        seats: selectedSeats,
        transactionId,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        navigate('/bookings');
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onToken = async (token) => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post('/api/bookings/make-payment', {
        token,
        amount: selectedSeats.length * bus.fare * 100,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        bookNow(response.data.data.transactionId);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getBus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {bus && (
        <Row className='mt-3' gutter={[30, 30]}>
          <Col lg={12} xs={24} sm={24}>
            <h1 className='text-2xl primary-text'>{bus.name}</h1>
            <h1 className='text-md'>
              {bus.from} - {bus.to}
            </h1>
            <hr />
            <div className='flex flex-col gap-2'>
              <p className='text-md'>Journey Date : {bus.journeyDate}</p>
              <p className='text-md'>Fare : ₹ {bus.fare} /- </p>
              <p className='text-md'>Departure Time : {bus.departure}</p>
              <p className='text-md'>Arrival Time : {bus.arrival}</p>
              <p className='text-md'>Capacity : {bus.capacity}</p>
              <p className='text-md'>
                Seats Left : {bus.capacity - bus.seatsBooked.length}
              </p>
            </div>
            <hr />

            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl'>
                Selected Seats : {selectedSeats.join(', ')}
              </h1>
              <h1 className='text-2xl mt-2'>
                Fare: ₹ {bus.fare * selectedSeats.length} /-
              </h1>
              <hr />

              <StripeCheckout
                billingAddress
                amount={bus.fare * selectedSeats.length * 100}
                currency='INR'
                token={onToken}
                stripeKey='pk_test_51OUvMTSAMidHiYRGL0AGQg6I42Zi4pKGzDd3tz7JhgnnIBb1jlpeYIyIDBI9gOJUWRumV4HEXDYzjbtTqt6p2cS300DWQrHTg3'
              >
                <button
                  className={`primary-btn ${
                    selectedSeats.length === 0 && 'disabled-btn'
                  }`}
                  disabled={selectedSeats.length === 0}
                >
                  Book Now
                </button>
              </StripeCheckout>
            </div>
          </Col>

          <Col lg={12} xs={24} sm={24}>
            <SeatSelection
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              bus={bus}
            />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default BookNow;
