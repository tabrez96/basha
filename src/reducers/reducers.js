const userData = (state = [{ userName: 'tabrez', userId: 1, tasks: [] }], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {

          userName: action.userName,
          userId: action.userId
        }
      ]
    case 'DELETE_USER':
      return state.filter(user => user.userId !== action.userId);
    case 'ADD_TASK':
      const user = state.find(user => user.userId === action.userId);
      user.tasks.push(
        {
          id: action.id,
          taskData: action.task
        }
      );
      return [...state];
    // case 'DELETE_TASK':
    //   return state.filter(task => task.id !== action.id);
    // case 'MOVE_TASK':
    //   const moved_task = state.find(task => task.id === action.id);
    //   moved_task.userId = action.userId
    //   return state;
    default:
      return state;
  }
}

export default userData;