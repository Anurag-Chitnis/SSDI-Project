import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";

// Import Custom Components
import TableHead from "../components/tableHead";
import TableBody from "../components/tableBody";
import TableRow from "../components/tableRow";
// Import Redux Actions
import { addToCart } from "../redux/cart/cartAction";

const CartScreen = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const qty = search.split("=")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    if (search) {
      dispatch(addToCart(qty, id));
    }
  }, [dispatch, qty, id]);

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="mt-5">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-100">
                <TableHead />
                <TableBody>
                  {cartItems.map((product) => (
                    <TableRow key={product._id} product={product} />
                  ))}
                </TableBody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-10">
        <div className="subtotal">
          <span className="text-blue-400 text-2xl pr-2 uppercase font-black">
            Total
          </span>
          <span className="text-2xl font-bold pr-2">
            {parseFloat(
              cartItems.reduce((acc, product) => {
                acc = acc + product.qty * product.price;
                return acc;
              }, 0)
            ).toFixed(2)}
          </span>
        </div>
      </div>
      <div className="check-out-link mt-10 text-right">
        <Link to="/checkoutsteps/shipping">Proceed To Checkout &#8594;</Link>
      </div>
    </div>
  );
};

export default CartScreen;
