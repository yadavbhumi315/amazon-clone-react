import iphone from "../../assets/images/products/iphone.jpg";
import laptop from "../../assets/images/products/laptop.jpg";
import headphones from "../../assets/images/products/headphones.jpg";
import watch from "../../assets/images/products/watch.jpg";
import shoes from "../../assets/images/products/shoes.jpg";
import airpods from "../../assets/images/products/airpods.jpg";

const deals = [
  {
    id: 1,
    title: "Apple iPhone 15",
    image: iphone,
    price: 79999,
    oldPrice: 89999,
    discount: 11,
    rating: 4.8,
  },

  {
    id: 2,
    title: "Gaming Laptop",
    image: laptop,
    price: 69999,
    oldPrice: 84999,
    discount: 18,
    rating: 4.7,
  },

  {
    id: 3,
    title: "Wireless Headphones",
    image: headphones,
    price: 3999,
    oldPrice: 5999,
    discount: 33,
    rating: 4.6,
  },

  {
    id: 4,
    title: "Smart Watch",
    image: watch,
    price: 4999,
    oldPrice: 6999,
    discount: 29,
    rating: 4.5,
  },

  {
    id: 5,
    title: "Running Shoes",
    image: shoes,
    price: 2499,
    oldPrice: 3999,
    discount: 38,
    rating: 4.7,
  },

  {
    id: 6,
    title: "Apple AirPods Pro",
    image: airpods,
    price: 19999,
    oldPrice: 24999,
    discount: 20,
    rating: 4.9,
  },
];

export default deals;