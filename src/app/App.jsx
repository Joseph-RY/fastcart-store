import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Loading from "../shared/ui/custom/loading";
import { About, Cart, Checkout, Contact, Home, Info, Layout, Login, Products, Profile, SignUp, Wishlist } from "./providers/lazy/lazy";
import { store } from "./providers/store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Layout />
              </Suspense>
            }
          >
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="info/:id" element={<Info />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Products />} />
            <Route path="profile" element={<Profile />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
