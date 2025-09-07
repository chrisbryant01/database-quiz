export default class DatabaseError extends Error {
  constructor(func, message, code) {
    super(message);
    this.func = func; // function
    this.code = code;
  }
}
