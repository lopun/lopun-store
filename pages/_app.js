import App, { Container } from "next/app";
import React from "react";

export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Component />
      </Container>
    );
  }
}
