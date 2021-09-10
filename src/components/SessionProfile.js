import React from 'react';
import {Divider, Col, Row} from "antd";
import "./index.css";

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );
  

const SessionProfile= ({session}) => {
    return(
        <>
        <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
        User Profile
      </p>
      <p className="site-description-item-profile-p">Personal</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content={session.user.firstName + " " + session.user.lastName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="email" content={session.user.email} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="phone" content={session.user.phone} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Gender" content={session.user.gender}/>
        </Col>
      </Row>
      {/* <Row>
        <Col span={12}>
          <DescriptionItem title="Birthday" content="February 2,1900" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Website" content="-" />
        </Col>
      </Row> */}
      {/* <Row>
        <Col span={24}>
          <DescriptionItem
            title="Message"
            content="Make things as simple as possible but no simpler."
          />
        </Col>
      </Row> */}
      <Divider />
      <p className="site-description-item-profile-p">Mentor</p>


      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content={session.mentor.firstName + " " + session.user.lastName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="email" content={session.mentor.email} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="phone" content={session.mentor.phone} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Gender" content={session.mentor.gender}/>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Position" content="Programmer" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Responsibilities" content="Coding" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Department" content="XTech" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Skills"
            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
          />
        </Col>
      </Row>
      <Divider />
      <p className="site-description-item-profile-p">Session</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Title" content={session.title}/>
        </Col>
        <Col span={12}>
          <DescriptionItem title="Status" content={session.status} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Start on" content={session.timeToStart} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="End on" content={session.timeToEnd} />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <DescriptionItem
            title="About Session"
            content={session.description}
          />
        </Col>
      </Row>
      {/* <Row>
        <Col span={24}>
          <DescriptionItem
            title="Github"
            content={
              <a href="http://github.com/ant-design/ant-design/">
                github.com/ant-design/ant-design/
              </a>
            }
          />
        </Col>
      </Row> */}
      </>
    )
}

export default SessionProfile;