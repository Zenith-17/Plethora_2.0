import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

 const appToggle = createSlice({
  name: "toggle_app",
  initialState,
  //writing reducer functions corresponding to each action
  //when we click on a component(like button) then it dispatches an action which will call these reducer functions
  //reducer functions modify the state based on corresponding actions and that is why we export actions and reducer functions   
  //payload consists of data passed 
  reducers: {
    //means when toggle is called call the corresponding function defined to toggle and that is why we export actions as well as reducers both 
    toggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closetoggle: (state) => {
      state.isMenuOpen = false;
    },
  },
});

//we export two things ie actions and reducers

//exporting actions
export const { toggle, closetoggle } = appToggle.actions;

//exporting reducers
export default appToggle.reducer;
