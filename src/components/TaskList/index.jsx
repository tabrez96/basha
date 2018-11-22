import React from "react";

import Panel from '../TaskListPanel/index';
import TaskItem from '../TaskItem/index';
import AddTask from "../AddTask";
import { Droppable } from "react-beautiful-dnd";

import * as _ from 'lodash';

import './styles.css';

const TaskList = (props) => {

  console.log(props, 'props in list');

  const onAddTask = (taskData) => {
    taskData.userId = props.user.userId;
    props.onAddTask(taskData);
  }

  return (
    <div className="taskListContainer">
      <Panel user={props.user} />
      <Droppable droppableId={props.user.userId}>
      {
        provided => (
          <div className="listWrapper" ref={provided.innerRef} {...provided.droppableProps}>
          {
            _.map(props.user.tasks, (task, _index) => {
              return (
                <TaskItem task={task} key={task.id} index={_index} />
              )
            })
          }
          <AddTask onAddTask={onAddTask}/>
        </div>
        )
      }
      </Droppable>
    </div>
  )
}

export default TaskList;