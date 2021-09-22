import React, { useState } from "react";
import products from "../data/products";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const ProductListPage = () => {
   const [count, setCount] = useState(1);
   const getPreviousRecord = () => {
      count > 1 ? setCount(count - 1) : setCount(1);
   };
   const getNextRecord = () => {
      count < 5 ? setCount(count + 1) : setCount(5);
   };
   return (
      <>
         <div className="row justify-content-center mt-3">
            {products
               .filter((product) => product.id == count)
               .map((filterProduct) => {
                  return <ProductItem key={filterProduct.id} {...filterProduct} />;
               })}
         </div>
         <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center mt-4 ">
               <li class="page-item">
                  <a class="page-link" href="javascript:void(0)" onClick={() => getPreviousRecord()}>
                     Previous
                  </a>
               </li>
               <li class="page-item">
                  <a class="page-link" href="javascript:void(0)" onClick={() => getNextRecord()}>
                     Next
                  </a>
               </li>
            </ul>
         </nav>
      </>
   );
};

ProductListPage.propTypes = {};
ProductListPage.defaultProps = {};

export default ProductListPage;
