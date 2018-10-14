import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragment";

export const CART_QUERY = gql`
  {
    cart @client {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
