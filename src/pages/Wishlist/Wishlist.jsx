import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { removeFromWishlist } from "../../redux/slices/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">
          ❤️ Your Wishlist is Empty
        </h1>

        <Link
          to="/"
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        My Wishlist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {wishlistItems.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-5"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain"
            />

            <h2 className="font-bold text-lg mt-4">
              {product.title}
            </h2>

            <h3 className="text-2xl font-bold mt-3">
              ₹{product.price.toLocaleString("en-IN")}
            </h3>

            <button
              onClick={() => dispatch(removeFromWishlist(product.id))}
              className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex justify-center items-center gap-2"
            >
              <FaTrash />
              Remove
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Wishlist;