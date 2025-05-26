import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

export const getCart = createAsyncThunk("cart/getCart", async () => {
    const token = localStorage.getItem("access_token");
    const { data } = await axios.get("https://store-api.softclub.tj/Cart/get-products-from-cart", {
        headers: { "Authorization": `Bearer ${token}` },
    });
    return data.data[0];
});

export const addProductToCart = createAsyncThunk("cart/addProductToCart", async (id, { dispatch }) => {
    const token = localStorage.getItem("access_token");
    try {
        const { data } = await axios.post(
            `https://store-api.softclub.tj/Cart/add-product-to-cart?id=${id}`,
            {},
            {
                headers: { "Authorization": `Bearer ${token}` },
            }
        );
        dispatch(getCart())
        toast.success("Product added to cart");
        return data.data[0].productsInCart;
    } catch (error) {
        toast.error("Product already in cart");
    }
});

export const deleteProduct = createAsyncThunk("cart/deleteProduct", async (id, { dispatch }) => {
    const token = localStorage.getItem("access_token");
    const { data } = await axios.delete(`https://store-api.softclub.tj/Cart/delete-product-from-cart?id=${id}`,
        {
            headers: { "Authorization": `Bearer ${token}` }
        }
    )
    dispatch(getCart())
    return data.data[0].productsInCart

})

export const deleteAll = createAsyncThunk("cart/deleteAll", async (_, { dispatch }) => {
    const token = localStorage.getItem("access_token");
    const { data } = await axios.delete(`https://store-api.softclub.tj/Cart/clear-cart`,
        {
            headers: { "Authorization": `Bearer ${token}` }
        }
    )
    dispatch(getCart())
    return data.data[0].productsInCart
})

export const incrementCount = createAsyncThunk("cart/incrementCount", async (id, { dispatch }) => {
    const token = localStorage.getItem("access_token");
    const { data } = await axios.put(`https://store-api.softclub.tj/Cart/increase-product-in-cart?id=${id}`,
        {},
        {
            headers: { "Authorization": `Bearer ${token}` }
        }
    )
    dispatch(getCart())
    toast.success("Product quantity increased");
    return data.data[0].productsInCart

})

export const decrementCount = createAsyncThunk("cart/decrementCount", async (id, { dispatch }) => {
    const token = localStorage.getItem("access_token");
    const { data } = await axios.put(`https://store-api.softclub.tj/Cart/reduce-product-in-cart?id=${id}`,
        {},
        {
            headers: { "Authorization": `Bearer ${token}` }
        }
    )
    dispatch(getCart())
    toast.success("Product quantity decreased");
    return data.data[0].productsInCart

})



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalCount: 0,
        totalPrice: 0,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.fulfilled, (state, action) => {
                state.products = action.payload.productsInCart
                state.totalCount = action.payload.totalProducts
                state.totalPrice = action.payload.totalPrice
            })
            .addCase(addProductToCart.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = action.payload
            })
    }
})

export default cartSlice.reducer
