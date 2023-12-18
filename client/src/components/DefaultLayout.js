import React from 'react';
import '../resources/layout.css';
import { useNavigate } from 'react-router-dom';

function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const userMenu = [];
  const adminMenu = [
    {
      name: 'Home',
      path: '/admin',
      icon: 'ri-home-line',
    },
    {
      name: 'Buses',
      path: '/admin/buses',
      icon: 'ri-bus-line',
    },
    {
      name: 'Users',
      path: '/admin/users',
      icon: 'ri-user-line',
    },
    {
      name: 'Bookings',
      path: '/admin/bookings',
      icon: 'ri-file-list-line',
    },
    {
      name: 'Logout',
      path: '/logout',
      icon: 'ri-logout-box-line',
    },
  ];
  const menuToBeRendered = adminMenu;
  const activeRoute = window.location.pathname;

  return (
    <div className='layout-parent'>
      <div className='sidebar'>
        <div className='d-flex flex-column gap-2 justify-content-start menu'>
          {menuToBeRendered.map((item, index) => {
            return (
              <div className='menu-item'>
                <i className={item.icon}></i>
                <span
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className='body'>
        <div className='header'>header</div>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;