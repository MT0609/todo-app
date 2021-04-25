import React from "react";
import { Grid, NativeSelect, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import "./style/task-box.css";

function CompletedTasks(props) {
  const { list, remove, backStage } = props;

  const handleSelect = (e, task) => {
    if (backStage) backStage(task, "completed", e.target.value);
  };

  const removeFromComplete = (task) => {
    if (remove) remove(task, "complete");
  };

  return (
    <div id="complete-box" className="task-box">
      <img alt="task" src={require("../img/complete.png")} />
      <h1>COMPLETED</h1>
      <div className="task-list">
        {list.map((task) => (
          <div className="task" key={task.id}>
            <Grid container alignItems="center" justify="space-between">
              <Grid item xs={12} sm={7} style={{ textAlign: "left" }}>
                <p variant="h5" className="task-content">
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
                  defaultValue="completed"
                >
                  <option value="completed">COMPLETED</option>
                  <option value="todo">PLANNING</option>
                  <option value="progress">IN PROGRESS</option>
                </NativeSelect>
              </Grid>
              <Grid item xs>
                <IconButton onClick={() => removeFromComplete(task)}>
                  <Delete fontSize="large" style={{ color: "black" }} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedTasks;
