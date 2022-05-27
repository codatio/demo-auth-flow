const uuid = require("uuid");
const { createCompany } = require("../clients/codat");
const { userIdMap, getUserStorage } = require("../storage/user");

const userLogin = async (req, res) => {
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
}

exports.userLogin = userLogin;
