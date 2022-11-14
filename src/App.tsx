import Login from "./Pages/Login";
import ToDo from "./Pages/ToDo";
import { useDispatch, useSelector } from "react-redux";
import { toDosSelector } from "./features/selectors";
import { setIsLoggedIn } from "./features/todoList/toDoListSlice";
import { useEffect } from "react";
import { AuthButton } from "./Components/ToDoList.styles";

const toDosMap = new Map();

toDosMap.set("ToDoList", [
  { id: 1, task: "Workout" },
  { id: 2, task: "Clean" },
  { id: 3, task: "Cook" },
]);

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(toDosSelector);

  return (
    <div
      style={{
        width: "70vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isLoggedIn ? (
        <AuthButton
          style={{
            alignItems: "center",
            width: "90px",
            marginLeft: "70%",
            marginTop: "20px",
          }}
          onClick={() => dispatch(setIsLoggedIn(false))}
        >
          Sign Out
        </AuthButton>
      ) : null}

      {isLoggedIn ? <ToDo /> : <Login />}
    </div>
  );
}

export default App;
