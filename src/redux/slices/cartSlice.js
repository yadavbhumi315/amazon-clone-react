import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    cartItems: [],

};



const cartSlice = createSlice({

    name: "cart",

    initialState,


    reducers:{


        // Add product to cart
        addToCart:(state, action)=>{


            const existingItem =
                state.cartItems.find(
                    (item)=> item.id === action.payload.id
                );



            if(existingItem){


                existingItem.quantity += 1;


            }
            else{


                state.cartItems.push({

                    ...action.payload,

                    quantity:1,

                });


            }


        },





        // Remove product completely
        removeFromCart:(state, action)=>{


            state.cartItems =
                state.cartItems.filter(
                    (item)=> item.id !== action.payload
                );


        },





        // Increase quantity
        increaseQuantity:(state, action)=>{


            const item =
                state.cartItems.find(
                    (item)=> item.id === action.payload
                );


            if(item){

                item.quantity += 1;

            }


        },






        // Decrease quantity
        decreaseQuantity:(state, action)=>{


            const item =
                state.cartItems.find(
                    (item)=> item.id === action.payload
                );



            if(item && item.quantity > 1){


                item.quantity -= 1;


            }



        },







        // Empty cart after order placed
        clearCart:(state)=>{


            state.cartItems = [];


        },


    }


});





export const {

    addToCart,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    clearCart,


} = cartSlice.actions;





export default cartSlice.reducer;