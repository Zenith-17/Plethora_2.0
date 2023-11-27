import { createSlice } from "@reduxjs/toolkit";
import {OFFSET_LIVE_CHAT} from "../helper/constant";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            // splice() function is an array method used to modify the contents of an array by adding or removing elements at a specific index
            //means starting from the offset_live_chat index remove 1 element ie remove last element as we have to add the new element
            state.messages.splice(OFFSET_LIVE_CHAT,1);
            //adding the new element suing payload as one element from the array was removed
            state.messages.push(action.payload);
        },
    }
})

//exporting actions
export const{addMessage}=chatSlice.actions;
//exporting reducers of corresponding actions
export default chatSlice.reducer;
