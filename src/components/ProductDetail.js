import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { addProductToCart, openCartListDrawer, selectProductIdToView } from "../actions/actionCreators";
import store from "../sagas/store";
import { Link } from "react-router-dom";

const ProductDetail = (props) => {
   console.log(props.cart, "props");
   const [product, setProduct] = useState(props.cart.selectedProduct);
   const productId = props.match.params.id;
   useEffect(() => {
      store.dispatch(selectProductIdToView(productId));
   }, []);
   useEffect(() => {
      setProduct(props.cart.selectedProduct);
   }, [props.cart]);
   const addToCart = () => {
      store.dispatch(addProductToCart(product));
   };
   return (
      <div className="row align-items-center">
         <div className="col-md-4">
            <img src={product.image} alt="" />
         </div>
         <div className="col-md-8">
            <div class="card">
               <div class="card-body p-4">
                  <h5 class="card-title">{product.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted"> Price:{product.price}</h6>
                  <p class="card-text">{product.description}</p>
                  <p class="card-text">OS : {product.OS}</p>
                  <p class="card-text">Display : {product.Display}</p>
                  <p class="card-text">Processor : {product.Processor}</p>
                  <p class="card-text">Memory : {product.Memory}</p>
                  <p class="card-text">Weight : {product.Weight}</p>
                  <p class="card-text">Dimension : {product.Dimension}</p>
                  <p class="card-text">GraphicsProcessor : {product.GraphicsProcessor}</p>
                  <div className="row">
                     <div className="col-md-12">
                        <Link to="/">
                           <button
                              type="button"
                              class="btn btn-primary"
                              style={{ cursor: "pointer" }}
                              onClick={() => addToCart()}
                           >
                              Add to cart
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   cart: state.cartReducer,
});
// export default ProductDetail;
export default connect(mapStateToProps)(ProductDetail);
