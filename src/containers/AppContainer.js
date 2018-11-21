import { connect } from 'react-redux';
import TaskBoard from '../components/TaskBoard/index';
import { addTask, deleteTask, moveTask } from '../actions/TaskActions';

const mapStateToProps = state => {
  return {
    tasks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: task => dispatch(addTask(task)),
    deleteTask: task => dispatch(deleteTask(task)),
    moveTask: task => dispatch(moveTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);