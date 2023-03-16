import './App.css';
import React from 'react';

function addTask(){
const taskInput = document.getElementById('task');
const taskValue = taskInput.value;
document.getElementById('taskname').innerHTML = taskValue;
}


function App() {
  return (
    <div className="container">
    <div id="newtask">
        <input type="text" id="task" placeholder="Add Tasks"/>
        <button id="push" onClick={addTask}>Add</button>
    </div>
    <div id="tasks">
      <div className="task">
          <span id="taskname">        
          </span>
      </div>
    </div>
</div>
  );
}

export default App;
