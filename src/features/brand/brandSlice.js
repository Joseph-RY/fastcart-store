import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const brandURL = "https://store-api.softclub.tj/Brand";

export const getBrand = createAsyncThunk("brands/getBrand", async () => {
    const response = await axios.get(`${brandURL}/get-brands`);
    return response.data.data;
});

export const brandSlice = createSlice({
    name: "brands",
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBrand.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export default brandSlice.reducer;
