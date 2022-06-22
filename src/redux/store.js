import { configureStore } from "@reduxjs/toolkit";
import imgSLice from "../components/Img/imgSlice";
import todoSlice from "../components/Todolist/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    img: imgSLice.reducer,
  },
});

export default store;
