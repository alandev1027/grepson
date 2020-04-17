import React from 'react';
import { Row, Typography, Col } from 'antd';
import "./Main.scss";
import LogoImage from "../../assets/img_logo.png";
import { Animated } from "react-animated-css";

const { Title, Text } = Typography;

export default function Main() {
  return (
    <Row className="main-container">
      <Col span={24}>
        <Row>
          <Col span={22} offset={2} className="woman-img-col">
            <Animated animationIn="fadeIn" isVisible={true} animationInDuration={3000}>
              <div className="woman-img" />
            </Animated>
          </Col>
        </Row>
        <Row className="body-container" align="bottom">
          <Col span={24}>
            <Row>
              <Col span={20} offset={2}>
                <Row>
                  <Animated animationIn="fadeInLeftBig" isVisible={true} animationInDelay={3000}>
                    <Title className="title">real impact</Title>
                  </Animated>
                </Row>
                <Row>
                  <Animated animationIn="fadeInUp" isVisible={true} animationInDelay={4000}>
                    <Text className="text">By partenirng only with top wine and champagne companies that <br />want to disrupt their niche and be a benchmark.</Text>
                  </Animated>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={20} offset={2} className="logo-col">
                <Row justify="end">
                  <Animated animationIn="fadeInRightBig" isVisible={true} animationInDelay={4000}>
                    <img src={LogoImage} alt="logo" className="logo-img" />
                  </Animated>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}