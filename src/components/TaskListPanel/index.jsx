import React from "react";

import './styles.css';


const TaskListPanel = (props) => {
  const style = {
    backgroundColor: props.user.userColor || '#f58020'
  }

  const onDeleteUser = () => {
    props.onDeleteUser({
      userId: props.user.userId
    })
  }

  return (
    <div className="panelContainer" style={style}>
      <span>{ props.user.userName }</span>
      <span onClick={onDeleteUser}> x </span>
    </div>
  )
}

export default TaskListPanel;