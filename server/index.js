import express from "express";
import bodyParser from "body-parser";
import { config } from "./config.js";
import { apply, getUserConnections } from "./controllers/user.js";
import { getEnabledIntegrations, createDataConnection } from "./controllers/integrations.js";

import path from "path";
const __dirname = path.resolve();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/apply', apply);
app.get('/user/:userId/connections', getUserConnections);
app.get('/integrations', getEnabledIntegrations);
app.post('/user/:userId/connections/:integrationKey', createDataConnection);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "public")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});
 