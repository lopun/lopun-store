import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <div>
    <Head>
      <title>Home | Lopun Store</title>
    </Head>
    <h1>Hello from the Index</h1>
    <ul>
      <li>
        <PostLink title={"Someting"} />
      </li>
      <li>
        <PostLink title={"Someting"} />
      </li>
    </ul>
  </div>
);

export default withLayout(Index);
