const linkService = {
  login: (userName) =>
    fetch('/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName }),
    }).then((res) => res.json()),
  // Get all company connections
  connections: (userId) =>
    fetch(`/user/${userId}/connections`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json()),
};

export { linkService };
