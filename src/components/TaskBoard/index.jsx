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

    console.log(this.props, 'props in board')

    const users = [
      {name: 'tabrez', id: 1, tasks: [{ id: 1, value: 'Task 1'}, {id: 2, value: 'Task 2'}]},
      {name: 'keerthana', id: 2, tasks: [{id: 3, value: 'Task 3'}, {id: 4, value: 'Task 4'}]}
    ];

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        >
        <div className="boardContainer">
          {
            _.map(users, user => {
              return (
                <TaskList user={user} key={user.id}/>
              )
            })
          }
        </div>
      </DragDropContext>
    );
  }
}

export default TaskBoard;
