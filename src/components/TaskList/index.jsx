import React from "react";

import Panel from '../TaskListPanel/index';
import TaskItem from '../TaskItem/index';
import AddTask from "../AddTask";

import * as _ from 'lodash';

import './styles.css';

const TaskList = (props) => {

  const onAddTask = (taskData) => {
    taskData.userId = props.user.userId;
    props.onAddTask(taskData);
  }

  const onDrop = (event) => {
    const payload = {
      sourceIndex: event.dataTransfer.getData('taskIndex'),
      sourceUserId: event.dataTransfer.getData('userId'),
      destinationUserId: props.user.userId
    }
    props.onMoveTask(payload);
    console.log('on drop', payload)
  }

  const onDragOver = (event) => {
    event.preventDefault();
  }

  return (
    <div className="taskListContainer">
      <Panel user={props.user} onDeleteUser={props.onDeleteUser} />
      <div className="listWrapper" onDrop={onDrop} onDragOver={onDragOver}>
        {
          _.map(props.user.tasks, (task, _index) => {
            return (
              <TaskItem key={task.taskId}
                task={task} index={_index} user={props.user}
                onDeleteTask={props.onDeleteTask} />
            )
          })
        }
        <AddTask onAddTask={onAddTask} />
      </div>
    </div>
  )
}

export default TaskList;