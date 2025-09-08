# README

## 1. Importing the Error Class

```javascript
import DatabaseError from './DatabaseError.js';
```

- This brings in a custom error class.
- When something goes wrong (like a user isn’t found), the file throws one of these errors.

---

## 2. The User Storage

```javascript
const users = [];
```

- This is just a regular JavaScript array.
- Every user will be stored here as an object like `{ username: 'alice', password: '1234' }`.
- Since this is just an array, if you restart the program, the data is gone. (That’s fine for simple demos or learning!)

---

## 3. Getting All Users

```javascript
const getAllUsers = () => {
  if (users.length) {
    return users;
  } else {
    throw new DatabaseError(getAllUsers, 'No users exist in the database', 404);
  }
};
```

- If there are any users, it returns the whole list.
- If not, it throws an error (`404` means “not found”).

---

## 4. Adding a User

```javascript
const addUser = ({ username, password }) => {
  const user = users.find((u) => u.username === username);
  if (user) {
    throw new DatabaseError(addUser, 'Username must be unique', 409);
  }
  if (username && password) {
    users.push({ username, password });
  } else {
    throw new DatabaseError(addUser, 'Bad request', 400);
  }
};
```

- Looks for an existing user with the same username.
- If found, throws an error (`409` means “conflict”—the username is taken).
- If username and password are provided, adds the user.
- If they’re missing, throws a `400` (“bad request”) error.

---

## 5. Getting a User by Username

```javascript
const getUser = (username) => {
  const user = users.find((u) => u.username === username);
  if (user) {
    return user;
  } else {
    throw new DatabaseError(getUser, 'User not found', 404);
  }
};
```

- Searches for a user by username.
- If found, returns the user object.
- If not, throws a `404` error.

---

## 6. Changing a User’s Password

```javascript
const setPassword = (username, password) => {
  const user = users.find((u) => u.username === username);
  if (user) {
    user.password = password;
  } else {
    throw new DatabaseError(setPassword, 'User not found', 404);
  }
};
```

- Looks for the user.
- If found, updates the password.
- If not, throws a `404` error.

---

## 7. Deleting a User

```javascript
const deleteUser = (username) => {
  const index = users.findIndex((u) => u.username === username);
  if (index !== -1) {
    users.splice(index, 1);
  } else {
    throw new DatabaseError(deleteUser, 'User not found', 404);
  }
};
```

- Finds the user’s position in the array.
- If found, removes them with `splice`.
- If not, throws a `404` error.

---

## 8. Exporting the Functions

```javascript
export { addUser, getAllUsers, setPassword, getUser, deleteUser };
```

- Makes these functions available to other files that import this one.

---

# 🧑‍🎓 Tips for Understanding

- **Array Methods:** `.find()` and `.findIndex()` are super useful for searching arrays. Try practicing with them in small examples!
- **Error Handling:** Throwing errors is how you tell the rest of your program “something went wrong.” Custom error classes help you give more detail.
- **Data Storage:** This “database” is just an array. For real projects, you’d use a real database, but this is great for learning.
- **Uniqueness:** Always check for duplicates when usernames or IDs need to be unique.
- **Readability:** Comments (like these!) are important, but so is clear code.

---

# 🎯 Practice Exercise

Try writing a new function, `updateUsername(oldName, newName)`, that changes a user’s username if it’s not already taken. Use the patterns above!


