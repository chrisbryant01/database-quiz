import DatabaseError from './DatabaseError.js';

const users = []; // In-memory user storage

const addUser = ({ username, password }) => {
  if ((username, password)) {
    users.push({ username, password });
  } else {
    throw new DatabaseError(addUser, 'Invalid user data', 400);
  }
};

const getUser = (user) => {
  if (users.find((u) => u.username === user)) {
    // Find user by username
    return users.find((u) => u.username === user);
  } else {
    throw new DatabaseError(getUser, 'User not found', 404);
  }
};

const getAllUsers = () => {
  if (users) {
    return users;
  } else {
    throw new DatabaseError(getAllUsers, 'No users found', 404);
  }
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
  const index = users.findIndex((u) => u.username === user); // Find index of user
  if (index !== -1) {
    users.splice(index, 1); // Remove user from array
  } else {
    throw new DatabaseError(deleteUser, 'User not found', 404);
  }
};

export { addUser, getAllUsers, setPassword, getUser, deleteUser };
