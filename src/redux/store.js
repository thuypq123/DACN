import { configureStore } from "@reduxjs/toolkit";
import  productsSlice  from "../components/product/productsSlice";
import  detailSlice  from "../components/DetailPage/detailSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        detail: detailSlice
    }
});

export default store;