import React from 'react';

import '../styles/styles.css';

// to add a new task
function AddTask({onAddClick, taskName}) {
  const [addTaskIpt, setAddTaskIpt] = React.useState("")

  const handleInputChange = (e) => {
    setAddTaskIpt(e.target.value)
  }

  const handleOnAddClick = (e) => {
    e.preventDefault()

    onAddClick(addTaskIpt);
    setAddTaskIpt("");
  }

  return (
    <form onSubmit={handleOnAddClick} className="add-task">      
      <div>
        <input 
          type='text' 
          name='add-task-ipt' 
          id='add-task-ipt' 
          value={addTaskIpt} 
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button 
          className="task-button task-btn" 
          type='submit'
          >
            Add
        </button>
      </div>
    </form>
  );
}

export default AddTask;
