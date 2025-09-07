import DatabaseError from './DatabaseError.js';

const users = []; // In-memory user storage

const addUser = ({ username, password }) => {
  if ((username, password)) {
    users.push({ username, password });
  } else {
    throw new DatabaseError('Username and password are required');
  }
};

console.log(users); // Logging for testing - should remove in production

const getUser = (user) => {
  if (users.find((u) => u.username === user)) {
    // Find user by username
    return users.find((u) => u.username === user);
  } else {
    throw new DatabaseError('User not found');
  }
};

const getAllUsers = () => {
  if (users) {
    return users;
  } else {
    throw new DatabaseError('No users found');
  }
};

const setPassword = (user, password) => {
  const foundUser = users.find((u) => u.username === user); // Find user by username
  if (foundUser) {
    foundUser.password = password;
  } else {
    throw new DatabaseError('User not found');
  }
};

const deleteUser = (user) => {
  const index = users.findIndex((u) => u.username === user); // Find index of user
  if (index !== -1) {
    users.splice(index, 1); // Remove user from array
  } else {
    throw new DatabaseError('User not found');
  }
};

export { addUser, getAllUsers, setPassword, getUser, deleteUser };
