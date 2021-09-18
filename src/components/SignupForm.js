import React from 'react';
import { Form, Input, Button,Card, Checkbox ,InputNumber, Select,notification} from 'antd';
import {Link,useHistory} from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Auth from "../services/Auth";

const {Option}=Select;

const SignupForm = () => {
const history = useHistory();
  const onFinish = async(values) => {
    console.log('Received values of form: ', values);
   const response= await Auth.signup(values);
   if(!response){
     return notification.error({message:"network error, Failed to make request"});

   }

   if(response.data.statu===200){
     notification.success({message:"Registered succesfuly"});

     return history.push("/home");
   }
   else{
    return notification.error({message:response.data.message});
   }
  //  console.log("response",response);

  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+250</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Card style={{width:"100%", padding:"5% 30% 10% 30%", textAlign:"center"}}>
      <h1> Create Account</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
    <Form.Item
      name="firstName"
      rules={[{ required: true, message: 'Please input your First Name!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname" />
    </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{type:"email", required: true, message: 'Please input your First Name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="abcd@gmail.com" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input  style={{ width: '100%' }} />
      </Form.Item>

     
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item name="age" label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
    

      <Form.Item>
          
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
          
  
       
      </Form.Item>
    </Form>
    </Card>
  );
};

export default SignupForm;