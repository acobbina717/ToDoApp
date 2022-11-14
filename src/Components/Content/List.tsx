import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { ToDoList } from "../ToDoList.styles";
import { toDosSelector } from "../../features/selectors";

const List = () => {
  const { filteredToDoList } = useSelector(toDosSelector);
  return (
    <div>
      <ToDoList>
        {filteredToDoList.map((item) => {
          const { id, task } = item;
          return <ListItem key={id} id={id} task={task} />;
        })}
      </ToDoList>
    </div>
  );
};

export default List;
