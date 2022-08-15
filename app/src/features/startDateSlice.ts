import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface startDateState{
    value:string
}
const initialState:startDateState={
    value: ''
}

export const startDateSlice= createSlice({
    name:"startDate",
    initialState,
    reducers:{
        startDate:(state,action:PayloadAction<string>)=>{
            state.value=(action.payload)
        }
    }
})

export const {startDate}=startDateSlice.actions;
export default startDateSlice.reducer;