import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Main from "../containers/Main";
import Header from "../components/Header";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" component={Main}/>        
      </BrowserRouter>
    );
  }
}

