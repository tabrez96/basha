import { connect } from 'react-redux';
import TaskBoard from '../components/TaskBoard/index';
import { addTask, deleteTask, moveTask } from '../actions/TaskActions';
import { addUser, deleteUser } from '../actions/UserActions';

const mapStateToProps = state => {
  return {
    users: state.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: task => dispatch(addTask(task)),
    deleteTask: task => dispatch(deleteTask(task)),
    moveTask: task => dispatch(moveTask(task)),
    addUser: user => dispatch(addUser(user)),
    deleteUser: user => dispatch(deleteUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);