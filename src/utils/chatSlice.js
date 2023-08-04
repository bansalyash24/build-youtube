import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./contants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            if(state.messages.length>25){
                state.messages.splice(0,LIVE_CHAT_COUNT)
            }
            state.messages.push(action.payload)
        }
    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer