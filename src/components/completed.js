import React, {useState, useEffect} from 'react';
import './style/task-box.css'

function CompletedTasks(props) {
  const {list, remove, backStage} = props;

  const removeFromComplete = (task) => {
    if (remove)
      remove(task, "complete");
  }

  const addToStage = (task, currentStage, nextStage) => {
    if (backStage)
      backStage(task, currentStage, nextStage);
  }

  return (
    <div id="complete-box">
      <img alt="task" src={require('../img/complete.png')} />
      <h1>COMPLETED</h1>
      <div className="task-list">
        {list.map(item => 
          <div className="task">
            <div className="task-content">
              <div>{item.content}</div>
            </div>
            <div className="task-button">
              <button className="todo" onClick={() => addToStage(item, "complete", "todo")}>PLAN</button>
              <button className="progress" onClick={() => addToStage(item, "complete", "progress")}>PROGRESS</button>
              <button onClick={() => removeFromComplete(item)}>DELETE</button>
            </div>
          </div>
        )} 
      </div>
    </div>
  );
}

export default CompletedTasks;