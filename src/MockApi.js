import productsMockData from "./data/products";
import _ from "lodash";
export const products = productsMockData;

export default {
   getProduct(id = 0) {
      return new Promise((resolve) => {
         setTimeout(() => {
            const product = _.find(products, { id: id });
            resolve(product);
         }, 0);
      });
   },
   removeProduct(id = 0, products) {
      return new Promise((resolve) => {
         setTimeout(() => {
            const product = _.filter(products, function (products) {
               return products.cartId != id;
            });
            resolve(product);
         }, 0);
      });
   },
};
