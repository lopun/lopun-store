import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <NProgressStyles color="#29d" spinner={false} />
          <Layout>
            <Component {...pageProps} />
            <Footer>This is important</Footer>
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

// apollo prop을 만들어준다.
export default withNProgress(300)(withApollo(MyApp));
