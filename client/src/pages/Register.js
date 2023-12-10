import React from 'react';
import { Form, Input } from 'antd';

function Register() {
  return (
    <div className='h-screen d-flex justify-content-center align-items-center'>
      <div className='w-400 card p-3'>
        <h1 className='text-lg'>Reserve - Register</h1>
        <hr />
        <Form layout='vertical'>
          <Form.Item label='Name'>
            <Input type='text' />
          </Form.Item>
          <Form.Item label='Email'>
            <Input type='text' />
          </Form.Item>
          <Form.Item label='Password'>
            <Input type='text' />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
