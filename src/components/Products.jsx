import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // Dispatch the fetchProducts action to initiate data fetching
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  const loader = (
    // Centered loader using Flexbox
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );

  const errorMessage = (
    // Error message component using Tailwind CSS
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
        <p className="text-lg font-semibold">Oops, an error occurred!</p>
        <p>{error}</p>
      </div>
    </div>
  );

  const cards = loading
    ? loader
    : products.map((product) => (
        <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4 flex"
          key={product.id}
        >
          <div className="bg-white hover:-translate-y-2 hover: rounded-lg shadow-md p-4 flex flex-col h-full w-full">
            <div className="text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-40 mx-auto"
              />
            </div>
            <div className="mt-4">
              <div className="h-16 text-center mt5">
                <h2
                  className="text-xl font-semibold overflow-hidden overflow-ellipsis truncate"
                  title={product.title}
                >
                  {product.title}
                </h2>
              </div>
              {/* <div className="h-8">
                <p className="text-gray-600">${product.price}</p>
              </div> */}
            </div>
            {/* <div className="mt-3">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-400 rounded-full"
              >
                Add To Cart
              </button>
            </div> */}
            <div className="flex-grow flex justify-between items-end">
          <div className="text-green-600 py-2">${product.price}</div>
          <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-400 rounded-full"
              >
                Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
              </button>
        </div>
          </div>
        </div>
      ));

  return (
    <div className="md:mx-10">
      <h1 className="text-blue-700 text-4xl text-center my-10">
        Product Dashboard
      </h1>
      {error ? (
        errorMessage
      ) : loading ? (
        loader
      ) : (
        <div className="flex flex-wrap">{cards}</div>
      )}
    </div>
  );
};

export default Products;
