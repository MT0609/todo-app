import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import {
  add_ToDo,
  add_InProgress,
  add_Completed,
  remove_ToDo,
  remove_Progress,
  remove_Complete,
  editName_ToDo,
  editName_Progress,
  editName_Complete,
} from "../actions/index";
import AddToDo from "../components/addToDo";
import ToDo from "../components/todo";
import InProgress from "../components/inProgress";
import Completed from "../components/completed";
import "./main.css";

function MainPage() {
  const todos = useSelector((state) => state.todos);
  const inProgress = useSelector((state) => state.inProgress);
  const completed = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const addToDo = (todo) => {
    dispatch(add_ToDo({ id: uuidv1(), content: todo }));
  };

  const addNextStage = (task, currentStage, nextStage) => {
    if (currentStage === nextStage) return;
    if (nextStage === "progress") dispatch(add_InProgress(task));
    if (nextStage === "todo") dispatch(add_ToDo(task));
    if (nextStage === "complete") dispatch(add_Completed(task));
    removeFromStage(task, currentStage);
  };

  const removeFromStage = (task, stage) => {
    if (stage === "todo") dispatch(remove_ToDo(task));
    else if (stage === "progress") dispatch(remove_Progress(task));
    // stage = complete
    else dispatch(remove_Complete(task));
  };

  const handleUpdateName = (task, stage) => {
    if (stage === "todo") dispatch(editName_ToDo(task));
    else if (stage === "progress") dispatch(editName_Progress(task));
    else if (stage === "complete") dispatch(editName_Complete(task));
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
          onUpdateName={handleUpdateName}
          onMoveOver={addNextStage}
        />
        <InProgress
          list={inProgress}
          addNextStage={addNextStage}
          remove={removeFromStage}
          onUpdateName={handleUpdateName}
          onMoveOver={addNextStage}
        />
        <Completed
          list={completed}
          backStage={addNextStage}
          remove={removeFromStage}
          onUpdateName={handleUpdateName}
          onMoveOver={addNextStage}
        />
      </div>
    </div>
  );
}

export default MainPage;
