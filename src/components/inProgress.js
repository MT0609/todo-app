import React, {useState, useEffect} from 'react';
import './style/inprogress.css'

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
    <div id="progress-box">
      <img alt="task" src={require('../img/doing.png')} />
      <div>
        <h1>IN PROGRESS</h1>
        <div className="task-list">
          {
          list.map(item => 
            <div>
              <div>{item.id} {item.content}</div>
              <button onClick={() => addToNextStage(item, "progress", "todo")}>TO-DO</button>
              <button onClick={() => addToNextStage(item, "progress", "complete")}>COMPLETE</button>
              <button onClick={() => removeFromProgress(item)}>DELETE</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InProgress;