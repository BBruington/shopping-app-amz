import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  //define the container
  name: "basket",
  initialState,
  //define functions that manipulate container
  reducers: {
    addToBasket: (state, action) => {
      //aka keep/spread current items inside the basket and add
      //whatever is the payload to the basket
      state.items = [ ...state.items, action.payload ]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload);

      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.log(
          `Can't remove product (id: ${action.payload.id}) as it's not in the basket`
        )
      }

      state.items = newBasket;
    },
  },
});

//export the functions that can manipulate the container
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
//aka get your basket data
export const selectItems = (state) => state.basket.items;

//start at zero, iterate through basket items and add item.price to the current total 
//this remembers the end result value from previous iterations 
//aka adding a total is easy with an array of items
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer;

