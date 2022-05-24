const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const { LocalStorage } = require("node-localstorage");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 3001;
const apiKey = process.env.CODAT_API_KEY;
const codatBaseUrl = "https://api.codat.io";

const apiKeyBase64Encoded = Buffer.from(apiKey).toString("base64");
const authorisationHeader = "Basic " + apiKeyBase64Encoded;

if (!apiKey) {
  throw new Error("You must have your Codat api key set as the environment variable CODAT_API_KEY");
}

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
    const postResult = await fetch(
      `${codatBaseUrl}/companies`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authorisationHeader
        },
        body: JSON.stringify({
          name: userName
        })
      }
    );
    const resultBody = await postResult.json();
    const codatCompanyId = resultBody.id;
    if (codatCompanyId) {
      console.log("Setting codat company ID as", codatCompanyId, "for user", userId);
      userStorage.setItem("codat-company-id", codatCompanyId);
    }
  }

  res.json({ userName, userId });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});