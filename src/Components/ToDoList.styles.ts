import styled from "styled-components";

export const ToDoListItem = styled.li`
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin: 0.25rem 0;
  background-color: #eee;
`;

export const ListItemContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin: 0.55rem 0;
`;

export const ListItemIconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  padding-right: 0.5rem;
`;

export const AddNewToDoForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0 0;
  padding: 0 0.5rem 0.25rem;
  border-bottom: 1px solid #eee;
`;

export const AddToDoFormInput = styled.input`
  flex-grow: 1;
  max-width: calc(100% - 50px);
  min-height: 48px;
  border-radius: 0.25rem;
  outline: none;
  font-size: 1rem;
  padding: 0.25rem;
`;
export const EditToDoFormInput = styled.input`
  flex-grow: 0.5;
  max-width: calc(100% - 50px);
  min-height: 40px;
  border-radius: 0.25rem;
  outline: none;
  font-size: 1rem;
  padding: 0.25rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;

export const AddButton = styled.button`
  min-width: 48px;
  font-size: 1rem;
  border-radius: 0.25rem;
  background-color: aliceblue;
  cursor: pointer;
  :hover {
    color: white;
    background-color: limegreen;
    outline: none;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0 0;
  padding: 0 0.5rem 0.25rem;
  border-bottom: 1px solid #eee;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  min-height: 48px;
  padding: 0.25rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  outline: none;
`;

export const ToDoListContainer = styled.div`
  border: 2px black solid;
  display: flex;
  flex-flow: column wrap;
  background-color: lightgray;
  min-width: 350px;
`;

export const ToDoList = styled.ul`
  list-style-type: none;
  display: block;
  text-align: center;
  height: 300px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: teal;
`;

export const ToDoListFooter = styled.footer`
  display: grid;
  padding: 0.25em;
  place-content: center;
  width: 100%;
`;

export const Container = styled.div`
  display: block;
  justify-content: center;
  min-width: 300px;
`;

export const FormInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  margin-bottom: 20px;
  border: black solid;
  border-radius: 4px;
`;

export const AuthFormInput = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  outline: none;
`;

export const ErrorMessage = styled.p`
  color: firebrick;
  font-weight: bold;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const OffScreen = styled.p`
  position: absolute;
  left: -9999px;
`;

export const InvalidEmail = styled.p`
  font-size: 0.75rem;
  border-radius: 0.5rem;
  color: red;
  padding: 0.25rem;
  position: relative;
  top: -17px;
`;

export const AuthButton = styled.button`
  width: 290px;
  height: 25px;
  border-radius: 5px;
`;
