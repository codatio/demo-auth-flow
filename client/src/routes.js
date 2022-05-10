/**
 * Adding in a routes object that is shared means we
 * don't have to keep specifying the same route strings
 * over and over again
 */
export const routes = {
  dashboard: (userId) => `/${userId}/dashboard`,
  login: "/login"
};
