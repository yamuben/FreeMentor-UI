import React from 'react';
import { Form, Input, Button, Checkbox,notification } from 'antd';
import {Link,useHistory} from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import AuthApi from "../services/Auth";

const SigninForm = () => {
  const history = useHistory();

  const onFinish = async(values) => {
  const response= await AuthApi.login(values);
  console.log("response:" ,response);
  if(!response){
    return notification.error({message:"Invalid credentials, Please try again!!"})
  
  }
  if(response.data.status===200){

    return history.push("/dashboard")
  }
  else{
return notification.error({message:"Invalid credentials, Please try again!!"})
  }
    // console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
          {/* <Link to="/dashboard"> */}
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
          
          {/* </Link> */}
        Or  <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default SigninForm;