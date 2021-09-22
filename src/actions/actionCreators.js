import { ADD_PRODUCT_TO_CART, SET_SELECTED_PRODUCT, SET_VIEW_PRODUCT_ID } from "./actionTypes";

export const selectProductToView = (selectedProduct) => {
   return { type: SET_SELECTED_PRODUCT, selectedProduct };
};

export const selectProductIdToView = (productId) => {
   return { type: SET_VIEW_PRODUCT_ID, productId };
};

export const addProductToCart = (product) => {
   return { type: ADD_PRODUCT_TO_CART, product };
};
