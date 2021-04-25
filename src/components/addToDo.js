import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./style/addForm.css";

function AddToDo(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let regex = /^[0-9a-zA-Z]+/g;
    if (input.match(regex)) props.add(input);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add to-do item..."
          value={input}
          onChange={handleInputChange}
          autoFocus="true"
        />
        <Button
          color="primary"
          style={{ margin: "2rem", fontSize: "2rem", fontWeight: "bold" }}
          type="submit"
          variant="outlined"
          disableElevation
        >
          Add Task
        </Button>
      </form>
    </div>
  );
}

export default AddToDo;
