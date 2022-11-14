import { FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toDosSelector } from "../../features/selectors";
import {
  setNewTask,
  setSearch,
  addToDo,
} from "../../features/todoList/toDoListSlice";
import {
  AddNewToDoForm,
  AddToDoFormInput,
  AddButton,
  SearchBox,
  SearchInput,
} from "../ToDoList.styles";

const Header = () => {
  const { newTask, search } = useSelector(toDosSelector);
  const dispatch = useDispatch();

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTask || /^\s*$/.test(newTask)) return;
    dispatch(addToDo(newTask));
    dispatch(setNewTask(""));
  };

  return (
    <div>
      <AddNewToDoForm onSubmit={handleAddTask}>
        <AddToDoFormInput
          autoFocus
          type="text"
          name="add-task"
          placeholder="Add New Task"
          autoComplete="off"
          minLength={1}
          maxLength={25}
          onChange={(e) => dispatch(setNewTask(e.target.value))}
          value={newTask}
        />
        <AddButton>+</AddButton>
      </AddNewToDoForm>

      <SearchBox>
        <SearchInput
          type="text"
          name="search-input"
          placeholder="Search"
          minLength={1}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          value={search}
        />
      </SearchBox>
    </div>
  );
};

export default Header;
