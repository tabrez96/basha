let taskId = 0;

export const addTask = taskData => ({
  type: 'ADD_TASK',
  taskId: taskId++,
  task: taskData.task,
  userId: taskData.userId
})

export const deleteTask = task => {
  type: 'DELETE_TASK',
  task
}

export const moveTask = task => ({
  type: 'MOVE_TASK',
  task
})