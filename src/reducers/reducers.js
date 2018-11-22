const userData = (state = [{ userName: 'tabrez', userId: 1, tasks: [] }], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          userName: action.userName,
          userId: action.userId,
          tasks: []
        }
      ]
    case 'DELETE_USER':
      return state.filter(user => user.userId !== action.userId);
    case 'ADD_TASK':
      const user = state.find(user => user.userId === action.userId);
      user.tasks.push(
        {
          taskId: action.taskId,
          taskData: action.task
        }
      );
      return [...state];
    case 'DELETE_TASK':
      return state.filter(task => action.taskId !== action.taskId);
    case 'MOVE_TASK':
      const moved_from_user = state.find(user => user.userId == action.task.sourceUserId);
      const moved_to_user = state.find(user => user.userId == action.task.destinationUserId);
      const moved_task = moved_from_user.tasks.splice(action.task.sourceIndex, 1);
      moved_to_user.tasks.splice(action.task.destinationIndex, 0, moved_task[0]);
      return [...state];
    default:
      return state;
  }
}

export default userData;