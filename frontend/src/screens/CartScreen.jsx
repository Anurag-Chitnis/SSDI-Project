import React from "react";
import { Link, useParams } from "react-router-dom";

const CartScreen = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="wrapper">
      <h1 className="text-3xl">Hello</h1>
    </div>
  );
};

export default CartScreen;
