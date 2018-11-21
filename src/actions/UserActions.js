let userId = 2;

export const addUser = userData => ({
  type: 'ADD_TASK',
  userName: userData.name,
  userId: userId++
})

export const deleteUser = user => {
  type: 'DELETE_USER',
  user
}