const codatClient = require("../clients/codat");
const { getUserStorage } = require("../storage/user");

const getEnabledIntegrations = async (req, res) => {
  const results = await codatClient.getIntegrations();

  res.json(results);
};

const createDataConnection = async (req, res) => {
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

  const results = await codatClient.createDataConnection(codatCompanyId, integrationKey);

  res.json(results);
};

exports.getEnabledIntegrations = getEnabledIntegrations;
exports.createDataConnection = createDataConnection;
