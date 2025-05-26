import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "@/entities/category/categorySlice"
import brandReducer from "@/entities/brand/brandSlice"
import productReducer from "@/entities/product/productSlice"
import cartReducer from "@/entities/cart/cartSlice"
import profileReducer from "@/entities/profile/profileSlice"

export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        brands: brandReducer,
        cart: cartReducer,
        profile: profileReducer
    }
})