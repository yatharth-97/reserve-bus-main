import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import BusForm from '../../components/BusForm';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/alertsSlice';
import { message } from 'antd';
import { axiosInstance } from '../../helpers/axiosInstance';

function AdminBuses() {
  const dispatch = useDispatch();
  const [showBusForm, setShowBusForm] = useState(false);
  const [buses, setBuses] = useState([]);

  const getBuses = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post('/api/buses/get-all-buses', {});
      dispatch(HideLoading());
      if (response.data.success) {
        setBuses(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Number',
      dataIndex: 'number',
    },
    {
      title: 'From',
      dataIndex: 'from',
    },
    {
      title: 'To',
      dataIndex: 'to',
    },
    {
      title: 'Journey Date',
      dataIndex: 'journeyDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];

  useEffect(() => {
    getBuses();
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <PageTitle title='Buses' />
        <button className='primary-btn' onClick={() => setShowBusForm(true)}>
          Add Bus
        </button>
      </div>

      {showBusForm && (
        <BusForm
          showBusForm={showBusForm}
          setShowBusForm={setShowBusForm}
          type='add'
        />
      )}
    </div>
  );
}

export default AdminBuses;
