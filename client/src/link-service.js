const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const linkService = {
  login: (userName) =>
    fetch('/login', {
      method: 'POST',
      headers,
      body: JSON.stringify({ username: userName }),
    }).then((res) => res.json()),
  // Get all company connections
  connections: (userId) =>
    fetch(`/user/${userId}/connections`, {
      method: 'GET',
      headers,
    }).then((res) => res.json()),
  //Get all available integrations
  integrations: () =>
    fetch('/integrations', {
      method: 'GET',
      headers,
    }).then((res) => res.json()),
  //Create a connection to an integration
  postConnection: (userId, integrationKey) =>
    fetch(`/user/${userId}/connections/${integrationKey}`, {
      method: 'POST',
      headers,
    }).then((res) => res.json()),
};

export { linkService };
