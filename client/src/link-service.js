/**
 * Extracting out a "linkService" object allows us to
 *   separate our API calls from our components
 */
export const linkService = {
  login: (userName) => {
    return fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName }),
    })
    .then((res) => res.json())
  }
}
