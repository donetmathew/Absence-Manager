import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface typeFilterState{
    value:string
}
const initialState:typeFilterState={
    value: ''
}

export const typeFilterSlice= createSlice({
    name:"filter",
    initialState,
    reducers:{
        typeFilter:(state,action:PayloadAction<string>)=>{
            state.value=(action.payload)
        }
    }
})

export const {typeFilter}=typeFilterSlice.actions;
export default typeFilterSlice.reducer;