let userId = 2;

export const addUser = userData => ({
  type: 'ADD_USER',
  userName: userData.userName,
  userColor: userData.userColor,
  userId: userId++
})

export const deleteUser = user => ({
  type: 'DELETE_USER',
  userId: user.userId
})