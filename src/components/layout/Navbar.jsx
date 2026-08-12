import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const [showAccount, setShowAccount] = useState(false);

  const { user, logout } = useAuth();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const wishlistItems = useSelector(
    (state) => state.wishlist?.wishlistItems || []
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-[#131921] text-white w-full h- [70px] flex items-center px-5">

      {/* Logo */}

      <Link
        to="/"
        className="mr-6 flex- shrink-0"
      >
        <h1 className="text-4xl font-bold hover:text-yellow-400 transition">
          Amazon
        </h1>
      </Link>

      {/* Deliver */}

      <div className="hidden lg:flex items-center mr-6 cursor-pointer hover:border border-white px-2 py-1 rounded">

        <FaMapMarkerAlt className="text-lg mr-2" />

        <div>

          <p className="text-xs text-gray-300">
            Deliver to
          </p>

          <p className="text-sm font-semibold">
            India
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="flex flex-1 h-11">

        <input
          type="text"
          placeholder="Search products..."
          className="
          flex-1
          px-4
          text-black
          bg-white
          outline-none
          rounded-l-md
          text-base
          "
        />

        <button
          className="
          w-14
          bg-yellow-400
          hover:bg-yellow-500
          text-black
          rounded-r-md
          flex
          items-center
          justify-center
          "
        >
          <FaSearch size={20} />
        </button>

      </div>

      {/* Right Side */}

      <div className="ml-auto flex items-center gap-8 pl-8">

        {/* Wishlist */}

        <Link
          to="/wishlist"
          className="relative flex flex-col items-center hover:text-yellow-400 transition"
        >

          <FaHeart className="text-2xl text-red-400" />

          <span className="text-sm">
            Wishlist
          </span>

          {wishlistItems.length > 0 && (

            <span
              className="
              absolute
              -top-2
              -right-3
              bg-red-500
              rounded-full
              text-xs
              px-2
              "
            >
              {wishlistItems.length}
            </span>

          )}

        </Link>

        {/* Cart */}

        <Link
          to="/cart"
          className="relative flex flex-col items-center hover:text-yellow-400 transition"
        >

          <FaShoppingCart className="text-2xl" />

          <span className="text-sm">
            Cart
          </span>

          {cartCount > 0 && (

            <span
              className="
              absolute
              -top-2
              -right-3
              bg-yellow-400
              text-black
              rounded-full
              text-xs
              px-2
              "
            >
              {cartCount}
            </span>

          )}

        </Link>

        {/* Account */}

        <div className="relative">

          <button
            onClick={() => setShowAccount(!showAccount)}
            className="
            flex
            flex-col
            items-center
            hover:text-yellow-400
            transition
            "
          >

            <FaUser className="text-2xl" />

            <span className="text-sm font-medium">
              {user ? user.name : "Account"}
            </span>

          </button>
                    {showAccount && (
            <div
              className="
                absolute
                right-0
                top-14
                w-56
                bg-white
                text-black
                rounded-lg
                shadow-2xl
                overflow-hidden
                z-50
              "
            >
              {user ? (
                <>
                  <div className="px-4 py-3 border-b bg-gray-50">
                    <p className="text-sm text-gray-500">
                      Signed in as
                    </p>

                    <p className="font-bold text-lg">
                      {user.name}
                    </p>

                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    to="/profile"
                    onClick={() => setShowAccount(false)}
                    className="
                      block
                      px-4
                      py-3
                      hover:bg-gray-100
                      transition
                    "
                  >
                    👤 My Profile
                  </Link>

                  <Link
                    to="/orders"
                    onClick={() => setShowAccount(false)}
                    className="
                      block
                      px-4
                      py-3
                      hover:bg-gray-100
                      transition
                    "
                  >
                    📦 My Orders
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setShowAccount(false);
                    }}
                    className="
                      w-full
                      text-left
                      px-4
                      py-3
                      hover:bg-red-50
                      text-red-600
                      transition
                    "
                  >
                    🚪 Logout
                  </button>
                </>
              ) : (
                <div className="p-4">
                  <Link
                    to="/login"
                    onClick={() => setShowAccount(false)}
                    className="
                      block
                      w-full
                      text-center
                      bg-yellow-400
                      hover:bg-yellow-500
                      py-3
                      rounded-md
                      font-semibold
                    "
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setShowAccount(false)}
                    className="
                      block
                      mt-3
                      text-center
                      text-blue-600
                      hover:underline
                    "
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;