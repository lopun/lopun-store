import Head from "next/head";
import { withRouter } from "next/router";

// withRouter 덕분에 props가 생긴다
const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.id} | Lopun Store</title>
    </Head>
    <h1>Movies: </h1>
    <p>lorem ipsum ...</p>
  </div>
);

export default withRouter(Post);
