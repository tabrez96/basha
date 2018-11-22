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

  addTask = () => {
    this.props.onAddTask({
      task: this.state.newTask,
    });
    this.resetText();
    this.toggleShowTextbox();
  }

  resetText = () => {
    this.setState({
      newTask: ''
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
      newTask: event.target.value
    })
  }

  render() {
    const { newTask, showTextBox } = this.state;

    let content;
    if (showTextBox) {
      content = (
        <form onSubmit={this.addTask}>
          <input type="text" value={newTask} onChange={this.handleChange} />
          <button type="submit">Add</button>
          <button onClick={this.toggleShowTextbox}>Cancel</button>
          (But this is a bad UX)
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