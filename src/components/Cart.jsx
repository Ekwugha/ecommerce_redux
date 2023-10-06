import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeItem } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch a remove action
    dispatch(removeItem(id));
  };

  const toggleDescription = (productId) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const cards = products.map((product) => (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4 flex"
      key={product.id}
    >
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full w-full">
        <div className="text-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-40 mx-auto"
          />
        </div>
        <div className="mt-4">
          <div className="h-10">
            <h2
              className="text-xl font-semibold overflow-hidden overflow-ellipsis truncate"
              title={product.title}
            >
              {product.title}
            </h2>
          </div>
          <div
            className={`h-auto ${
              expandedDescriptions[product.id] ? "block" : "hidden"
            }`}
          >
            <h3 className="text-black">{product.description}</h3>
          </div>
          {product.description.length > 100 && (
            <div className="mt-2 cursor-pointer">
              {expandedDescriptions[product.id] ? (
                <button
                  onClick={() => toggleDescription(product.id)}
                  className="text-blue-600"
                >
                  Read Less
                </button>
              ) : (
                <>
                  {product.description.slice(0, 100)}
                  <span
                    onClick={() => toggleDescription(product.id)}
                    className="text-blue-600 cursor-pointer"
                  >
                    ... Read More
                  </span>
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex-grow flex justify-between items-end mt-5">
          <div className="text-green-600">${product.price}</div>
          <span
            className="cursor-pointer text-red-600"
            onClick={() => removeFromCart(product.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="md:mx-10 flex flex-wrap my-5">
      <div className="w-full flex flex-wrap">{cards}</div>
    </div>
  );
};

export default Cart;
