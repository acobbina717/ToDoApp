import React, { FormEvent, useRef } from "react";
import { AiFillLock } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import {
  setEmail,
  setErrMes,
  setIsLoading,
  setIsLoggedIn,
  setPassword,
} from "../../features/todoList/toDoListSlice";
import { useSelector, useDispatch } from "react-redux";
import { toDosSelector } from "../../features/selectors";
import {
  AuthButton,
  AuthFormInput,
  ErrorMessage,
  FormInputWrapper,
  InvalidEmail,
} from "../ToDoList.styles";

const Auth = () => {
  const dispatch = useDispatch();
  const { email, validEmail, password, validPassword, isLoading, errMes } =
    useSelector(toDosSelector);

  const errRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsLoading(true));

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    try {
      const response = await fetch(
        "http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
        { method: "POST", body: data }
      );

      const result = await response.json();

      if (response.ok) {
        dispatch(setIsLoggedIn(true));
        dispatch(setPassword(""));
        dispatch(setEmail(""));
        dispatch(setIsLoading(false));
      } else if (result.code) {
        dispatch(setErrMes(result.message));
        dispatch(setIsLoading(false));
      }
    } catch (error: any) {
      if (error) {
        console.log("Error", error);
        dispatch(setErrMes(error.message));
        dispatch(setIsLoading(false));
      }
      dispatch(setIsLoading(false));
    }
  };

  return (
    <form
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="auth"
    >
      <div>
        <label htmlFor="eamil">Email</label>
        <FormInputWrapper
          style={{
            borderColor: validEmail === false && email ? "red" : "",
          }}
        >
          <MdAccountBox style={{ fontSize: "1.3rem", margin: "0px 2px" }} />
          <AuthFormInput
            id="email"
            type="email"
            autoComplete="off"
            placeholder="user@rapptrlabs.com"
            required
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            autoFocus
            maxLength={50}
          />
        </FormInputWrapper>
        <InvalidEmail
          style={
            validEmail === false && email
              ? {}
              : { position: "absolute", left: "-9999px" }
          }
        >
          Not a valid email
        </InvalidEmail>

        <label htmlFor="password">Password</label>

        <FormInputWrapper>
          <AiFillLock style={{ fontSize: "1.3rem", margin: "0px 2px" }} />
          <AuthFormInput
            id="password"
            type="password"
            placeholder="Must be at least 4 characters"
            value={password}
            required
            onChange={(e) => dispatch(setPassword(e.target.value))}
            minLength={4}
            maxLength={16}
          />
        </FormInputWrapper>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AuthButton
          disabled={!validEmail || !validPassword || isLoading ? true : false}
        >
          Sign In
        </AuthButton>
      </div>
      <ErrorMessage
        ref={errRef}
        style={errMes ? {} : { position: "absolute", left: "-9999px" }}
      >
        {errMes}
      </ErrorMessage>
    </form>
  );
};

export default Auth;
