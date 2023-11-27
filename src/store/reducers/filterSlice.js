import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const filerSlice = createSlice({
  name: "filterText",
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      state.text = action.payload;
    },
  },
});

//exporting actions
export const { searchFilter } = filerSlice.actions;

//exporting reducers
export default filerSlice.reducer;
