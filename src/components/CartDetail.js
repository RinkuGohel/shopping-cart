import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartDetail = (props) => {
   const [product, setProduct] = useState(props.cart.products);
   console.log(product, "product");
   const productId = props.match.params.id;

   useEffect(() => {
      setProduct(props.cart.products);
   }, [props.cart]);
   return (
      <div class="pt-4">
         <h2>Cart</h2>

         <ul class="list-group">
            {product?.map((product) => {
               return (
                  <li class="list-group-item">
                     <CartItem key={uniqueId()} {...product} />
                  </li>
               );
            })}
         </ul>
         <div class=" justify-content-end pt-2">
            <Link to="/">
               <button type="button" class="btn btn-light ">
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
