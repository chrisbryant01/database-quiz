import DatabaseError from './DatabaseError.js';

const users = []; // Initalize empty array to hold users

const getAllUsers = () => {
  if (users.length) {
    return users;
  } else {
    throw new DatabaseError(getAllUsers, 'No users exist in the database', 404);
  }
};

const addUser = ({ username, password }) => {
  if ((username, password)) {
    users.push({ username, password });
  } else {
    throw new DatabaseError(
      addUser,
      'Username and password are required to add a user',
      400
    );
  }
};

const getUser = (username) => {
  // Check if user exists in array
  const foundUser = users.find((u) => u.username === username);
  if (foundUser) {
    return foundUser;
  } else {
    throw new DatabaseError(getUser, 'User not found', 404);
  }
};

const setPassword = (username, password) => {
  const foundUser = users.find((u) => u.username === username); // Find user by username
  if (foundUser) {
    foundUser.password = password;
  } else {
    throw new DatabaseError(setPassword, 'User not found', 404);
  }
};

const deleteUser = (username) => {
  const index = users.findIndex((u) => u.username === username); // Find index of user by username
  if (index !== -1) {
    users.splice(index, 1); // Remove user from array
  } else {
    throw new DatabaseError(deleteUser, 'User not found', 404);
  }
};

export { addUser, getAllUsers, setPassword, getUser, deleteUser };
