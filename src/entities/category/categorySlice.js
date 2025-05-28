import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL;

export const getCategory = createAsyncThunk("getCategory/data", async () => {
    const response = await axios.get(`${apiUrl}/Category/get-categories`)
    return response.data.data
})

export const categorySlice = createSlice({
    name: "categories",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCategory.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})

export default categorySlice.reducer