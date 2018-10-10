import { Query } from "react-apollo";
import IndexPresenter from "./indexPresenter";
import { INDEX_QUERY } from "./indexQueries";

// Query는 ({ loading, error, data }) 이런것들을 받을 수 있다.
export default () => (
  <Query query={INDEX_QUERY}>
    {({ data }) => <IndexPresenter data={data} />}
  </Query>
);
