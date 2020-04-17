import React from 'react';
import { Row, Col, Typography, Menu, Button } from 'antd';
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function Header() {
  return (
    <Row className="header-container">
      <Col xs={24} sm={24} md={6}>
        <NavLink to="/"><Title className="logo-title">Grepson.</Title></NavLink>
      </Col>
      <Col xs={18} sm={22} md={16}>
        <Row justify="end">
          <Menu mode="horizontal">
            <Menu.Item key="about_us">
              <NavLink to="/about">ABOUT US</NavLink>
            </Menu.Item>
            <Menu.Item key="impact">
              <NavLink to="/impact">IMPACT</NavLink>
            </Menu.Item>
            <Menu.Item key="services">
              <NavLink to="/services">SERVICES</NavLink>
            </Menu.Item>
            <Menu.Item key="insights">
              <NavLink to="/insights">INSIGHTS</NavLink>
            </Menu.Item>
            <Menu.Item key="get_in_touch">
              <NavLink to="/touch">GET IN TOUCH</NavLink>
            </Menu.Item>            
          </Menu>          
        </Row>
      </Col>
      <Col xs={4} sm={2} md={2}>
        <Button icon={<MenuOutlined />} type="link"/>        
      </Col>
    </Row>
  )
}