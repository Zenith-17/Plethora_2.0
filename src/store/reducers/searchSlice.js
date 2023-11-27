import { createSlice } from "@reduxjs/toolkit";
//this is used for caching the searched videos 
const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

//exporting actions
export const { cacheResults } = searchSlice.actions;
//exporting reducers
export default searchSlice.reducer;
