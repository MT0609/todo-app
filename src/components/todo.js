import React from "react";
import { Grid, NativeSelect, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import "./style/task-box.css";

function ToDo(props) {
  const { list, addNextStage, remove } = props;

  const handleSelect = (e, task) => {
    if (addNextStage) addNextStage(task, "todo", e.target.value);
  };

  const removeFromTodo = (task) => {
    if (remove) remove(task, "todo");
  };

  return (
    <div id="todo-box" className="task-box">
      <img alt="task" src={require("../img/task.png")} />
      <h1>PLAN TASKS</h1>
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
    </div>
  );
}

export default ToDo;
