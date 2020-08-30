import React, {useState, useEffect} from 'react';
import './style/task-box.css'

function ToDo(props) {
  const {list, addNextStage, remove} = props;

  const addToNextStage = (item, currentStage, nextStage) => {
    if (addNextStage) 
      addNextStage(item, currentStage, nextStage);
  }   

  const removeFromTodo = (item) => {
    if (remove)
      remove(item, "todo");
  }

  return (
    <div id="todo-box">
      <img alt="task" src={require('../img/task.png')} />
      <h1>PLAN TASKS</h1>
      <div className="task-list">
        {
          list.map(item => (
            <div className="task">
              <div className="task-content">
                <div>{item.content}</div>
              </div>
              <div className="task-button">
                <button className="progress" onClick={() => addToNextStage(item, "todo", "progress")}>PROGRESS</button>
                <button className="complete" onClick={() => addToNextStage(item, "todo", "complete")}>COMPLETE</button>
                <button onClick={() => removeFromTodo(item)}>DELETE</button>
              </div>
            </div>
          ))
        } 
      </div>
    </div>
  );
}

export default ToDo;