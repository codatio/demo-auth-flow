const { LocalStorage } = require("node-localstorage");

// username -> user ID map
const userIdMap = new LocalStorage("./bin/users");

const getUserStorage = (userId) => {
  return new LocalStorage(`./bin/${userId}`);
};

exports.userIdMap = userIdMap;
exports.getUserStorage = getUserStorage;
