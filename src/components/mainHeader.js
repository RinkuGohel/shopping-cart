import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const MainHeader = (props) => {
   return (
      <div>
         <header class="p-3 bg-dark text-white" style={{ background: "black" }}>
            <div class="container">
               <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  <Link to="/">
                     <div class="text-white">Shopping Cart</div>
                  </Link>
                  <div class="text-end ml-auto">
                     <Link to="/cart-detail">
                        <button type="button" class="btn btn-outline-light me-2">
                           View Cart ({props.cart.products.length})
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </header>
      </div>
   );
};

const mapStateToProps = (state) => ({
   cart: state.cartReducer,
});
// export default ProductDetail;
export default connect(mapStateToProps)(MainHeader);
