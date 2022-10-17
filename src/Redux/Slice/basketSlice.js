import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketsSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: function (state, action) {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: function (state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];
      console.log(newBasket);

      if (index >= 0) {
        //Items exists in the basket... remove id

        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove th item with (id: ${action.payload.id}) as its not in the basket`
        );
      }
      state.items = newBasket;

      // const filteredItem = state.items.filter(
      //   (item) => item.id !== action.payload.id
      // );
      // let newBasket = [...state.items];
      // newBasket = filteredItem;
      // state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketsSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotalPrice =(state) => state.basket.items.reduce((total,item)=>total + item.price,0)

export default basketsSlice.reducer;
