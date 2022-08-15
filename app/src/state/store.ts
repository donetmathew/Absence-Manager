import { configureStore } from "@reduxjs/toolkit";
import startDateSliceReducer from "../features/startDateSlice";
import endDateSliceReducer from "../features/endDateSlice";
import typeFilterSliceReducer from '../features/typeFilterSlice'

export const store = configureStore({
    reducer:{
       filter:typeFilterSliceReducer,
       startDate:startDateSliceReducer,
       endDate:endDateSliceReducer
    }
})

  export type RootState= ReturnType<typeof store.getState>
  export type AppDispatch= typeof store.dispatch;