import React, { Component } from 'react';

import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "../TaskList/index";
import * as _ from 'lodash';

import './styles.css';

class TaskBoard extends Component {

  onDragEnd() {

  }

  onDragStart() {

  }

  render() {

    const { addTask, moveTask, deleteTask, users } = this.props;

    console.log(this.props, 'board props')

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        >
        <div className="boardContainer">
          {
            _.map(users, user => {
              return (
                <TaskList
                  key={user.id}
                  user={user}
                  onAddTask={addTask}
                  onDeleteTask={deleteTask}
                  onMoveTask={moveTask}
                />
              )
            })
          }
        </div>
      </DragDropContext>
    );
  }
}

export default TaskBoard;
