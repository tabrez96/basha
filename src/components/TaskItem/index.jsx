import React from "react";

import { Draggable } from 'react-beautiful-dnd';

import './styles.css';

const TaskItem = ({ task }) => {

  return (
    <Draggable key={task.id} draggableId={task.id}>
      {
        provided => (
          <div className="taskContainer" ref={provided.innerRef} {...provided.draggableProps}>
            <div {...provided.dragHandleProps}> Handle </div>
            {task.value}
          </div>
        )
      }
    </Draggable>
  )
}

export default TaskItem;