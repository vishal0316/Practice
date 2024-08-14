import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 69,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      console.log(state);

      state.value -= 1;
    },
    incrementbyfive: (state) => {
      state.value += 5;
    },

    incrementByAmount: (state, action) => {
      console.log(action);

      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, incrementbyfive } =
  counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 3000);
};

export default counterSlice.reducer;
