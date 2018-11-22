import React from 'react';

import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "../TaskList/index";
import * as _ from 'lodash';
import * as gen from 'color-generator';

import './styles.css';

class TaskBoard extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showTextBox: false,
      userName: ''
    }

    this.addUser = this.addUser.bind(this)
  }

  onDragStart = (result) => {
  }

  onDragEnd = ({ draggableId, source, destination }) => {

    // if card is dropped out of droppable zone
    if (!destination) return;

    const payload = {
      taskId: draggableId,
      sourceUserId: source.droppableId,
      sourceIndex: source.index,
      destinationUserId: destination.droppableId,
      destinationIndex: destination.index
    }
    this.props.moveTask(payload);
  }

  addUser = (event) => {
    if (!this.state.userName) {
      this.setState({
        error: true
      });
      // prevent reloading of the page
      event.preventDefault();
      return;
    }
    this.props.addUser({
      userName: this.state.userName,
      // generate random color to users
      userColor: gen().hexString()
    });
    this.resetText();
    this.toggleShowTextbox();
  }

  handleChange = (event) => {
    this.setState({
      userName: event.target.value,
      error: false
    })
  }

  toggleShowTextbox = () => {
    this.setState(({showTextBox}) => {
      return {showTextBox: !showTextBox};
    });
    this.resetText();
  }

  resetText = () => {
    this.setState({
      userName: '',
      error: false
    })
  }

  render() {

    const { showTextBox, userName } = this.state;
    const { addTask, deleteTask, users, deleteUser } = this.props;

    var content;
    if (showTextBox) {
      content = (
        <form className="addUserForm" onSubmit={this.addUser}>
          <input type="text" value={userName} onChange={this.handleChange} />
          <div className="formError">{this.state.error ? 'User Name cannot be empty' : null}</div>
          <div>
            <button type="submit">Add</button>
            <button onClick={this.toggleShowTextbox}>Cancel</button>
          </div>
        </form>
      )
    }
    else {
      content = (
        <span className="addBtn" onClick={this.toggleShowTextbox}>
          Add User
        </span>
      )
    }

    return (
      <div className="boardContainer">
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          {
            _.map(users, user => {
              return (
                <TaskList
                  key={user.userId}
                  user={user}
                  onAddTask={addTask}
                  onDeleteTask={deleteTask}
                  onDeleteUser={deleteUser}
                />
              )
            })
          }
        </DragDropContext>
        {
          content
        }
      </div>
    );
  }
}

export default TaskBoard;
