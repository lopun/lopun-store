import Head from "next/head";
import withLayout from "../lib/withLayout";

const Index = () => (
  <div>
    <Head>
      <title>Home | Lopun Store</title>
    </Head>
    <h1>Hello from the Index</h1>
  </div>
);

export default withLayout(Index);
