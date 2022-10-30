import { configureStore } from "@reduxjs/toolkit";
import  productsSlice  from "../components/product/productsSlice";
import  detailSlice  from "../components/DetailPage/detailSlice";
import loginSlice from "../loginPage/loginSlice";
import ShoppingSlice from "../components/shoppingPage/shoppingSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        detail: detailSlice,
        login: loginSlice,
        shopping: ShoppingSlice,
    }
});

export default store;