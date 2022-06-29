const express = require("express");
const bodyParser = require("body-parser");
const { config } = require("./config");
const { userLogin, getUserConnections } = require("./controllers/user");
const { getEnabledIntegrations, createDataConnection } = require("./controllers/integrations");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', userLogin);
app.get('/user/:userId/connections', getUserConnections);
app.get('/integrations', getEnabledIntegrations);
app.post('/user/:userId/connections/:integrationKey', createDataConnection)

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});
