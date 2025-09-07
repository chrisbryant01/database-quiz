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
  const foundUser = users.find((u) => u.username === username); // Check if username already exists
  if (foundUser) {
    throw new DatabaseError(addUser, 'Username must be unique', 409);
  }

  if (username && password) {
    users.push({ username, password });
  } else {
    throw new DatabaseError(
      addUser,
      'Unique username and password are required',
      400
    );
  }
};

const getUser = (username) => {
  const foundUser = users.find((u) => u.username === username); // Check if user exists in array
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
