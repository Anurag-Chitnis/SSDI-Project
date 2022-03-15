import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";

// Import Redux Actions
import { addToCart } from "../redux/cart/cartAction";

const CartScreen = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const qty = search.split("=")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart(qty, id));
  }, [dispatch]);

  console.log(id, qty);
  return (
    <div className="wrapper">
      <h1 className="text-3xl">Hello</h1>
    </div>
  );
};

export default CartScreen;
