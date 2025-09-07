import * as db from './database.js';

try {
  db.addUser({ username: 'joe', password: 'test1234!' });
  db.addUser({ username: 'alice', password: 'test1234!' });
  db.setPassword('alice', 'abc123');

  const alice = db.getUser('alice');
  console.log(alice);

  db.deleteUser('joe');

  const arr = db.getAllUsers();
  console.log(arr);

  // db.addUser({ username: 'error' }); // This will throw an error, should be removed
} catch (err) {
  console.log(`${err.func}: ${err.message} - ${err.code}`);
}
