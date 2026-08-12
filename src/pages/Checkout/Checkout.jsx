import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Checkout(){


const cartItems = useSelector(
(state)=>state.cart.cartItems
);


const discount = useSelector(
(state)=>state.coupon.discount
);



const subtotal = cartItems.reduce(
(total,item)=>
total + item.price * item.quantity,
0
);



const shipping = subtotal > 0 ? 99 : 0;


const total =
subtotal + shipping - discount;



return(

<div className="bg-[#EAEDED] min-h-screen py-10">


<div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">


<h1 className="text-3xl font-bold mb-8">
Checkout
</h1>



{
cartItems.map((item)=>(


<div
key={item.id}
className="flex justify-between border-b py-4"
>


<div>

<h2 className="font-semibold">
{item.title}
</h2>


<p>
Qty : {item.quantity}
</p>


</div>



<p className="font-bold">

₹{(item.price * item.quantity).toLocaleString("en-IN")}

</p>


</div>


))

}




<div className="mt-8 space-y-4 text-lg">


<div className="flex justify-between">

<span>
Subtotal
</span>


<span>
₹{subtotal.toLocaleString("en-IN")}
</span>


</div>



<div className="flex justify-between">


<span>
Shipping
</span>


<span>
₹{shipping}
</span>


</div>




<div className="flex justify-between text-green-600">


<span>
Discount
</span>


<span>
- ₹{discount.toLocaleString("en-IN")}
</span>


</div>




<hr/>


<div className="flex justify-between text-2xl font-bold">


<span>
Total
</span>


<span>
₹{total.toLocaleString("en-IN")}
</span>


</div>



</div>



<button

className="w-full mt-8 bg-yellow-400 py-3 rounded-lg font-bold"

>

Place Order

</button>



<Link

to="/"

className="block text-center mt-4"

>

Continue Shopping

</Link>



</div>


</div>


);


}


export default Checkout;