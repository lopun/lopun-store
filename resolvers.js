import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "./fragment";

export const defaults = {
  cart: []
};
export const resolvers = {
  Mutation: {
    toggleProduct: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: "Product", id: variables.id });
      const fragment = gql`
        ${PRODUCT_FRAGMENT}
      `;
      // cache.readFragment는 원하는 fragment를 넣어주고 id까지 넣어주면 된다.
      const product = cache.readFragment({ fragment, id });
      const cartQuery = gql`
        {
          cart @client {
            id
          }
        }
      `;
      const { cart } = cache.readQuery({ query: cartQuery });
      const foundProduct = cart.find(aProduct => aProduct.id == product.id);
      let toggledCart;
      let onCart = false;
      if (foundProduct) {
        toggledCart = cart.filter(aProduct => aProduct.id != product.id);
        onCart = false;
      } else {
        toggledCart = [...cart, product];
        onCart = true;
      }
      cache.writeData({
        data: {
          cart: toggledCart
        }
      });
      // onCart를 넣어주자!
      cache.writeFragment({
        id: `Product:${product.id}`,
        fragment: PRODUCT_FRAGMENT,
        data: {
          __typename: "Product",
          ...product,
          onCart
        }
      });
      return null;
    }
  },
  Product: {
    onCart: () => false
  }
};
