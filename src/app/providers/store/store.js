import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "@/entities/category/categorySlice"
import brandReducer from "@/entities/brand/brandSlice"
import productReducer from "@/entities/product/productSlice"
import cartReducer from "@/entities/cart/cartSlice"
import profileReducer from "@/entities/profile/profileSlice"
import authReducer from "@/entities/auth/authSlice"

export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        brands: brandReducer,
        cart: cartReducer,
        profile: profileReducer,
        auth: authReducer
    }
})