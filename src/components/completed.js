import React, {useState, useEffect} from 'react';
import './style/complete.css'

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
      <div>
        <h1>COMPLETED</h1>
        <div className="task-list">
          {list.map(item => 
            <div>
              <div>{item.id} {item.content}</div>
              <button onClick={() => addToStage(item, "complete", "todo")}>TO-DO</button>
              <button onClick={() => addToStage(item, "complete", "progress")}>PROGRESS</button>
              <button onClick={() => removeFromComplete(item)}>DELETE</button>
            </div>)} 
        </div>
      </div>
    </div>
  );
}

export default CompletedTasks;