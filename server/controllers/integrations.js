const { getIntegrations } = require("../clients/codat");

const getEnabledIntegrations = async (req, res) => {
  const results = await getIntegrations();

  res.json(results);
};

exports.getEnabledIntegrations = getEnabledIntegrations;
