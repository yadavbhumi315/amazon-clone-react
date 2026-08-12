import { FaBoxOpen } from "react-icons/fa";

function Orders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center">

        <FaBoxOpen className="text-7xl text-gray-400 mb-6" />

        <h1 className="text-4xl font-bold">
          No Orders Yet
        </h1>

        <p className="text-gray-500 mt-3">
          Your orders will appear here after checkout.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-[#EAEDED] min-h-screen py-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Your Orders
        </h1>

        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow mb-6 p-6"
          >
            <div className="flex justify-between">

              <div>

                <p className="font-bold">
                  Order ID
                </p>

                <p>{order.id}</p>

              </div>

              <div>

                <p className="font-bold">
                  Total
                </p>

                <p>
                  ₹{order.total.toLocaleString("en-IN")}
                </p>

              </div>

            </div>

            <hr className="my-5" />

            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 py-4 border-b"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div>

                  <h2 className="font-bold">
                    {item.title}
                  </h2>

                  <p>
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <p>
                    Qty : {item.quantity}
                  </p>

                </div>

              </div>
            ))}

          </div>
        ))}

      </div>
    </div>
  );
}

export default Orders;