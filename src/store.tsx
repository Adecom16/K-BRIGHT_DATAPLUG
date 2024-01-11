// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./components/Features/AccountSlice";
import PagesReducer from "./components/Features/PagesSlice";

export const store = configureStore({
    reducer: {
        account: AccountReducer,
        pagesFunc: PagesReducer,
    }
})

// const store = createStore(PagesReducer);


export type RootState = ReturnType<typeof store.getState>