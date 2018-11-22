import React from "react";

import Panel from '../TaskListPanel/index';
import TaskItem from '../TaskItem/index';
import AddTask from "../AddTask";
import { Droppable } from "react-beautiful-dnd";

import * as _ from 'lodash';

import './styles.css';

const TaskList = (props) => {

  const onAddTask = (taskData) => {
    taskData.userId = props.user.userId;
    props.onAddTask(taskData);
  }

  return (
    <div className="taskListContainer">
      <Panel user={props.user} onDeleteUser={props.onDeleteUser}/>
      <Droppable droppableId={props.user.userId + ''}>
      {
        provided => (
          <div className="listWrapper" ref={provided.innerRef} {...provided.droppableProps}>
          {
            _.map(props.user.tasks, (task, _index) => {
              return (
                <TaskItem key={task.taskId}
                task={task} index={_index} user={props.user}
                onDeleteTask={props.onDeleteTask}/>
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