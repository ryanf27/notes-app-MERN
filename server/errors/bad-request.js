const ClientError = require("./client-error");

class BadRequest extends ClientError {
  constructor(message) {
    super(message);
  }
}

module.exports = BadRequest;
