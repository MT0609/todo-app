import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import "./style/addForm.css";

function AddToDo({ add }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    let regex = /^[0-9a-zA-Z]+/g;
    if (input.match(regex) && add) add(input);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={8} md={10}>
          <input
            type="text"
            placeholder="add to-do item..."
            value={input}
            onChange={handleInputChange}
            autoFocus="true"
          />
        </Grid>
        <Grid item>
          <Button
            color="primary"
            style={{
              padding: "1rem 0",
              height: "70%",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
            type="submit"
            variant="outlined"
            disableElevation
          >
            <Add fontSize="large" />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddToDo;
