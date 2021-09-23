import {
   ADD_PRODUCT_TO_CART,
   SET_SELECTED_PRODUCT,
   SET_VIEW_PRODUCT_ID,
   DISPLAY_CART_PRODUCT,
   REMOVE_SELECTED_PRODUCT,
} from "./actionTypes";

export const selectProductToView = (selectedProduct) => {
   debugger;
   return { type: SET_SELECTED_PRODUCT, selectedProduct };
};

export const selectProductIdToView = (productId) => {
   return { type: SET_VIEW_PRODUCT_ID, productId };
};

export const addProductToCart = (product) => {
   return { type: ADD_PRODUCT_TO_CART, product };
};

export const removeProdctDisplay = (product) => {
   return { type: DISPLAY_CART_PRODUCT, product };
};
export const removeProductIdFromCart = (productId, products) => {
   debugger;
   return { type: REMOVE_SELECTED_PRODUCT, productId, products };
};
