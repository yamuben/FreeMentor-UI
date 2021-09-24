import React ,{useState,useEffect}from 'react';
import {Card} from 'antd';
import 'antd/dist/antd.css';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

// import allMentors from "../assets/constants/mentors.json";

import AuthApi from "../services/Auth";




const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

const Mentors =()=>{
  const [allMentors,setAllMentors] =useState([]);

  useEffect(() => {
    AuthApi.getAllMentors().then((res)=>{setAllMentors(res.data.dat)});
  },[])

    return(
<Card>
<List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={allMentors}
    footer={
      <div>
        <b>@SheCanCod product </b>
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item._id}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.firstName + " "+ item.lastName}</a>}
          description={item.career}
        />
        {item.aboutMe}
      </List.Item>
    )}
  />
</Card>
    )
}
export default Mentors;