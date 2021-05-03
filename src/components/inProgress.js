import React, { useState } from "react";
import { Grid, NativeSelect, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import EditDialog from "./edit";
import "./style/task-box.css";

function InProgress(props) {
  const { list, addNextStage, remove, onUpdateName, onMoveOver } = props;

  const [updateShow, SetUpdateShow] = useState(false);
  const [selectTask, setSelectTask] = useState(null);

  const handleSelect = (e, task) => {
    if (addNextStage) addNextStage(task, "progress", e.target.value);
  };

  const removeFromProgress = (item) => {
    if (remove) remove(item, "progress");
  };

  const onEditClick = (task) => {
    setSelectTask(task);
    SetUpdateShow(true);
  };

  const handleEdit = (task) => {
    if (!task.content) return;
    if (onUpdateName) onUpdateName(task, "progress");
    SetUpdateShow(false);
  };

  const onDragStart = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("stage", "progress");
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
      id="progress-box"
      className="task-box"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, "progress")}
    >
      <img alt="task" src={require("../img/doing.png")} />
      <h1>IN PROGRESS</h1>
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
                  defaultValue="progress"
                >
                  <option value="todo">PLANNING</option>
                  <option value="progress">PENDING</option>
                  <option value="complete">COMPLETE</option>
                </NativeSelect>
              </Grid>
              <Grid item xs>
                <IconButton onClick={() => removeFromProgress(task)}>
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

export default InProgress;
