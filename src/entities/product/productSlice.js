import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "sonner";


export const getProduct = createAsyncThunk("getProduct/data", async (e = {}) => {
    const query = new URLSearchParams();

    if (e.MinPrice != undefined) query.append("MinPrice", e.MinPrice);
    if (e.MaxPrice != undefined) query.append("MaxPrice", e.MaxPrice);
    if (e.BrandId != undefined) query.append("BrandId", e.BrandId);
    if (e.CategoryId != undefined) query.append("CategoryId", e.CategoryId);
    if (e.ProductName) query.append("ProductName", e.ProductName);

    const response = await axios.get(
        `https://store-api.softclub.tj/Product/get-products?${query.toString()}`
    );
    return response.data.data.products;
}
);

export const getProductById = createAsyncThunk("getProductById/data", async (id) => {
    try {
        const response = await axios.get(`https://store-api.softclub.tj/Product/get-product-by-id?id=${id}`)
        return response.data.data
    } catch (error) {
        console.log(error);

    }
})
export const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        product: [],
        wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    },
    reducers: {
        incrementQuantity: (state) => {
            state.product.quantity += 1;
        },
        decrementQuantity: (state) => {
            if (state.product.quantity > 1) {
                state.product.quantity -= 1;
            }
        },

        addToWishlist: (state, action) => {
            const productId = action.payload;
            const index = state.wishlist.indexOf(productId);

            if (index >= 0) {
                state.wishlist.splice(index, 1);
                toast.success("Removed from wishlist");
            } else {
                state.wishlist.push(productId);
                toast.success("Added to wishlist");
            }

            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
        resetWishlist: (state) => {
            state.wishlist = [];
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.product = action.payload;
        });
    },
});

export const { incrementQuantity, decrementQuantity, addToWishlist, resetWishlist } = productSlice.actions;
export default productSlice.reducer;
