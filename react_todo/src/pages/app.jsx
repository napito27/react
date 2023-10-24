import React from "react";

import Header from "../molecules/header";
import AddTask from "../organisms/add-task";
import TaskGroup from "../organisms/task-group";
import Layout from "../templates/layout";

function App({taskName}) {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (taskName) => {
    const isTaskNameInTasks = tasks.includes(taskName.toLowerCase());

    if (!isTaskNameInTasks && taskName !== "") {
      setTasks([...tasks, taskName.toLowerCase()]);
    }
  }

  const deleteTask = (taskToDelete) => {
    const filteredTaskList = tasks.filter((task) => task !== taskToDelete);
    setTasks(filteredTaskList);
  } 

  return (    
    <Layout>
      <Header />
      <AddTask onAddClick={addTask}/>
      <TaskGroup taskList={tasks} onDeleteTask={deleteTask}/>
    </Layout>    
  );
}

export default App;
