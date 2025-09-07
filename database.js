const users = []; // In-memory user storage

const addUser = ({ username, password }) => {
  users.push({ username, password });
};

console.log(users); // Logging for testing - should remove in production

const getUser = (user) => {
  return users.find((u) => u.username === user); // Find user by username
};

const getAllUsers = () => {
  return users;
};

const setPassword = (user, password) => {
  const foundUser = users.find((u) => u.username === user); // Find user by username
  if (foundUser) {
    foundUser.password = password;
  } else {
    throw new Error('User not found');
  }
};

const deleteUser = (user) => {
  const index = users.findIndex((u) => u.username === user); // Find index of user
  if (index !== -1) {
    users.splice(index, 1); // Remove user from array
  } else {
    throw new Error('User not found');
  }
};

export { addUser, getAllUsers, setPassword, getUser, deleteUser };
