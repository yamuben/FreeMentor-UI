import React from "react";
import "./index.css";


import {Card,Input} from "antd";
import { AudioOutlined } from '@ant-design/icons';



import image1 from "../assets/1.svg";
import image2 from "../assets/2.svg";
import image3 from "../assets/3.svg";

const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: 'red',
      }}
    />
  );
const Programs =()=>{

    const onSearch = value => console.log(value);

    return(
        <div className="profile-container">
        <Card style={{width:"100%"}}>
            <Card.Grid hoverable={false}  style={{width:"100%",padding:"100px 30px 30px 30px",border:"solid 2px white",display:"flex"}}>
                <div>

                <h1 style={{fontSize:"60px",color:"green", fontWeight:"bold",border:"white"}}> Our Program </h1>
                <p style={{fontSize:"20px",padding:"10px",border:"solid 2px white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
           
                <Search
      placeholder="Search mentor"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
     style={{color:"green",width:"60%"}}
    />
                </div>
                <div>

    <img src={image1} alt="image" width="100%"/>
                </div>
            </Card.Grid>
        </Card>
        <Card style={{width:"100%"}}>
            <Card.Grid hoverable={false}  style={{width:"100%",display:"flex",padding:"50px"}}>
                <img src={image2} alt="image" width="70%"/>
           <div>
                <h1 style={{fontSize:"60px",color:"green", fontWeight:"bold",border:"white"}}> Scheduler your Session </h1>
                <p style={{fontSize:"20px",padding:"10px",border:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
                </div>
            </Card.Grid>
        </Card>
            <Card style={{width:"100%"}}>
                <Card.Grid hoverable={false}  style={{width:"40%"}}>
                    <h1 style={{fontSize:"60px",color:"green", fontWeight:"bold",border:"white"}}> Meet our Mentor </h1>
                    <p style={{fontSize:"20px",padding:"10px",border:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
               
                   
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:"60%"}}>
                <img src={image3} alt="image" width="100%"/> </Card.Grid>
            </Card>
        </div>
    )
}

export default Programs;