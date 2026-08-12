import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";

import {
  applyCoupon,
} from "../../redux/slices/couponSlice";


import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaShoppingBag,
} from "react-icons/fa";


function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );


  const discount = useSelector(
    (state)=> state.coupon.discount
  );


  const [coupon,setCoupon] = useState("");

  const [message,setMessage] = useState("");



  const subtotal = cartItems.reduce(
    (total,item)=>
      total + item.price * item.quantity,
    0
  );


  const shipping = subtotal > 0 ? 99 : 0;



  const total =
    subtotal + shipping - discount;



  const handleCoupon = ()=>{


    if(coupon.trim().toUpperCase()==="SAVE10"){


      const discountAmount =
        subtotal * 0.10;


      dispatch(
        applyCoupon({

          discount:discountAmount,

          code:"SAVE10"

        })
      );


      setMessage(
        "Coupon Applied! You saved 10% 🎉"
      );


    }
    else{


      setMessage(
        "Invalid Coupon Code ❌"
      );


    }


  };




  if(cartItems.length===0){

    return (

      <div className="min-h-[70vh] flex flex-col justify-center items-center">

        <FaShoppingBag className="text-7xl text-gray-400 mb-5"/>


        <h1 className="text-4xl font-bold">
          Your Cart is Empty
        </h1>


        <Link
          to="/"
          className="mt-8 bg-yellow-400 px-8 py-3 rounded-lg font-semibold"
        >
          Continue Shopping
        </Link>


      </div>

    );

  }



return (

<div className="bg-[#EAEDED] min-h-screen py-10">


<div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-5">


{/* LEFT */}

<div className="lg:col-span-2 bg-white rounded-lg shadow p-6">


<h1 className="text-3xl font-bold border-b pb-5">
Shopping Cart
</h1>



{
cartItems.map((item)=>(


<div
key={item.id}
className="flex flex-col md:flex-row justify-between border-b py-6 gap-5"
>


<div className="flex gap-5">


<img
src={item.image}
alt={item.title}
className="w-36 h-36 object-contain"
/>


<div>


<h2 className="text-xl font-semibold">
{item.title}
</h2>


<p className="text-green-600 mt-2">
In Stock
</p>


<p className="text-2xl font-bold mt-3">
₹{item.price.toLocaleString("en-IN")}
</p>



<div className="flex items-center gap-4 mt-5">


<button
onClick={()=>
dispatch(decreaseQuantity(item.id))
}
className="bg-gray-200 p-2 rounded"
>
<FaMinus/>
</button>


<span className="font-bold">
{item.quantity}
</span>



<button
onClick={()=>
dispatch(increaseQuantity(item.id))
}
className="bg-gray-200 p-2 rounded"
>
<FaPlus/>
</button>


</div>


</div>


</div>




<button

onClick={()=>
dispatch(removeFromCart(item.id))
}

className="bg-red-500 text-white px-5 py-2 rounded-lg h-fit flex gap-2 items-center"

>

<FaTrash/>
Remove

</button>



</div>


))

}


</div>





{/* RIGHT */}

<div className="bg-white rounded-lg shadow p-6 h-fit sticky top-5">


<h2 className="text-2xl font-bold mb-6">
Order Summary
</h2>



<div className="mb-6">


<h3 className="font-semibold mb-3">
Apply Coupon
</h3>



<div className="flex gap-2">


<input

type="text"

placeholder="SAVE10"

value={coupon}

onChange={(e)=>setCoupon(e.target.value)}

className="border p-2 rounded w-full"

/>


<button

onClick={handleCoupon}

className="bg-yellow-400 px-4 rounded font-semibold"

>
Apply
</button>


</div>



<p className="text-sm mt-2 text-green-600">
{message}
</p>


</div>




<div className="flex justify-between mb-4">

<span>Items</span>

<span>{cartItems.length}</span>

</div>



<div className="flex justify-between mb-4">

<span>Subtotal</span>

<span>
₹{subtotal.toLocaleString("en-IN")}
</span>

</div>



<div className="flex justify-between mb-4">

<span>Discount</span>

<span className="text-green-600">

- ₹{discount.toLocaleString("en-IN")}

</span>

</div>




<div className="flex justify-between mb-4">

<span>Shipping</span>

<span>
₹{shipping}
</span>

</div>



<hr/>


<div className="flex justify-between mt-5 text-2xl font-bold">


<span>Total</span>


<span>
₹{total.toLocaleString("en-IN")}
</span>


</div>



<Link

to="/checkout"

className="block mt-8 bg-yellow-400 text-center py-3 rounded-lg font-bold"

>

Proceed to Checkout

</Link>


</div>



</div>


</div>


);

}


export default Cart;