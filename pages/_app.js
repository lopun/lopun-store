import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import convertDataURIToBinary from "../lib/base64";
const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(swReg => {
          console.log("SW Registered: ", swReg);
          swReg.pushManager.getSubscription().then(subscription => {
            if (subscription == null) {
              Notification.requestPermission().then(permission =>{
                if (permission == "granted") {
                  swReg.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertDataURIToBinary("BG3x_QRVRD0KG7H1rZvQVwtIKuapvDGKdukBbZ78G-BHJVUvnGueqS_1TsKj69QVjQgoAhx8UWUwewC9C8lSjsU")
                  }).then(pushSubscriptionObject => {
                    localStorage.setItem('endpoint', pushSubscriptionObject.endpoint);
                    console.log(JSON.stringify(pushSubscriptionObject))
                  })
                  return;
                }
              })
            } else {
              console.log(JSON.stringify(subscription))
            }
          })
      })
        .catch(err => console.log("Can't register SW: ", err));
    }
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
