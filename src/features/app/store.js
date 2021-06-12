import {configureStore} from "@reduxjs/toolkit"
import linkReducer from '../navLinks/navSlice'


export const store = configureStore({
    reducer: {
        link: linkReducer,
    },
});