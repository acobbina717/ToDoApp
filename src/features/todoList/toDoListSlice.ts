import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let parsedStoredList: ToDoListData[] = [];
let isLoggedInState: boolean = false;
try {
  const storedList = localStorage.getItem("ToDoList");
  if (storedList) {
    parsedStoredList = JSON.parse(storedList || "");
  }

  isLoggedInState = localStorage.getItem("isLoggedIn") ? true : false;
} catch (error: any) {
  throw new Error(error);
}

type ToDoListData = {
  id: string;
  task: string;
};

export interface ToDoListSlice {
  toDoList: ToDoListData[];
  filteredToDoList: ToDoListData[];
  newTask: string;
  search: string;
  isEditing: string | null;
  taskEdit: string;
  isLoggedIn: boolean;
  email: string;
  validEmail: boolean;
  password: string;
  validPassword: boolean;
  isLoading: boolean;
  errMes: string;
}

const initialState: ToDoListSlice = {
  toDoList: parsedStoredList,
  filteredToDoList: [],
  newTask: "",
  search: "",
  isEditing: null,
  taskEdit: "",
  isLoggedIn: isLoggedInState,
  email: "",
  validEmail: false,
  password: "",
  validPassword: false,
  isLoading: false,
  errMes: "",
};

export const toDoListSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    setFilteredToDoList(state, { payload }: PayloadAction<ToDoListData[]>) {
      state.filteredToDoList = payload;
    },
    setNewTask(state, { payload }: PayloadAction<string>) {
      state.newTask = payload;
    },
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setTaskEdit(state, { payload }: PayloadAction<string>) {
      state.taskEdit = payload;
    },
    setIsEditing(state, { payload }: PayloadAction<string | null>) {
      state.isEditing = payload;
    },
    setIsLoggedIn(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
      const stringPayload = String(payload);
      if (state.isLoggedIn) {
        localStorage.setItem("isLoggedIn", stringPayload);
      } else {
        localStorage.removeItem("isLoggedIn");
      }
    },
    setEmail(state, { payload }: PayloadAction<string>) {
      state.email = payload;
    },
    setValidEmail(state, { payload }: PayloadAction<boolean>) {
      state.validEmail = payload;
    },
    setPassword(state, { payload }: PayloadAction<string>) {
      state.password = payload;
    },
    setValidPassword(state, { payload }: PayloadAction<boolean>) {
      state.validPassword = payload;
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setErrMes(state, { payload }: PayloadAction<string>) {
      state.errMes = payload;
    },
    addToDo(state, { payload }: PayloadAction<string>) {
      if (!payload || /^\s*$/.test(payload)) return;
      const id = uuidv4();
      const newToDoToAdd = { id, task: payload };
      const newToDoList = [...state.toDoList, newToDoToAdd];
      state.toDoList = newToDoList;
      localStorage.setItem("ToDoList", JSON.stringify(newToDoList));
    },
    deleteToDo(state, { payload }: PayloadAction<string>) {
      const listItems = state.toDoList.filter((item) => item.id !== payload);
      state.toDoList = listItems;
      localStorage.setItem("ToDoList", JSON.stringify(listItems));
    },
    updateToDo(state, { payload }: PayloadAction<string>) {
      if (!state.taskEdit || /^\s*$/.test(state.taskEdit)) return;
      const updatedTask = state.toDoList.map((i) =>
        i.id === payload ? { id: payload, task: state.taskEdit } : i
      );
      state.toDoList = updatedTask;
      localStorage.setItem("ToDoList", JSON.stringify(updatedTask));
    },
  },
});

export const {
  addToDo,
  setFilteredToDoList,
  setNewTask,
  setSearch,
  setTaskEdit,
  setIsEditing,
  deleteToDo,
  updateToDo,
  setIsLoggedIn,
  setEmail,
  setValidEmail,
  setPassword,
  setValidPassword,
  setIsLoading,
  setErrMes,
} = toDoListSlice.actions;

export default toDoListSlice.reducer;
