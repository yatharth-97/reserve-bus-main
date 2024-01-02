import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import { axiosInstance } from '../helpers/axiosInstance';
import { Col, Row, message } from 'antd';
import { useParams } from 'react-router-dom';
import SeatSelection from '../components/SeatSelection';

function BookNow() {
  const params = useParams();
  const dispatch = useDispatch();
  const [bus, setBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

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

  useEffect(() => {
    getBus();
  }, []);

  return (
    <div>
      {bus && (
        <Row className='mt-3'>
          <Col lg={12} xs={24} sm={24}>
            <h1 className='text-2xl text-secondary'>{bus.name}</h1>
            <h1 className='text-md'>
              {bus.from} - {bus.to}
            </h1>
            <hr />
            <div>
              <h1 className='text-lg'>
                Journey Date : <b>{bus.journeyDate}</b>
              </h1>
              <h1 className='text-lg'>
                Fare : <b>₹ {bus.fare} /- </b>
              </h1>
              <h1 className='text-lg'>
                Departure Time : <b>{bus.departure}</b>
              </h1>
              <h1 className='text-lg'>
                Arrival Time : <b>{bus.arrival}</b>
              </h1>
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
