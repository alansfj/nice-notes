import React, { useContext, useEffect } from "react";
import ToDoColumn from "./ToDoColumn";
import "../Sass/ToDo.scss";
import { TodosContext } from "../context/todosContext";

const ToDo = ({ setIsModalDisplayed }) => {
  const { setToDo, setInProgress, setDone } = useContext(TodosContext);

  useEffect(() => {
    setToDo(
      JSON.parse(localStorage.getItem("todo"))
        ? JSON.parse(localStorage.getItem("todo"))
        : []
    );
    setInProgress(
      JSON.parse(localStorage.getItem("inprogress"))
        ? JSON.parse(localStorage.getItem("inprogress"))
        : []
    );
    setDone(
      JSON.parse(localStorage.getItem("done"))
        ? JSON.parse(localStorage.getItem("done"))
        : []
    );
  }, []);

  return (
    <div className="todo-container">
      <ToDoColumn
        todoColumn
        title="To Do"
        setIsModalDisplayed={setIsModalDisplayed}
      />
      <ToDoColumn inProgressColumn title="In Progress" />
      <ToDoColumn doneColumn title="Done" />
    </div>
  );
};

export default ToDo;
