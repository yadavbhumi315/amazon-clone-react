import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  wishlistItems: [],
};



const wishlistSlice = createSlice({

  name: "wishlist",

  initialState,


  reducers: {


    // Add or Remove product from wishlist
    toggleWishlist: (state, action) => {


      const productExists = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );


      if (productExists) {


        state.wishlistItems =
          state.wishlistItems.filter(
            (item) => item.id !== action.payload.id
          );


      } else {


        state.wishlistItems.push(action.payload);


      }


    },



    // Remove single item
    removeFromWishlist: (state, action) => {


      state.wishlistItems =
        state.wishlistItems.filter(
          (item) => item.id !== action.payload
        );


    },



    // Remove all wishlist items
    clearWishlist: (state) => {


      state.wishlistItems = [];


    },


  },


});




// Export actions
export const {
  toggleWishlist,
  removeFromWishlist,
  clearWishlist,

} = wishlistSlice.actions;



// Export reducer
export default wishlistSlice.reducer;