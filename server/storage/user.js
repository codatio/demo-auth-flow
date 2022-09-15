import { LocalStorage } from "node-localstorage";

// username -> user ID map
export const userIdMap = new LocalStorage("./bin/users");

export const getUserStorage = (userId) => {
  return new LocalStorage(`./bin/${userId}`);
};
