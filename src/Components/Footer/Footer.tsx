import { useSelector } from "react-redux";
import { toDosSelector } from "../../features/selectors";
import { ToDoListFooter } from "../ToDoList.styles";

const Footer = () => {
  const { toDoList } = useSelector(toDosSelector);

  return (
    <ToDoListFooter>
      <div>
        {toDoList.length ? (
          <p>
            {toDoList.length} {toDoList.length === 1 ? "thing" : "things"} to do
          </p>
        ) : (
          <p>Add To List</p>
        )}
      </div>
    </ToDoListFooter>
  );
};

export default Footer;
