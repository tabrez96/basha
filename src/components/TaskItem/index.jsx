import React from "react";

import './styles.css';

const TaskItem = (props) => {

  const { task, index, user } = props;

  const onDeleteTask = () => {
    props.onDeleteTask({
      taskId: task.taskId,
      userId: user.userId
    })
  }

  const onDragTask = (event) => {
    event.dataTransfer.setData('taskIndex', index);
    event.dataTransfer.setData('userId', user.userId);
  }

  return (
    <div className="taskContainer" key={task.taskId} draggable onDragStart={onDragTask}>
      <span>{task.taskData}</span>
      <span onClick={onDeleteTask}> x </span>
    </div>
  )
}

export default TaskItem;