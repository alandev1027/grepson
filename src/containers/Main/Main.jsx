import React from 'react';
import { Row, Typography, Col } from 'antd';
import "./Main.scss";
import LogoImage from "../../assets/img_logo.png";
import WomanImage from "../../assets/img_woman.png";
const { Title, Text } = Typography;

export default function Main() {
  return (
    <Row className="main-container">
      <Col span={24}>
        <Row>
          <Col span={22} offset={2} className="woman-img-col">
            <div className="woman-img" />
          </Col>
        </Row>
        <Row className="body-container" align="bottom">
          <Col span={24}>
            <Row>
              <Col span={20} offset={2}>
                <Row>
                  <Title className="title">real impact</Title>
                </Row>
                <Row>
                  <Text className="text">By partenirng only with top wine and champagne companies that <br />want to disrupt their niche and be a benchmark.</Text>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={20} offset={2} className="logo-col">
                <Row justify="end">
                  <img src={LogoImage} alt="logo" className="logo-img" />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}