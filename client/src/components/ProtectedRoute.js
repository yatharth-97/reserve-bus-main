import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../redux/usersSlice';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import DefaultLayout from './DefaultLayout';

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alerts);
  const navigate = useNavigate();

  const validateToken = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        '/api/users/get-user-by-id',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.data.success) {
        dispatch(HideLoading());
        dispatch(SetUser(response.data.data));
      } else {
        dispatch(HideLoading());
        localStorage.removeItem('token');
        message.error(response.data.message);
        navigate('/login');
      }
    } catch (error) {
      localStorage.removeItem('token');
      message.error(error.message);
      dispatch(HideLoading());
      navigate('/login');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      validateToken();
    } else {
      navigate('/login');
    }
  }, []);

  return <div>{!loading && <DefaultLayout>{children}</DefaultLayout>}</div>;
}

export default ProtectedRoute;
