//configureStore give us the store of our react application
import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../store/reducers/appToggle";
import searchSlice from "./reducers/searchSlice";
import videoinfo from "./reducers/videoInfo";
import filterSlice from "./reducers/filterSlice";
import chatSlice from "../utils/chatSlice";
//creating store
export const store = configureStore({
  //this is the reducer of the entire store and it consists of reducers of multiple slices in the store 
  reducer: {
    toggle_app: toggleReducer,
    search: searchSlice,
    details: videoinfo,
    filterText:filterSlice,
    chat:chatSlice,
  },
});
