/* eslint-disable no-constant-condition */

import { call, fork, put, take } from "redux-saga/effects";

import { SET_VIEW_PRODUCT_ID, REMOVE_SELECTED_PRODUCT } from "../actions/actionTypes";
import Api from "../MockApi";
import { selectProductToView, removeProdctDisplay } from "../actions/actionCreators";
import { FormText } from "react-bootstrap";

export function* watchViewProductDetail() {
   while (true) {
      const { productId } = yield take(SET_VIEW_PRODUCT_ID);
      const selectedProduct = yield call(Api.getProduct, parseInt(productId));
      yield put(selectProductToView(selectedProduct));
   }
}

export function* removeProduct() {
   while (true) {
      const { productId, products } = yield take(REMOVE_SELECTED_PRODUCT);
      const cartProducts = yield call(Api.removeProduct, parseInt(productId), products);
      yield put(removeProdctDisplay(cartProducts));
   }
}

export default function* rootSaga() {
   yield fork(watchViewProductDetail);
   yield fork(removeProduct);
}
