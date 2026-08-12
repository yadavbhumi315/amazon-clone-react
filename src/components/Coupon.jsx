import { useState } from "react";

function Coupon({ cartTotal, setDiscount }) {

  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");

  const applyCoupon = () => {

    if(coupon === "SAVE10"){

      const discountAmount = cartTotal * 0.10;

      setDiscount(discountAmount);

      setMessage("Coupon Applied! You saved 10% 🎉");

    }
    else{

      setDiscount(0);

      setMessage("Invalid Coupon Code ❌");

    }

  };


  return (
    <div className="border rounded-lg p-4 mt-5">

      <h2 className="text-lg font-semibold mb-3">
        Apply Coupon
      </h2>


      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e)=>setCoupon(e.target.value)}
          className="border p-2 rounded w-full"
        />


        <button
          onClick={applyCoupon}
          className="bg-yellow-500 px-5 rounded font-semibold"
        >
          Apply
        </button>

      </div>


      <p className="mt-3 text-sm">
        {message}
      </p>


    </div>
  );
}

export default Coupon;