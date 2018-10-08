// Bootstrap & Initialize every comopnents
import App, { Container } from "next/app";
import Header from "../components/Header";
import React from "react";

export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        {/* 원래는 withLayout을 썼지만 여기서 Header을 모두 넣어줄 수 있다 */}
        <Header />
        <Component />
      </Container>
    );
  }
}
