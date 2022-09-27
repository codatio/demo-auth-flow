const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const baseUrl = 'http://localhost:3001';

const linkService = {
  apply: () =>
    fetch(`${baseUrl}/apply`, {
      method: 'POST',
      headers,
    }).then((res) => res.json()),
  /** 
   * Get all company connections
   */
  connections: (userId) =>
    fetch(`${baseUrl}/user/${userId}/connections`, {
      method: 'GET',
      headers,
    }).then((res) => res.json()),
  //Get all available integrations
  integrations: () =>
    fetch(`${baseUrl}/integrations`, {
      method: 'GET',
      headers,
    }).then((res) => res.json()),
  //Create a connection to an integration
  postConnection: (userId, integrationKey) =>
    fetch(`${baseUrl}/user/${userId}/connections/${integrationKey}`, {
      method: 'POST',
      headers,
    }).then((res) => res.json()),
};

export { linkService };
