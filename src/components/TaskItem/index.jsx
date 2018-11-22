import React from "react";

import { Draggable } from 'react-beautiful-dnd';

import './styles.css';

const TaskItem = ({ task, index }) => {

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {
        provided => (
          <div className="taskContainer" ref={provided.innerRef} {...provided.draggableProps}>
            <div {...provided.dragHandleProps}> Handle </div>
            {task.taskData}
          </div>
        )
      }
    </Draggable>
  )
}

export default TaskItem;