import { configureStore } from "@reduxjs/toolkit";
import  productsSlice  from "../components/product/productsSlice";
import  detailSlice  from "../components/DetailPage/detailSlice";
import loginSlice from "../components/loginPage/loginSlice";
import ShoppingSlice from "../components/shoppingPage/shoppingSlice";
import CheckOutSlice from "../components/checkoutPage/checkOutSlice";
import verifyEmailSlice from "../components/verifyPage/verifyEmailSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        detail: detailSlice,
        login: loginSlice,
        shopping: ShoppingSlice,
        checkout: CheckOutSlice,
        verifyEmail: verifyEmailSlice,
    }
});

export default store;