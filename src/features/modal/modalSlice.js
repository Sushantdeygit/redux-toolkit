import { createSlice } from "@reduxjs/toolkit";
const initialState={
    show:false
}
const modalSlice =createSlice({
    name:"modal",
    initialState,
    reducers:{
        open:(state)=>{
            state.show=true;
        },
        close:(state)=>{
            state.show=false;
        }
    }
})
export const {open,close}=modalSlice.actions;
export default modalSlice.reducer