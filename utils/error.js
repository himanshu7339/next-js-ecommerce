export class ErrorHandler {
  constructor(statusCode, message) {
    (this.statusCode = statusCode), (this.message = message);
  }
}
