import React,{useState,useEffect} from "react";

import {Menu,Modal} from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import "./index.css";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import SigninForm from "./SigninForm";

import decode from "../utils/tokenDecoder";


const { SubMenu } = Menu;
const Header = ()=>{


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [token, setToken]=useState(null);
  const [dataFromToken,setDataFromToken]=useState({});


  const handleDecode=()=>{
    setDataFromToken(decode(token));
  }

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
useEffect(() => {
 setToken( localStorage.getItem("freeMentor_token"));

})

    return(
      <>
      <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px"}}>
<SigninForm/>

</div>
    </Modal>
       <div className="header-container" style={{display: 'flex'}}>
        <Link to="/home">   <h1 style={{color:"green", fontSize:"30px",fontWeight:"bolder"}}> FREE MENTOR</h1>
        </Link>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{margin:"0px 0px 0px 35%",width:"50%"}}>
        <Menu.Item key="home" >
   
        <Link to="/">
         Home</Link>
        </Menu.Item>
        <Menu.Item key="mentors" >
          <Link onClick={handleClick} to="/allmentors">
         All Mentors</Link>
        </Menu.Item>
      {  !token?
        (<Menu.Item key="login" onClick={showModal}>
         Login
        </Menu.Item>):
        (<>
        
        <Menu.Item key="logout" onClick={()=>{localStorage.removeItem("freeMentor_token")}}>
      <Link to="/home">Logout</Link>
        </Menu.Item>
        </>)}
      </Menu>

      <p> {!token?(<></>):(<>{decode(token).email}</>)} </p>
       </div>
       </>
    )
}

export default Header;