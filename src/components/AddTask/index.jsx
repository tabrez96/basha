import React from 'react';

import './styles.css';

class AddTask extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      showTextBox: false
    };
  }

  addTask = (event) => {
    if (!this.state.newTask) {
      this.setState({
        error: true
      });
      event.preventDefault();
      return;
    }
    this.props.onAddTask({
      task: this.state.newTask,
    });
    this.resetText();
    this.toggleShowTextbox();
  }

  resetText = () => {
    this.setState({
      newTask: '',
      error: false
    })
  }

  toggleShowTextbox = () => {
    this.setState(({showTextBox}) => {
      return {showTextBox: !showTextBox};
    });
    this.resetText();
  }

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
      error: false
    });
  }

  render() {
    const { newTask, showTextBox } = this.state;

    let content;
    if (showTextBox) {
      content = (
        <form onSubmit={this.addTask}>
          <input type="text" value={newTask} onChange={this.handleChange} />
          <div className="formError">{this.state.error ? 'Task contents cannot be empty' : null}</div>
          <button type="submit">Add</button>
          <button onClick={this.toggleShowTextbox}>Cancel</button>
          <div>(But this is a bad UX)</div>
        </form>
      )
    }
    else {
      content = (
        <span onClick={this.toggleShowTextbox}>
          Add task
        </span>
      )
    }

    return (
      <React.Fragment>
        <div className="addTaskWrapper">
        {
          content
        }
        </div>
      </React.Fragment>
    )
  }
}

export default AddTask;