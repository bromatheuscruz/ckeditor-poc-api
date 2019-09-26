const server = require("../bin/server");

const emit = (event, message) => {
    server.io.emit(event, message);
};

module.exports = {
    emit
}