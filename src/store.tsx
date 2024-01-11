import { configureStore } from "@reduxjs/toolkit";
// import AccountReducer from "./Components/Features/AccountSlice";
// import PagesReducer from "./Components/Features/PagesSlice";

export const store = configureStore({
    reducer: {
      
    }
})

export type RootState = ReturnType<typeof store.getState>