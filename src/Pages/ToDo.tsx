import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredToDoList } from "../features/todoList/toDoListSlice";
import Header from "../Components/Header/Header";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import { Container, ToDoListContainer } from "../Components/ToDoList.styles";
import { toDosSelector } from "../features/selectors";

const ToDo = () => {
  const { toDoList, search } = useSelector(toDosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toDoList) {
      dispatch(setFilteredToDoList(toDoList));
    }
  }, [dispatch, toDoList]);

  useEffect(() => {
    const filteredList = toDoList.filter((todo) =>
      todo.task.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(setFilteredToDoList(filteredList));
  }, [dispatch, search, toDoList]);

  return (
    <Container>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "80px",
          marginTop: "100px",
        }}
      >
        My To-Do List
      </h1>
      <ToDoListContainer>
        <Header />
        {toDoList.length ? (
          <Content />
        ) : (
          <p style={{ display: "flex", justifyContent: "center" }}>
            Nothing to do, your list is empty
          </p>
        )}
        <Footer />
      </ToDoListContainer>
    </Container>
  );
};

export default ToDo;
