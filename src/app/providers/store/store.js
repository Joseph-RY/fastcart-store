import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "@/features/category/categorySlice"
import brandReducer from "@/features/brand/brandSlice"
import productReducer from "@/features/product/productSlice"
import cartReducer from "@/features/cart/cartSlice"
import profileReducer from "@/features/profile/profileSlice"

export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        brands: brandReducer,
        cart: cartReducer,
        profile: profileReducer
    }
})