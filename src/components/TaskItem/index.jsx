import React from "react";

import { Draggable } from 'react-beautiful-dnd';

import './styles.css';

const TaskItem = ({ task, index }) => {

  return (
    <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
      {
        provided => (
          <div className="taskContainer" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {task.taskData}
          </div>
        )
      }
    </Draggable>
  )
}

export default TaskItem;