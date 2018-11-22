let userId = 2;

export const addUser = userData => ({
  type: 'ADD_USER',
  userName: userData.userName,
  userId: userId++
})

export const deleteUser = user => ({
  type: 'DELETE_USER',
  user
})