import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

const saveOrders = (orders) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};

const orderSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {
    placeOrder: (state, action) => {
      const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        ...action.payload,
      };

      state.orders.unshift(newOrder);
      saveOrders(state.orders);
    },
  },
});

export const { placeOrder } = orderSlice.actions;

export default orderSlice.reducer;