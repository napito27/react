import Task from '../molecules/task';

import '../styles/styles.css';

function TaskGroup({ taskList, onDeleteTask }) {
  
  return taskList.map((task) => <Task key={task} taskText={task} onDeleteTask={onDeleteTask}/>);
  
}

export default TaskGroup;

// <>
    //   <div className="task-group task-list">
    //   {taskList.length === 0 && <div className='message'>Nothing To-Do</div>}
    //     <div> {taskList} </div>
    //     {/* <button className="delete-button task-btn">Delete</button> */}
    //   </div>
    // </>