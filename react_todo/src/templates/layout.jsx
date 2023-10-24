import React from 'react';

import "../styles/styles.css"

function Layout({children}) {
  const [ headerComponent, addTasksComponent, tasksGroupComponent ] = children;
  
  return (
    <div className='container'>
      <header>{headerComponent}</header>
      <div>{addTasksComponent}</div>
      <div className='task-group'>{tasksGroupComponent}</div>
    </div>
  );
}

export default Layout;