import React,{useState} from "react";

import {Menu,Modal} from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import "./index.css";
import 'antd/dist/antd.css';

import SigninForm from "./SigninForm";


const { SubMenu } = Menu;
const Header = ()=>{

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
    const [current, setCurrent]=useState("home");


  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

    return(
      <>
      <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px"}}>
<SigninForm/>

</div>
    </Modal>
       <div className="header-container" style={{display: 'flex'}}>
           <h1 style={{color:"green", fontSize:"30px",fontWeight:"bolder"}}> FREE MENTOR</h1>


      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{margin:"0px 0px 0px 60%"}}>
        <Menu.Item key="home" >
         Home
        </Menu.Item>
        <Menu.Item key="about" >
         About Us
        </Menu.Item>
        <Menu.Item key="login" onClick={showModal}>
         Login
        </Menu.Item>
      </Menu>
       </div>
       </>
    )
}

export default Header;