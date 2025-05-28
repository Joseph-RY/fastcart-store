import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const apiUrl = import.meta.env.VITE_API_URL;

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
    const token = localStorage.getItem("access_token");
    let id = jwtDecode(token);
    try {
        let { data } = await axios.get(
            `${apiUrl}/UserProfile/get-user-profile-by-id?id=${id.sid}`,
            {
                headers: { "Authorization": `Bearer ${token}` },
            }
        );
        return data.data;
    } catch (error) {
        console.error(error);
    }
});



export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default profileSlice.reducer
