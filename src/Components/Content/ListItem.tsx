import {
  ToDoListItem,
  AddNewToDoForm,
  EditToDoFormInput,
  AddButton,
  ListItemContentWrapper,
  ListItemIconWrapper,
} from "../ToDoList.styles";
import { BsTrashFill, BsPencilFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  setTaskEdit,
  deleteToDo,
  setIsEditing,
  updateToDo,
} from "../../features/todoList/toDoListSlice";
import { FormEvent } from "react";
import { toDosSelector } from "../../features/selectors";

interface ListItemProps {
  id: string;
  task: string;
}

const ListItem = ({ id, task }: ListItemProps) => {
  const { isEditing, taskEdit } = useSelector(toDosSelector);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteToDo(id));
  };

  const handleUpdateTask = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    dispatch(updateToDo(id));
    dispatch(setTaskEdit(""));
    dispatch(setIsEditing(null));
  };

  const handleEditButtonClick = (id: string, task: string) => {
    dispatch(setIsEditing(id));
    dispatch(setTaskEdit(task));
  };

  return (
    <ToDoListItem>
      {isEditing === id ? (
        <AddNewToDoForm
          onSubmit={(e) => handleUpdateTask(e, id)}
          // onBlur={() => setIsEditing(null)}
        >
          <EditToDoFormInput
            type="text"
            onChange={(e) => dispatch(setTaskEdit(e.target.value))}
            value={taskEdit}
            autoFocus
            // onBlur={() => setIsEditing(null)}
            minLength={1}
            maxLength={25}
          />

          <AddButton>Save</AddButton>
        </AddNewToDoForm>
      ) : (
        <ListItemContentWrapper>
          <label>{task}</label>
          <ListItemIconWrapper>
            <BsPencilFill
              role="button"
              color="black"
              cursor="pointer"
              onClick={() => handleEditButtonClick(id, task)}
            />
            <BsTrashFill
              role="button"
              color="black"
              cursor="pointer"
              onClick={() => handleDelete(id)}
            />
          </ListItemIconWrapper>
        </ListItemContentWrapper>
      )}
    </ToDoListItem>
  );
};

export default ListItem;
