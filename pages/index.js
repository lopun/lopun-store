import Head from "next/head";
import PostLink from "../components/PostLink";
import axios from "axios";

export default class Index extends React.Component {
  static async getInitialProps() {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.am/api/v2/list_movies.json");
    return {
      movies
    };
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <Head>
          <title>Home | Lopun Store</title>
        </Head>
        <h1>Hello from the Index</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <PostLink title={movie.title} id={movie.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
