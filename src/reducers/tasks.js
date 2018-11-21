const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          taskData: action.task,
          userId: action.userId
        }
      ]
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    case 'MOVE_TASK':
        const moved_task = state.find(task => task.id === action.id);
        moved_task.userId = action.userId
      return state;
    default:
      return state;
  }
}

export default tasksReducer;