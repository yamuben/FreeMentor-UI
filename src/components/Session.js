import React from 'react';

import {
    Form, Modal,
    Input, Table,notification,
    Button,
    Select,
    DatePicker
} from 'antd';
import {useHistory} from "react-router-dom";
import mentors from "../assets/constants/mentors.json";
import SessionApis from "../services/Session";

const { Option } = Select;

const Session = () => {
 const history = useHistory();

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

const onFinish = async(values) => {
    const response = await SessionApis.createSession(values);
    if(!response){
return notification.error({message:"Network error!! failed to request."})
    }
    if(response.data.statu === 200){
        notification.success({message:"Session requested successfull"})
        
        return history.push("/dashboard");
       
    }else{
        return notification.error({message:response.data.message})
    }
    console.log(values);
}

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
        onFinish={onFinish}

        >
            <Form.Item label="Title" name="title">
                <Input />
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input />
            </Form.Item>
            <Form.Item label="Select Mentor" name="mentor">

                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        mentors.map((mentor) => (
                            <Option value={mentor._id}>{mentor.firstName}</Option>
                        ))
                    }


                </Select>
            </Form.Item>
            <Form.Item label="Time To Start" name="timeToStart">
                <DatePicker />
            </Form.Item>
            <Form.Item label="Time To End" name="timeToEnd">
                <DatePicker />
            </Form.Item>
            <Form.Item label="Button" >
                <Button type="primary" htmlType="submit">Create Session</Button>
            </Form.Item>
        </Form>
    )
}

export default Session;