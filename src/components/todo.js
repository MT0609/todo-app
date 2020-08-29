import React, {useState, useEffect} from 'react';
import './style/todo.css'

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
      <div>
        <h1>TO-DO</h1>
        <div className="task-list">
          {
            list.map(item => (
              <div>
                <div key={item.id}>{item.id} {item.content}</div>
                <button onClick={() => addToNextStage(item, "todo", "progress")}>PROGRESS</button>
                <button onClick={() => addToNextStage(item, "todo", "complete")}>COMPLETE</button>
                <button onClick={() => removeFromTodo(item)}>DELETE</button>
              </div>
            ))
          } 
        </div>
      </div>
    </div>
  );
}

export default ToDo;