import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const cartProducts = useSelector(state => state.cart);

  return (
    <nav className="bg-slate-100 ">
      <div className="md:mx-10 p-4 flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">React Redux</span>
          <Link to="/" className="text-gray-600 cursor-pointer">
            Products
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="cursor-pointer">
            <FontAwesomeIcon icon={faShoppingCart} />
          <span className="text-white text-sm ml-2 bg-red-600 p-2 rounded-full">{cartProducts.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
