import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, price, title }) => {
   return (
      <div className="col-md-3 col-sm-6 col-xs-6">
         <div class="card">
            <img src={image} class="card-img-top" />
            <div class="card-body p-3 pt-0">
               <h5 class="card-title">{title}</h5>
               <h6 class="card-subtitle mb-2 text-muted">Price:{price}</h6>
               <Link to={"products/" + id}>
                  <a href="#" class="btn btn-primary">
                     View Detail
                  </a>
               </Link>
            </div>
         </div>
      </div>
   );
};

ProductItem.propTypes = {
   id: PropTypes.number,
   image: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
};
ProductItem.defaultProps = {};

export default ProductItem;
