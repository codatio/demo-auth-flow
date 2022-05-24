const express = require("express");
const bodyParser = require("body-parser");
const { config } = require("./config");
const { userLogin } = require("./controllers/user");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', userLogin);

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});