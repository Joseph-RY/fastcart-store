import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const apiUrl = import.meta.env.VITE_API_URL;

export const loginUser = createAsyncThunk("auth/loginUser", async ({ userName, password }) => {
    const { data } = await axios.post(`${apiUrl}/Account/login`, {
        userName,
        password,
    });
    localStorage.setItem("access_token", data.data);
    return data.data;
});

export const registerUser = createAsyncThunk("auth/registerUser", async (userData) => {
    try {
        const { data } = await axios.post(`${apiUrl}/Account/register`, userData);
        toast.success(data.data);
        return data;
    } catch (error) {
        toast.error("Registration failed");
        throw error;
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("access_token") || null,
    },
    reducers: {
        logout(state) {
            state.token = null;
            localStorage.removeItem("access_token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload;
            })
            .addCase(registerUser.fulfilled, () => { });
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
