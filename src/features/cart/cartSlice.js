import { createSlice } from "@reduxjs/toolkit";
import products from "../../mockData/items.json";
const initialState = {
  cartItems: {
    cart: [],
    products,
    filteredProducts: [],
    orders: [],
    quantity: 0,
    total: 0,
  },
};
const calculateTotals = (state) => {
  let quantity = 0;
  let total = 0;
  state.cartItems.cart.forEach((item) => {
    quantity += item.count;
    total += item.count * item.price;
  });
  state.cartItems.quantity = quantity;
  state.cartItems.total = total.toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCartList: (state, { payload }) => {
      state.cartItems.cart.push({ ...payload });
      calculateTotals(state);
    },
    removeItemFromCartList: (state, { payload }) => {
      state.cartItems.cart = state.cartItems.cart.filter(
        (item) => item.id !== payload
      );
      calculateTotals(state);
    },
    decreaseProductCount: (state, { payload }) => {
      const itemIndex = state.cartItems.cart.findIndex(
        (item) => item.id === payload
      );

      const item = state.cartItems.cart[itemIndex];
      item.count > 1
        ? (item.count -= 1)
        : state.cartItems.cart.splice(itemIndex, 1);
      calculateTotals(state);
    },
    increaseProductCount: (state, { payload }) => {
      const item = state.cartItems.cart.find((item) => item.id === payload);
      if (item) {
        item.count += 1;
        calculateTotals(state);
      }
    },

    clearCart: (state) => {
      state.cartItems.cart = [];
      calculateTotals(state);
    },
    filterProducts: (state, { payload }) => {
      state.cartItems.filteredProducts = products.filter((item) =>
        item[payload.categoryValue]
          .toLowerCase()
          .includes(payload.inputValue.toLowerCase())
      );
    },
    clearFilterProducts: (state) => {
      state.cartItems.filteredProducts = [];
    },
    addItemToOrderList: (state, { payload }) => {
      state.cartItems.orders.push(payload);
    },
    // removeItemFromOrderList: (state, { payload }) => {
    //   state.cartItems.orders = state.cartItems.orders.filter(
    //     (order) => order.orderId !== payload.id
    //   );
    // },
  },
});

export const {
  addItemToCartList,
  removeItemFromCartList,
  clearCart,
  addItemToOrderList,
  removeItemFromOrderList,
  decreaseProductCount,
  increaseProductCount,
  filterProducts,
  clearFilterProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
