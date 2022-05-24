const fetch = require("node-fetch");

const apiKey = process.env.CODAT_API_KEY;
const codatBaseUrl = process.env.API_BASE_URL;

if (!apiKey) {
  throw new Error("You must have your Codat api key set as the environment variable CODAT_API_KEY");
}

if (!codatBaseUrl) {
  throw new Error("You must have your Codat base URL set as the environment variable API_BASE_URL");
}

const apiKeyBase64Encoded = Buffer.from(apiKey).toString("base64");
const authorisationHeader = "Basic " + apiKeyBase64Encoded;


const createCompany = async (name) => {
  const postResult = await fetch(
    `${codatBaseUrl}/companies`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authorisationHeader
      },
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
}

exports.createCompany = createCompany;
