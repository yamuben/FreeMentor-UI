import React from 'react';

import {
    Form,Modal,
    Input,Table,
    Button,
    Select,
    DatePicker
  } from 'antd';




const Session =()=>{
    return (
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        //   onValuesChange={onFormLayoutChange}
        >
        <Form.Item label="Title">
          <Input />
        </Form.Item>
          <Form.Item label="Description">
            <Input />
          </Form.Item>
          <Form.Item label="Select Mentor">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Time To Start">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Time To End">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Button">
            <Button>Button</Button>
          </Form.Item>
        </Form>
    )
}

export default Session;