import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ cartId, image, title, description, price, removeItem }) => {
   return (
      <div className="row">
         <div className="col-md-2">
            <img src={image} alt="" className="img-thumbnail" />
         </div>
         <div className="col-md-6">
            <h3>{title}</h3>
            <p>{description}</p>
         </div>
         <div className="col-md-2">
            <h5>{price}</h5>
         </div>
         <div className="row">
            <div className="col-md-12">
               <button
                  type="button"
                  class="btn btn-secondary"
                  style={{ cursor: "pointer" }}
                  onClick={() => removeItem(cartId)}
               >
                  Remove Item
               </button>
            </div>
         </div>
      </div>
   );
};

CartItem.propTypes = {
   id: PropTypes.number,
   image: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
};
CartItem.defaultProps = {};

export default CartItem;
