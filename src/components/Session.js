import React from 'react';

import {
    Form, Modal,
    Input, Table,
    Button,
    Select,
    DatePicker
} from 'antd';

import mentors from "../assets/constants/mentors.json";

const { Option } = Select;

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


const Session = () => {
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