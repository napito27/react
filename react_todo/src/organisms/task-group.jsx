import Task from '../molecules/task';

import '../styles/styles.css';

function TaskGroup({ taskList, onDeleteTask }) {
  
  return taskList.map((task) => <Task key={task} taskText={task} onDeleteTask={onDeleteTask}/>);
  
}

export default TaskGroup;
