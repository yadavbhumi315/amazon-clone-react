import { useDispatch, useSelector } from "react-redux";

import {
  toggleWishlist
} from "../../redux/slices/wishlistSlice";

import {
  addToCart
} from "../../redux/slices/cartSlice";


import {
  FaHeart,
  FaShoppingCart
} from "react-icons/fa";



function ProductCard({ product }) {


  const dispatch = useDispatch();



  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );



  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );




  const handleWishlist = () => {

    dispatch(toggleWishlist(product));

  };





  const handleAddToCart = () => {

    dispatch(addToCart(product));

  };





  return (

    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 relative">


      {/* Wishlist Button */}

      <button

        onClick={handleWishlist}

        className="absolute top-4 right-4 text-2xl"

      >

        <FaHeart

          className={
            isWishlisted
              ? "text-red-500"
              : "text-gray-300"
          }

        />

      </button>





      {/* Product Image */}

      <img

        src={product.image}

        alt={product.title}

        className="h-52 w-full object-contain"

      />





      {/* Product Information */}

      <h2 className="font-semibold text-lg mt-4 line-clamp-2">

        {product.title}

      </h2>



      <p className="text-gray-500 text-sm mt-2">

        {product.category}

      </p>





      <div className="flex justify-between items-center mt-4">


        <span className="text-xl font-bold">

          ₹{product.price.toLocaleString("en-IN")}

        </span>


      </div>





      {/* Add To Cart Button */}

      <button

        onClick={handleAddToCart}

        className="mt-5 w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"

      >

        <FaShoppingCart/>

        Add To Cart

      </button>



    </div>

  );

}


export default ProductCard;