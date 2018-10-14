import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragment";

export const PRODUCT_QUERY = gql`
  query productQuery($id: ID!) {
    product(where: { id: $id }) {
      ...ProductItems
      detail
    }
  }
  ${PRODUCT_FRAGMENT}
`;
