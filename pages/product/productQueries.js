import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragment";

export const PRODUCT_QUERY = gql`
  query productQuery($id: ID!) {
    product(where: { id: $id }) {
      ...ProductItems
      detail
      onCart @client
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const TOGGLE_CART = gql`
  mutation toggleCart($id: ID!) {
    toggleProduct(id: $id) @client
  }
`;
