import React from "react";

import { Draggable } from 'react-beautiful-dnd';

import './styles.css';

const TaskItem = (props) => {

  const { task, index, user } = props;

  const onDeleteTask = () => {
    props.onDeleteTask({
      taskId: task.taskId,
      userId: user.userId
    })
  }

  return (
    <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
      {
        provided => (
          <div className="taskContainer" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <span>{task.taskData}</span>
            <span onClick={onDeleteTask}> x </span>
          </div>
        )
      }
    </Draggable>
  )
}

export default TaskItem;