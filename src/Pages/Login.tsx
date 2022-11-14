import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setValidEmail,
  setValidPassword,
  setErrMes,
} from "../features/todoList/toDoListSlice";
import { toDosSelector } from "../features/selectors";
import Auth from "../Components/Auth/Auth";
import { Container } from "../Components/ToDoList.styles";

const EMAIL_REGEX = /(\W|^)[\w.+-]*@rapptrlabs\.com(\W|$)/gi;

const Login = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector(toDosSelector);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);

    if (result !== true) {
      dispatch(setValidEmail(result));
    } else {
      dispatch(setValidEmail(result));
    }
  }, [email, dispatch]);

  useEffect(() => {
    if (password.length < 4) {
      dispatch(setValidPassword(false));
    } else {
      dispatch(setValidPassword(true));
    }
  }, [password, dispatch]);

  useEffect(() => {
    dispatch(setErrMes(""));
  }, [email, password, dispatch]);

  return (
    <Container>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "80px",
          marginTop: "120px",
        }}
      >
        Rapptr Labs
      </h1>
      <Auth />
    </Container>
  );
};

export default Login;
