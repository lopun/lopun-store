// Bootstrap & Initialize every comopnents
import App, { Container } from "next/app";
import Header from "../components/Header";
import React from "react";

export default class MyApp extends App {
  // document를 수정하지 않으면 굳이 할 필요 없음
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    // 앞으로의 Component가 getInitialProps 함수가 있으면!
    if (Component.getInitialProps) {
      // 기다려준다.
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* 원래는 withLayout을 썼지만 여기서 Header을 모두 넣어줄 수 있다 */}
        <Header />
        <Component {...pageProps} />
      </Container>
    );
  }
}
