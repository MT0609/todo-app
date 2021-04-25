import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add_ToDo,
  add_InProgress,
  add_Completed,
  remove_ToDo,
  remove_Progress,
  remove_Complete,
} from "../actions/index";
import AddToDo from "../components/addToDo";
import ToDo from "../components/todo";
import InProgress from "../components/inProgress";
import Completed from "../components/completed";
import "./main.css";

function MainPage() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count")) || 0
  ); // make as task id

  const todos = useSelector((state) => state.todos);
  const inProgress = useSelector((state) => state.inProgress);
  const completed = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const addToDo = (todo) => {
    dispatch(add_ToDo({ id: count, content: todo }));
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  };

  const addNextStage = (task, currentStage, nextStage) => {
    // if (currentStage === "todo") {
    //   if (nextStage === "progress") {
    //     dispatch(add_InProgress(task));
    //   } else if (nextStage === "complete") {
    //     dispatch(add_Completed(task));
    //   }
    // } else if (currentStage === "progress") {
    //   if (nextStage === "complete") dispatch(add_Completed(task));
    //   else if (nextStage === "todo") dispatch(add_ToDo(task));
    // } else {
    //   // current = "complete"
    //   if (nextStage === "progress") dispatch(add_InProgress(task));
    //   else if (nextStage === "todo") dispatch(add_ToDo(task));
    // }
    if (nextStage === "progress") dispatch(add_InProgress(task));
    if (nextStage === "todo") dispatch(add_ToDo(task));
    if (nextStage === "complete") dispatch(add_Completed(task));

    if (currentStage !== nextStage) removeFromStage(task, currentStage);
  };

  const removeFromStage = (task, stage) => {
    if (stage === "todo") dispatch(remove_ToDo(task));
    else if (stage === "progress") dispatch(remove_Progress(task));
    // stage = complete
    else dispatch(remove_Complete(task));
  };

  return (
    <div id="main">
      <div>
        <AddToDo add={addToDo} />
      </div>

      <div id="task-boxes">
        <ToDo
          list={todos}
          addNextStage={addNextStage}
          remove={removeFromStage}
        />
        <InProgress
          list={inProgress}
          addNextStage={addNextStage}
          remove={removeFromStage}
        />
        <Completed
          list={completed}
          backStage={addNextStage}
          remove={removeFromStage}
        />
      </div>
    </div>
  );
}

export default MainPage;
