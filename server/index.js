import express from "express";
import bodyParser from "body-parser";
import { config } from "./config.js";
import { apply, getUserConnections } from "./controllers/user.js";
import { getEnabledIntegrations, createDataConnection } from "./controllers/integrations.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: "http://localhost:3000"}))

app.post('/apply', apply);
app.get('/user/:userId/connections', getUserConnections);
app.get('/integrations', getEnabledIntegrations);
app.post('/user/:userId/connections/:integrationKey', createDataConnection);

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});
 