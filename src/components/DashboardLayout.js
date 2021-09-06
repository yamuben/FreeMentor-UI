import React ,{useState}from "react";
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
  import 'antd/dist/antd.css';
  import "./index.css";
  import MyHeader from "./Header";
  const { Header, Sider, Content } = Layout;


const DashboardLayout =({children})=> {

    const [collapsed,setCollapsed] =useState(false);

    const toggle =()=>{
        setCollapsed(!collapsed);
    }

    return(
    <>
        <MyHeader/>
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{height:"95vh"}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/dashboard">   Sessions      </Link>
              
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/dashmentors">   Mentors      </Link>
           
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      </>
    )
}

export default DashboardLayout;