import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //aka keep/spread current items inside the basket and add
      //whatever is the payload to the basket
      state.items = [ ...state.items, action.payload ]
    },
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
//aka get your basket data
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;