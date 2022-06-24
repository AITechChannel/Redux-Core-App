import { configureStore } from "@reduxjs/toolkit";
import imgSLice from "../components/Img/imgSlice";
import todoSlice from "../components/Todolist/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    img: imgSLice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
