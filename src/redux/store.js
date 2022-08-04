import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

export default store = configureStore({ reducer: { todos: todosReducer } });
