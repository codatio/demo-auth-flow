import * as CodatClient from "../clients/codat.js";
import { getUserStorage } from "../storage/user.js";

export const getEnabledIntegrations = async (req, res, next) => {
  try {
    const results = await CodatClient.getIntegrations();
    res.json(results);
  } catch (e) {
    next(e);
  }
};

export const createDataConnection = async (req, res, next) => {
  const userId = req.params.userId;
  const integrationKey = req.params.integrationKey;
  
  if (!userId) {
    res.status(400).send({error: "userId is a required field"});
  }

  if (!integrationKey) {
    res.status(400).send({error: "integrationKey is a required field"});
  }
  
  const userStorage = getUserStorage(userId);
  
  if (!userStorage) {
    res.status(400).send({error: "Unknown user id"});
  }

  const codatCompanyId = userStorage.getItem("codat-company-id");
  
  if (!codatCompanyId) {
    res.status(400).send({error: "User ID has not been set up with codat"});
  }

  console.log("Creating data connection for user", userId, "codat company ID", codatCompanyId, "integration key", integrationKey);

  try {
    const results = await CodatClient.createDataConnection(codatCompanyId, integrationKey, next);
    res.json(results);
  } catch (e) {
    next(e);
  }

};
