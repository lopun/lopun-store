import { gql } from "apollo-boost";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
    onSale: products(where: { onSale: true }) {
      id
      name
      detail
      price
      photo {
        url
      }
    }
    allProducts: products {
      id
      name
      detail
      price
      photo {
        url
      }
    }
  }
`;
// onSale, allProducts를 alias로 만든다.
