import React from "react";
import Pagination from "./Pagination"
import AddProduct from "./AddProduct"
import Product from "./Product"

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
       <AddProduct/>
      <Grid><Product/></Grid>
      <Pagination/>
    </Flex>
  );
};

export default Products;
