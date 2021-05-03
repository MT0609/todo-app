import React, { useState } from "react";
import { Grid, NativeSelect, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import EditDialog from "./edit";
import "./style/task-box.css";

function ToDo(props) {
  const { list, addNextStage, remove, onUpdateName, onMoveOver } = props;

  const [updateShow, SetUpdateShow] = useState(false);
  const [selectTask, setSelectTask] = useState(null);

  const handleSelect = (e, task) => {
    if (addNextStage) addNextStage(task, "todo", e.target.value);
  };

  const removeFromTodo = (task) => {
    if (remove) remove(task, "todo");
  };

  const onEditClick = (task) => {
    setSelectTask(task);
    SetUpdateShow(true);
  };

  const handleEdit = (task) => {
    if (!task.content) return;
    if (onUpdateName) onUpdateName(task, "todo");
    SetUpdateShow(false);
  };

  const onDragStart = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("stage", "todo");
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, stage) => {
    if (onMoveOver)
      onMoveOver(
        JSON.parse(e.dataTransfer.getData("task")),
        e.dataTransfer.getData("stage"),
        stage
      );
  };

  return (
    <div
      id="todo-box"
      className="task-box"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, "todo")}
    >
      <img alt="task" src={require("../img/task.png")} />
      <h1>PLAN TASKS</h1>
      <div className="task-list">
        {list.map((task) => (
          <div
            className="task"
            key={task.id}
            draggable
            onDragStart={(e) => onDragStart(e, task)}
          >
            <Grid container alignItems="center" justify="space-between">
              <Grid item xs={12} sm={7} style={{ textAlign: "left" }}>
                <p variant="h5" className="task-content">
                  <IconButton onClick={() => onEditClick(task)}>
                    <Edit fontSize="large" />
                  </IconButton>

                  {task.content}
                </p>
              </Grid>
              <Grid item xs={8} md={3}>
                <NativeSelect
                  fullWidth
                  onChange={(e) => handleSelect(e, task)}
                  inputProps={{
                    style: { padding: "0.5rem", fontSize: "1.3rem" },
                  }}
                  defaultValue="todo"
                >
                  <option value="todo">PLANNING</option>
                  <option value="progress">PROGRESS</option>
                  <option value="complete">COMPLETE</option>
                </NativeSelect>
              </Grid>
              <Grid item xs>
                <IconButton onClick={() => removeFromTodo(task)}>
                  <Delete fontSize="large" style={{ color: "black" }} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
      <EditDialog
        data={selectTask}
        show={updateShow}
        onclose={() => SetUpdateShow(false)}
        onupdate={handleEdit}
      />
    </div>
  );
}

export default ToDo;
