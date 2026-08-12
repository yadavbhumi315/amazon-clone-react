import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    discount: 0,
    couponCode: "",
};


const couponSlice = createSlice({

    name: "coupon",

    initialState,


    reducers: {


        applyCoupon: (state, action) => {

            state.discount = action.payload.discount;
            state.couponCode = action.payload.code;

        },


        removeCoupon: (state) => {

            state.discount = 0;
            state.couponCode = "";

        }


    }


});


export const {
    applyCoupon,
    removeCoupon

} = couponSlice.actions;


export default couponSlice.reducer;