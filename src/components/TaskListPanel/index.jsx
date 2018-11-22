import React from "react";

import './styles.css';

const TaskListPanel = (props) => {
  const style = {
    backgroundColor: 'red'
  }

  return (
    <div className="panelContainer" style={style}>
      { props.user.userName }
    </div>
  )
}

export default TaskListPanel;