/* eslint-disable no-constant-condition */

import { call, fork, put, take } from "redux-saga/effects";

import { SET_VIEW_PRODUCT_ID } from "../actions/actionTypes";
import Api from "../MockApi";
import { selectProductToView } from "../actions/actionCreators";

export function* watchViewProductDetail() {
   while (true) {
      const { productId } = yield take(SET_VIEW_PRODUCT_ID);
      const selectedProduct = yield call(Api.getProduct, parseInt(productId));
      yield put(selectProductToView(selectedProduct));
   }
}

export default function* rootSaga() {
   yield fork(watchViewProductDetail);
}
