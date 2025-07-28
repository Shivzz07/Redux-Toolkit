import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice";
// react redux is a wiring and providing link between react and redux
//start with making the store ~ also called as single source of truth
//store is a global state that holds the data of the application
//next notes on todoSlice

export const store = configureStore({
  reducer: {
    todos: todoReducer,  // ✅ Now `state.todos` will work
  },
})
