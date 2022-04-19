const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const { LocalStorage } = require("node-localstorage");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const userIdMap = new LocalStorage("./bin/users");

app.post('/login', (req, res) => {
  const userId = uuid.v4()
  const userName = req.body.username

  userIdMap.setItem(userName, userId)
  res.json({ userId })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});