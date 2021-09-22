import productsMockData from "./data/products";
import find from "lodash/find";
export const products = productsMockData;

export default {
   getProduct(id = 0) {
      return new Promise((resolve) => {
         setTimeout(() => {
            const product = find(products, { id: id });
            resolve(product);
         }, 0);
      });
   },
};
