import Head from "next/head";
import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";

// withRouter 덕분에 props가 생긴다
const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Lopun Store</title>
    </Head>
    <h1>Title</h1>
    <p>lorem ipsum ...</p>
  </div>
);

export default withLayout(withRouter(Post));
