import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    links: ["linods", "Tsambika", "Prasonisi", "Faliraki", "Rhodes"]
}

const navSlice = createSlice({
    name: "link",
    initialState,
    reducers: {}
})

export const selectLinks = state => state.link.links

export default navSlice.reducer