import { ADD_PRODUCT_TO_CART, SET_SELECTED_PRODUCT, DISPLAY_CART_PRODUCT } from "../actions/actionTypes";
import { uniqueId } from "lodash";
const initialState = {
   products: [],
   selectedProduct: {},
};

export default function (state = initialState, action) {
   switch (action.type) {
      case ADD_PRODUCT_TO_CART:
         return {
            ...state,
            products: [...state.products, { ...action.product, cartId: action.product.id + uniqueId() }],
         };
      case SET_SELECTED_PRODUCT:
         return Object.assign({}, state, {
            selectedProduct: action.selectedProduct,
         });
      case DISPLAY_CART_PRODUCT:
         debugger;
         return {
            products: [...action.product],
         };
      default:
         return state;
   }
}
