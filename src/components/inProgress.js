import React, {useState, useEffect} from 'react';
import './style/task-box.css'

function InProgress(props) {
  const {list, addNextStage, remove} = props;

  const addToNextStage = (task, currentStage, nextStage) => {
    if (addNextStage) 
      addNextStage(task, currentStage, nextStage);
  }

  const removeFromProgress = (item) => {
    if (remove)
      remove(item, "progress");
  }

  return (
    <div id="progress-box" className="task-box">
      <img alt="task" src={require('../img/doing.png')} />
      <h1>IN PROGRESS</h1>
      <div className="task-list">
        {
          list.map(item => 
            <div className="task">
              <div className="task-content">
                <div>{item.content}</div>
              </div>
              <div className="task-button">
                <button className="todo" onClick={() => addToNextStage(item, "progress", "todo")}>PLAN</button>
                <button className="complete" onClick={() => addToNextStage(item, "progress", "complete")}>COMPLETE</button>
                <button onClick={() => removeFromProgress(item)}>DELETE</button>
              </div> 
            </div>
        )}
      </div>
    </div>
  );
}

export default InProgress;