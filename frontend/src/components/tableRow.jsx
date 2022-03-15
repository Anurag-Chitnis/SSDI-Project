import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ product }) => {
  return (
    <>
      <tr>
        <td className="px-2 py-3 whitespace-nowrap">
          <img
            className="h-30 mx-auto ml-4 w-32"
            src={product.image}
            alt="airpods"
          />
        </td>
        <td className="px-5 py-3 pr-0 whitespace-nowrap">
          <p className="text-lg hover:underline text-align-justify font-medium text-gray-700">
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </p>
        </td>
        <td className="px-5 py-4 whitespace-nowrap">
          <p className="text-lg cursor-default text-gray-700 font-medium">
            {product.category}
          </p>
        </td>
        <td className="px-6 py-4 cursor-pointer whitespace-nowrap text-sm text-gray-500">
          <div className="w-20 h-10">
            <div className="relative flex flex-row w-full h-10">
              <input
                type="text"
                readOnly
                value={product.qty}
                className="w-full cursor-default font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
              />
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <p className="text-xl cursor-default text-green-500 font-bold">
            ${product.price}
          </p>
        </td>
        <td className="px-6 py-4 mx-auto whitespace-nowrap text-sm text-gray-500">
          <img
            className="h-5 mx-auto cursor-pointer text-center"
            src="/svg/delete.svg"
            alt="delete icon"
          />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
