import { ADD_PRODUCT_TO_CART, SET_SELECTED_PRODUCT } from "../actions/actionTypes";
import products from "../data/products";
const initialState = {
   products: [],
   selectedProduct: {},
};

export default function (state = initialState, action) {
   switch (action.type) {
      case ADD_PRODUCT_TO_CART:
         return {
            ...state,
            products: [...state.products, { ...action.product }],
         };
      case SET_SELECTED_PRODUCT:
         return Object.assign({}, state, {
            selectedProduct: action.selectedProduct,
         });
      default:
         return state;
   }
}
