import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { name: "", cost: 0 },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeCost: (state, action) => {
      state.cost = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;
export const { changeCost, changeName } = formSlice.actions;
