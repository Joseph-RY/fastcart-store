import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const categoryURL = "https://store-api.softclub.tj/Category"

export const getCategory = createAsyncThunk("getCategory/data", async () => {
    const response = await axios.get(`${categoryURL}/get-categories`)
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