import React,{useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import data from "../assets/constants/sessions.json";

import Session from "../components/Session";
import DashboardLayout from "../components/DashboardLayout";
import {
    Modal,Tag,Space,
    Button,Table
  } from 'antd';



const columns = [
    {
      title: 'Session Title',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Mentor',
      dataIndex: 'mentor',
      key: 'mentor',

      render: mentor => <a>{mentor.firstName}</a>,
    },
    {
      title: 'Start Time',
      dataIndex: 'timeToStart',
      key: 'timeToStart',
    },
    {
      title: 'End Time',
      dataIndex: 'timeToEnd',
      key: 'timeToEnd',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: tag => {
            let color = tag === "pending" ? 'black' : tag==="accept"? "green" : "red";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
         
            },
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>View</a>
          <a>Delete</a>
          <a>Edit</a>
        </Space>
      ),
    },
  ];




const Dashboard =()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return(
<DashboardLayout>

<Button onClick={showModal}>Create Session</Button>

<Table columns={columns} dataSource={data} />

<Modal title="New Session" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px"}}>
<Session/>

</div>
    </Modal>

</DashboardLayout>
    )
}

export default Dashboard;