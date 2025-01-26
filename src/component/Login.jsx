import React, { useState } from 'react';
import { Form, Input, Button, Card, Tabs, message, Spin } from 'antd';
import { login, register } from '../userApi/api.js';

const Login = () => {
  const [formType, setFormType] = useState('login');
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await login(values);
      message.success(response.message || 'Login successful!');
      console.log('Login Response:', response);
    } catch (error) {
      message.error(error.message || 'Login failed. Please try again.');
      console.error('Login Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await register(values);
      message.success(response.message || 'Registration successful!');
      console.log('Signup Response:', response);
    } catch (error) {
      message.error(error.message || 'Registration failed. Please try again.');
      console.error('Signup Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const tabItems = [
    {
      key: 'login',
      label: 'Login',
      children: (
        <Form name="login" layout="vertical" onFinish={handleLoginSubmit}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={{
                backgroundColor: '#f59e0b',
                borderColor: '#f59e0b',
                borderRadius: '8px',
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: 'register',
      label: 'Register',
      children: (
        <Form name="register" layout="vertical" onFinish={handleSignupSubmit}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={{
                backgroundColor: '#f59e0b',
                borderColor: '#f59e0b',
                borderRadius: '8px',
              }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card
        className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 shadow-lg rounded-2xl "
        style={{
          width : "50%",
          margin : "auto",
          marginTop : "5%",
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Spin spinning={loading} tip="Loading..." size="large">
          <Tabs
            defaultActiveKey="login"
            onChange={setFormType}
            centered
            items={tabItems}
            tabBarStyle={{
              fontWeight: 'bold',
              fontSize: '18px',
              color: '#333',
              backgroundColor: '#fff',
            }}
            tabBarActiveTabStyle={{
              color: '#f59e0b', // Active tab color
              borderBottom: '2px solid #f59e0b', // Active tab bottom border color
            }}
            tabBarGutter={20} // Adds some space between tabs for better appearance
          />
        </Spin>
      </Card>
    </div>
  );
};

export default Login;