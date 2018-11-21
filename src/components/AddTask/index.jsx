import React from 'react';

import './styles.css';

const AddTask = ({ onAddTask }) => {

  const addTask = () => {
    onAddTask({
      task: 'Do something'
    })
  }

  return (
    <div className="addTaskWrapper" onClick={addTask}>
      Add task
    </div>
  )
}

export default AddTask;