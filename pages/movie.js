import Head from "next/head";
import { withRouter } from "next/router";
import axios from "axios";

// withRouter 덕분에 props가 생긴다
const Movie = props => (
  <div>
    <Head>
      <title>{props.movie.title} | Lopun Store</title>
    </Head>
    <h1>{props.movie.title} </h1>
    <p>{props.movie.description_intro}</p>
  </div>
);

Movie.getInitialProps = async context => {
  const {
    query: { id }
  } = context;
  const {
    data: {
      data: { movie }
    }
  } = await axios.get(
    `https://yts.am/api/v2/movie_details.json?movie_id=${id}`
  );
  return { movie };
};

export default withRouter(Movie);
