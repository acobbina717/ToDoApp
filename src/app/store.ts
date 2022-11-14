import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "../features/todoList/toDoListSlice";

export const store = configureStore({
  reducer: {
    toDos: toDoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
