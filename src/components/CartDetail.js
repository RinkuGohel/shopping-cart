import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { removeProductIdFromCart } from "../actions/actionCreators";
import store from "../sagas/store";
const CartDetail = (props) => {
   const [product, setProduct] = useState(props.cart.products);
   const [total, setTotal] = useState(0);
   console.log(product, "product");

   useEffect(() => {
      setProduct(props.cart?.products);
      let total = props.cart?.products.reduce((sum, product) => sum + product.price, 0);
      setTotal(total);
   }, [props.cart]);
   const removeItem = (id) => {
      store.dispatch(removeProductIdFromCart(id, product));
   };
   return (
      <div class="pt-4">
         <h2>Cart({product?.length})</h2>
         {product?.length > 0 ? (
            <>
               <ul class="list-group">
                  {product?.map((product) => {
                     return (
                        <li class="list-group-item">
                           <CartItem key={uniqueId()} {...product} removeItem={removeItem} />
                        </li>
                     );
                  })}
               </ul>
               <div>Total : {total}</div>
            </>
         ) : (
            <ul class="list-group">
               <li class="list-group-item justify-content-center ">
                  <strong>No Order</strong>
               </li>
            </ul>
         )}
         <div class=" justify-content-end pt-2">
            <Link to="/">
               <button type="button" class="btn btn-light " style={{ cursor: "pointer" }}>
                  Go Back
               </button>
            </Link>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   cart: state.cartReducer,
});
// export default ProductDetail;
export default connect(mapStateToProps)(CartDetail);
