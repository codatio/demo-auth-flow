const routes = {
  home: "/home",
  dashboard: (userId) => `/${userId}/dashboard`,
  loanForm: (userId) => `/${userId}/loan-form`,
  redirect: "/redirect",
};

export { routes };
