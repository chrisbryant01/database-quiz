import DatabaseError from './DatabaseError.js';

const users = []; // Initalize empty array to hold users

const addUser = ({ username, password }) => {
  if ((username, password)) {
    users.push({ username, password });
  } else {
    throw new DatabaseError(addUser, 'Invalid user data', 400);
  }
};

const getUser = (user) => {
  // Check if user exists in array
  const foundUser = users.find((u) => u.username === user);
  if (foundUser) {
    return foundUser;
  } else {
    throw new DatabaseError(getUser, 'User not found', 404);
  }
};

const getAllUsers = () => {
  // if (users.length) {
  //   return users;
  // } else {
  //   throw new DatabaseError(getAllUsers, 'No users found', 404);
  // }

  // Example code: You could also write it as a ternary like this - they're functionally equivalent
  return users.length
    ? users
    : new DatabaseError(getAllUsers, 'No users found', 404);
};

const setPassword = (user, password) => {
  const foundUser = users.find((u) => u.username === user); // Find user by username
  if (foundUser) {
    foundUser.password = password;
  } else {
    throw new DatabaseError(setPassword, 'User not found', 404);
  }
};

const deleteUser = (user) => {
  const index = users.findIndex((u) => u.username === user); // Find index of user by username
  if (index !== -1) {
    users.splice(index, 1); // Remove user from array
  } else {
    throw new DatabaseError(deleteUser, 'User not found', 404);
  }
};

export { addUser, getAllUsers, setPassword, getUser, deleteUser };
