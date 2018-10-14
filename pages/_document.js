import Document, { Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="lopun" content={"Jihun Ko"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000" />
          <meta
            name="description"
            content="Lopun Store, buy all your nomad swag"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
            rel="stylesheet"
          />
          <style>{`body {background-color: #f0f2f5!important}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
