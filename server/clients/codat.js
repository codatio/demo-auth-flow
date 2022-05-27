const fetch = require("node-fetch");
const { config } = require("../config");

const apiKey = config.apiKey;
const codatBaseUrl = config.codatBaseUrl;

if (!apiKey) {
  throw new Error("You must have your Codat api key set as the environment variable CODAT_API_KEY");
}

if (!codatBaseUrl) {
  throw new Error("You must have your Codat base URL set as the environment variable API_BASE_URL");
}

const apiKeyBase64Encoded = Buffer.from(apiKey).toString("base64");
const authorisationHeader = "Basic " + apiKeyBase64Encoded;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: authorisationHeader
};


const createCompany = async (name) => {
  const postResult = await fetch(
    `${codatBaseUrl}/companies`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        name
      })
    }
  );

  if (!postResult.ok) {
    throw new Error("Could not create company");
  }
  
  const resultBody = await postResult.json();

  return resultBody;
};

const getConnections = async (codatCompanyId) => {
  // We are ignoring paging for this endpoint as we expect only
  //   a small number of connections per company.

  const getResult = await fetch(
    `${codatBaseUrl}/companies/${codatCompanyId}/connections?page=1&pageSize=100`,
    {
      method: "GET",
      headers
    }
  );

  if (!getResult.ok) {
    throw new Error("Could not get connections");
  }
  
  const resultBody = await getResult.json();

  return resultBody.results;
}

exports.createCompany = createCompany;
exports.getConnections = getConnections;
