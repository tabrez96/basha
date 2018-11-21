import React from "react";

import './styles.css';

const TaskListPanel = (props) => {
  const style = {
    backgroundColor: 'red'
  }

  console.log('in panel', props)
  return (
    <div className="panelContainer" style={style}>
      { props.user.userName }
    </div>
  )
}

export default TaskListPanel;