import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";

import products from "../../data/products";
import { addToCart } from "../../redux/slices/cartSlice";
import ProductCard from "../../components/Product/ProductCard";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

const [selectedImage, setSelectedImage] = useState(
  product.images[0]
);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Product Not Found</h1>

        <Link
          to="/"
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }

    toast.success("Added to Cart");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  const similarProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="bg-[#EAEDED] min-h-screen py-10">

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Product Image */}

          <div className="flex gap-6">

  {/* Left Thumbnails */}

  <div className="flex flex-col gap-3">

    {product.images.map((img, index) => (

      <img
        key={index}
        src={img}
        alt=""
        onClick={() => setSelectedImage(img)}
        className={`
          w-20
          h-20
          object-contain
          border-2
          rounded-lg
          cursor-pointer
          bg-white
          p-2
          transition

          ${
            selectedImage === img
              ? "border-yellow-500"
              : "border-gray-300"
          }
        `}
      />

    ))}

  </div>

  {/* Main Image */}

  <div className="flex-1 flex justify-center items-center bg-gray-50 rounded-xl p-8">

    <img
      src={selectedImage}
      alt={product.title}
      className="max-h- [450px] object-contain hover:scale-110 transition duration-300"
    />

  </div>

</div>

          {/* Product Details */}

          <div>

            <h1 className="text-4xl font-bold">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mt-4">

  <div className="flex items-center text-yellow-500">
    <FaStar />
    <span className="ml-1 font-semibold">
      {product.rating}
    </span>
  </div>

  <span className="text-blue-600 cursor-pointer hover:underline">
    {product.reviews.toLocaleString()} Ratings
  </span>

</div>

           <div className="mt-6">

  <span className="bg-red-600 text-white px-3 py-1 rounded font-bold">
    -{product.discount}%
  </span>

  <div className="mt-4 flex items-end gap-3">

    <span className="text-4xl font-bold text-red-600">
      ₹{product.price.toLocaleString("en-IN")}
    </span>

    <span className="text-gray-500 line-through text-xl">
      ₹{product.oldPrice.toLocaleString("en-IN")}
    </span>

  </div>

  <p className="text-green-600 font-semibold mt-2">
    You Save ₹
    {(product.oldPrice - product.price).toLocaleString("en-IN")}
  </p>

</div>

            <p className="mt-6 text-gray-700 leading-8">
              {product.description}
            </p>

            <div className="mt-8 border-y py-6 space-y-3">

  <p>
    <span className="font-semibold">
      Brand :
    </span>{" "}
    {product.brand}
  </p>

  <p>
    <span className="font-semibold">
      Category :
    </span>{" "}
    {product.category}
  </p>

  <p className="flex items-center gap-2 text-green-600 font-bold">
    <FaCheckCircle />
    In Stock ({product.stock} Available)
  </p>

  <p className="text-green-700 font-semibold">
    FREE Delivery Tomorrow
  </p>

  <p className="text-gray-700">
    Secure transaction
  </p>

  <p className="text-gray-700">
    7 Days Replacement
  </p>

</div>

            {/* Quantity */}

            <div className="flex items-center gap-4 mt-8">

              <span className="font-bold">
                Quantity
              </span>

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
                className="bg-gray-200 px-4 py-2 rounded"
              >
                -
              </button>

              <span className="font-bold text-xl">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="bg-gray-200 px-4 py-2 rounded"
              >
                +
              </button>

            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-bold flex justify-center items-center gap-2"
              >
                <FaShoppingCart />
                Add To Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2"
              >
                <FaBolt />
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>
      <div className="mt-10">

  <h3 className="text-2xl font-bold mb-4">
    About this item
  </h3>

  <ul className="list-disc ml-6 space-y-2">

    {product.features.map((feature, index) => (

      <li key={index}>
        {feature}
      </li>

    ))}

  </ul>

</div>

      {/* Similar Products */}

      <div className="max-w-7xl mx-auto mt-12">

        <h2 className="text-3xl font-bold mb-8">
          Similar Products
        </h2>

        {similarProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {similarProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}

          </div>
        ) : (
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-gray-600">
              No similar products available.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Product;