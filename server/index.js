const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const { LocalStorage } = require("node-localstorage");
const { createCompany } = require("./clients/codat");
const { config } = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// username -> user ID map
const userIdMap = new LocalStorage("./bin/users");

const getUserStorage = (userId) => {
  return new LocalStorage(`./bin/${userId}`);
};

app.post('/login', async (req, res) => {
  const userName = req.body.username;
  
  if (!userName) {
    res.status(400).send({error: "username is a required field"});
  }

  // Try to get user ID for an existing user
  const userId = userIdMap.getItem(userName) ?? uuid.v4();
  // Set the userIdMap value
  userIdMap.setItem(userName, userId);

  const userStorage = getUserStorage(userId);
  if(!userStorage.getItem("codat-company-id")) {
    // Codat company has not been created
    // So we will create it by posting to the Codat API
    const resultBody = await createCompany(userName);
    const codatCompanyId = resultBody.id;
    if (codatCompanyId) {
      console.log("Setting codat company ID as", codatCompanyId, "for user", userId);
      userStorage.setItem("codat-company-id", codatCompanyId);
    }
  }

  res.json({ userName, userId });
});

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});