const { getIntegrations } = require("../clients/codat");

const getPlatforms = async(req, res) => {
  const results = await getIntegrations();

  res.json(results);
}

exports.getPlatforms = getPlatforms;
