import Head from "next/head";
import PostLink from "../components/PostLink";

export default () => (
  <div>
    <Head>
      <title>Home | Lopun Store</title>
    </Head>
    <h1>Hello from the Index</h1>
    <ul>
      <li>
        <PostLink title={"Someting"} id={0} />
      </li>
      <li>
        <PostLink title={"Someting"} id={1} />
      </li>
    </ul>
  </div>
);
