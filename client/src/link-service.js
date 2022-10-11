const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const linkService = {
  apply: () =>
    fetch(`/apply`, {
      method: "POST",
      headers,
    }).then((res) => res.json()),
  connections: (userId) =>
    fetch(`/user/${userId}/connections`, {
      method: "GET",
      headers,
    }).then((res) => res.json()),
  integrations: () =>
    fetch(`/integrations`, {
      method: "GET",
      headers,
    }).then((res) => res.json()),
  postConnection: (userId, integrationKey) =>
    fetch(`/user/${userId}/connections/${integrationKey}`, {
      method: "POST",
      headers,
    }).then((res) => res.json()),
};

export { linkService };
