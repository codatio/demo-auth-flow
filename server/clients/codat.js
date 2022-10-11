import fetch from "node-fetch";
import { config } from "../config.js";

const apiKey = config.apiKey;
const codatBaseUrl = config.codatBaseUrl;

if (!apiKey) {
  throw new Error("You must have your Codat API key set as the environment variable CODAT_API_KEY");
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


export const createCompany = async (name) => {
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

export const getConnections = async (codatCompanyId) => {
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

export const getIntegrations = async () => {
  const getResult = await fetch(
    `${codatBaseUrl}/integrations?page=1&pageSize=100&query=enabled%3Dtrue%26%26sourceType%3Daccounting`,
    {
      method: "GET",
      headers
    }
  );

  if (!getResult.ok) {
    throw new Error("Could not get integrations");
  }

  const resultBody = await getResult.json();
  return resultBody.results;
}

export const createDataConnection = async (codatCompanyId, integrationKey) => {
  const postResult = await fetch(
    `${codatBaseUrl}/companies/${codatCompanyId}/connections`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(integrationKey)
    }
  );

  if (!postResult.ok) {
    throw new Error("Could not create connection");
  }

  const resultBody = await postResult.json();
  return resultBody;
}
