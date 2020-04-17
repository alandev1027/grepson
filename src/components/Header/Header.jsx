import React from 'react';
import { Row, Col, Typography, Menu } from 'antd';
import "./Header.scss";
import { NavLink } from "react-router-dom";
const { Title } = Typography;

export default function Header() {
  return (
    <Row className="header-container">
      <Col xs={24} sm={24} md={6}>
        <Title className="logo-title">Grepson.</Title>
      </Col>
      <Col xs={24} sm={24} md={18}>
        <Row justify="center">
          <Menu mode="horizontal">
            <Menu.Item key="about_us">
              <NavLink to="/">ABOUT US</NavLink>
            </Menu.Item>
            <Menu.Item key="impact">
              <NavLink to="/">IMPACT</NavLink>
            </Menu.Item>
            <Menu.Item key="services">
              <NavLink to="/">SERVICES</NavLink>
            </Menu.Item>
            <Menu.Item key="insights">
              <NavLink to="/">INSIGHTS</NavLink>
            </Menu.Item>
            <Menu.Item key="get_in_touch">
              <NavLink to="/">GET IN TOUCH</NavLink>
            </Menu.Item>
            <Menu.Item key="menu">
              <NavLink to="/">MENU</NavLink>
            </Menu.Item>
          </Menu>
        </Row>
      </Col>
    </Row>
  )
}