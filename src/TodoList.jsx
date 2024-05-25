import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
    const [task, setTask] = useState(["hello", "world"]);
    const [taskList, setTaskList] = useState("");
    

    const handleChange = (event) => {
        setTaskList(event.target.value)
    };
    
    const addTask = () => {
        if(taskList.trim() !== "") {
          setTask(t => [...t, taskList]);
          setTaskList("");
        }
    };

    const deleteTask = (index) => {

        const updatedTask = task.filter((_,i) => i !== index);
        setTask(updatedTask);                           
    }

    const moveTaskUp = (index) => {
        if(index > 0) {
            const updatedTask = [...task];
            updatedTask[index], updatedTask[index - 1] = updatedTask[index - 1], updatedTask[index];
            setTask(updatedTask); 
        }
    }

    const moveTaskDown = (index) => {
        if(index < task.length - 1) {
            const updatedTask = [...task];
            updatedTask[index], updatedTask[index + 1] = updatedTask[index + 1], updatedTask[index];
            setTask(updatedTask); 
        }
    }
 

  return (
    <div className="container text-center p-5 mt-5 to-do-list">
      <h1 className="text-danger">Todo List</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group ">
            <input
              type="text"
              className="form-control border border-secondary "
              placeholder="Add a Task..." 
              value={taskList}
              onChange={handleChange}
            />
            <button onClick={addTask }  className="btn btn-primary btn-lg">Add</button>
          </div>
         <ol>
              {task.map((task, index) => (
                  <li key={index} className="mt-3">
                      <span className="text">{task}</span>
                      <button 
                      className="btn btn-danger btn-sm ms-3"
                       onClick={() => deleteTask(index)}>
                        Delete
                        </button>
                      <button 
                      className="btn btn-secondary btn-sm ms-3" 
                      onClick={() => moveTaskUp(index)}>
                        ☝️
                        </button>
                      <button 
                      className="btn btn-dark btn-sm ms-3" 
                      onClick={() => moveTaskDown(index)}>
                        👇
                        </button>
                  </li>
                  
              ))}
         </ol>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
