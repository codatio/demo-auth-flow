const routes = {
  dashboard: (userId) => `/${userId}/dashboard`,
  login: '/login',
  loanForm: (userId) => `/${userId}/loan-form`,
};

export { routes };
