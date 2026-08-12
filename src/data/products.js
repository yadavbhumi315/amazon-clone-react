import iphone from "../assets/images/products/iphone.jpg";
import laptop from "../assets/images/products/laptop.jpg";
import headphones from "../assets/images/products/headphones.jpg";
import watch from "../assets/images/products/watch.jpg";
import shoes from "../assets/images/products/shoes.jpg";
import shirt from "../assets/images/products/shirt.jpg";
import camera from "../assets/images/products/camera.jpg";
import speaker from "../assets/images/products/speaker.jpg";
import airpods from "../assets/images/products/airpods.jpg";

const products = [
  {
  id: 1,

  title: "Apple iPhone 15",

  brand: "Apple",

  category: "Mobiles",

  price: 79999,

  oldPrice: 89999,

  discount: 11,

  image: iphone,

  images: [
    iphone,
    iphone,
    iphone,
    iphone,
  ],

  rating: 4.8,

  reviews: 2845,

  stock: 25,

  description:
    "Apple iPhone 15 with A16 Bionic chip, Super Retina XDR display and Dynamic Island.",

  features: [
    "A16 Bionic Chip",
    "48MP Main Camera",
    "Dynamic Island",
    "USB-C Charging",
    "Face ID",
  ],
},
{
  id: 2,

  title: "Gaming Laptop",

  brand: "ASUS",

  category: "Electronics",

  price: 69999,

  oldPrice: 79999,

  discount: 13,

  image: laptop,

  images: [
    laptop,
    laptop,
    laptop,
    laptop,
  ],

  rating: 4.7,

  reviews: 1840,

  stock: 12,

  description:
    "Gaming Laptop powered by Intel Core i7 processor with RTX graphics and 16GB RAM.",

  features: [
    "Intel Core i7",
    "RTX Graphics",
    "16GB RAM",
    "512GB SSD",
    "144Hz Display",
  ],
},
{
  id: 3,

  title: "Wireless Headphones",

  brand: "Sony",

  category: "Electronics",

  price: 3999,

  oldPrice: 5999,

  discount: 33,

  image: headphones,

  images: [
    headphones,
    headphones,
    headphones,
    headphones,
  ],

  rating: 4.5,

  reviews: 925,

  stock: 42,

  description:
    "Premium wireless Bluetooth headphones with powerful bass and up to 30 hours battery life.",

  features: [
    "Bluetooth 5.3",
    "Noise Cancellation",
    "30 Hours Battery",
    "Fast Charging",
    "Deep Bass",
  ],
},
{
  id: 4,

  title: "Smart Watch",

  brand: "Noise",

  category: "Watches",

  price: 4999,

  oldPrice: 6999,

  discount: 29,

  image: watch,

  images: [
    watch,
    watch,
    watch,
    watch,
  ],

  rating: 4.4,

  reviews: 1342,

  stock: 35,

  description:
    "Smart watch with AMOLED display, heart rate monitor, SpO2 tracking and multiple sports modes.",

  features: [
    "AMOLED Display",
    "Heart Rate Monitor",
    "SpO2 Tracking",
    "7 Days Battery",
    "Bluetooth Calling",
  ],
},
{
  id: 5,

  title: "Running Shoes",

  brand: "Nike",

  category: "Shoes",

  price: 2499,

  oldPrice: 3999,

  discount: 38,

  image: shoes,

  images: [
    shoes,
    shoes,
    shoes,
    shoes,
  ],

  rating: 4.6,

  reviews: 785,

  stock: 48,

  description:
    "Lightweight running shoes designed for comfort, walking, jogging and everyday sports activities.",

  features: [
    "Lightweight",
    "Breathable Mesh",
    "Rubber Sole",
    "Anti-Slip Grip",
    "Comfort Fit",
  ],
},
{
  id: 6,

  title: "Men's Cotton Shirt",

  brand: "Allen Solly",

  category: "Fashion",

  price: 999,

  oldPrice: 1499,

  discount: 33,

  image: shirt,

  images: [
    shirt,
    shirt,
    shirt,
    shirt,
  ],

  rating: 4.3,

  reviews: 412,

  stock: 60,

  description:
    "Premium cotton slim-fit shirt suitable for office wear, parties and casual occasions.",

  features: [
    "100% Cotton",
    "Slim Fit",
    "Machine Wash",
    "Full Sleeve",
    "Premium Fabric",
  ],
},
{
  id: 7,

  title: "DSLR Camera",

  brand: "Canon",

  category: "Electronics",

  price: 45999,

  oldPrice: 52999,

  discount: 13,

  image: camera,

  images: [
    camera,
    camera,
    camera,
    camera,
  ],

  rating: 4.8,

  reviews: 1168,

  stock: 15,

  description:
    "Professional DSLR camera with 24MP sensor, 4K video recording and interchangeable lens support.",

  features: [
    "24MP Sensor",
    "4K Video",
    "Wi-Fi Connectivity",
    "Interchangeable Lens",
    "Fast Auto Focus",
  ],
},
{
  id: 8,

  title: "Bluetooth Speaker",

  brand: "JBL",

  category: "Audio",

  price: 2999,

  oldPrice: 3999,

  discount: 25,

  image: speaker,

  images: [
    speaker,
    speaker,
    speaker,
    speaker,
  ],

  rating: 4.5,

  reviews: 968,

  stock: 32,

  description:
    "Portable Bluetooth speaker with powerful bass, waterproof design and up to 12 hours battery backup.",

  features: [
    "Bluetooth 5.3",
    "12 Hours Battery",
    "Water Resistant",
    "Deep Bass",
    "Built-in Microphone",
  ],
},
{
  id: 9,

  title: "Apple AirPods Pro",

  brand: "Apple",

  category: "Audio",

  price: 19999,

  oldPrice: 24999,

  discount: 20,

  image: airpods,

  images: [
    airpods,
    airpods,
    airpods,
    airpods,
  ],

  rating: 4.9,

  reviews: 4215,

  stock: 20,

  description:
    "Apple AirPods Pro with Active Noise Cancellation, Transparency Mode, Spatial Audio and USB-C charging case.",

  features: [
    "Active Noise Cancellation",
    "Spatial Audio",
    "Transparency Mode",
    "USB-C Charging",
    "Sweat & Water Resistant",
  ],
}
];

export default products;
