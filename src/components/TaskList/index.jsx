import React from "react";

import Panel from '../TaskListPanel/index';
import TaskItem from '../TaskItem/index';
import { Droppable } from "react-beautiful-dnd";

import * as _ from 'lodash';

import './styles.css';

const TaskList = (props) => {

  console.log(props, 'props')

  return (
    <div className="taskListContainer">
      <Panel user={props.user} />
      <Droppable droppableId={props.user.id}>
      {
        provided => (
          <div className="listWrapper" ref={provided.innerRef} {...provided.droppableProps}>
          {
            _.map(props.user.tasks, task => {
              return (
                <TaskItem task={task} key={task.name} />
              )
            })
          }
        </div>
        )
      }
      </Droppable>
    </div>
  )
}

export default TaskList;