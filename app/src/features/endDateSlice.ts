import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface endDateState{
    value:string
}
const initialState:endDateState={
    value: ''
}

export const endDateSlice= createSlice({
    name:"endDate",
    initialState,
    reducers:{
        endDate:(state,action:PayloadAction<string>)=>{
            state.value=(action.payload)
        }
    }
})

export const {endDate}=endDateSlice.actions;
export default endDateSlice.reducer;