import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragment";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
    onSale: products(where: { onSale: true }) {
      ...ProductItems
    }
    allProducts: products {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
// onSale, allProducts를 alias로 만든다.
