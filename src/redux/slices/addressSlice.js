import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  addresses: [],
  selectedAddress: null,
};


const addressSlice = createSlice({

  name: "address",

  initialState,

  reducers: {


    addAddress: (state, action) => {

      state.addresses.push(action.payload);

    },


    removeAddress: (state, action) => {

      state.addresses =
        state.addresses.filter(
          (address)=> address.id !== action.payload
        );

    },


    selectAddress: (state, action)=>{

      state.selectedAddress = action.payload;

    },


  },


});


export const {
  addAddress,
  removeAddress,
  selectAddress,

} = addressSlice.actions;


export default addressSlice.reducer;