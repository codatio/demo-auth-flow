import { v4 } from "uuid";
import * as CodatClient from "../clients/codat.js";
import { userIdMap, getUserStorage } from "../storage/user.js";

//Handle 'Apply for a loan' button
export const apply = async (_req, res) => {
  const userId = v4();
  const userStorage = getUserStorage(userId);

  if (!userStorage.getItem("codat-company-id")) {
    // Codat company has not been created
    //   so we will create it by posting to the Codat API
    const resultBody = await CodatClient.createCompany(userId);
    const codatCompanyId = resultBody.id;

    if (codatCompanyId) {
      console.log(
        "Setting codat company ID as",
        codatCompanyId,
        "for user",
        userId
      );
      userStorage.setItem("codat-company-id", codatCompanyId);
    }
  }

  res.json({ userId });
};

export const getUserConnections = async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    res.status(400).send({ error: "userId is a required field" });
  }

  const userStorage = getUserStorage(userId);

  if (!userStorage) {
    res.status(400).send({ error: "Unknown user id" });
  }

  const codatCompanyId = userStorage.getItem("codat-company-id");

  if (!codatCompanyId) {
    res.status(400).send({ error: "User ID has not been set up with codat" });
  }

  console.log(
    "Getting connections for user",
    userId,
    "codat company ID",
    codatCompanyId
  );

  const results = await CodatClient.getConnections(codatCompanyId);

  res.json(results);
};
