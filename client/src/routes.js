const routes = {
  dashboard: (userId) => `/${userId}/dashboard`,
  login: '/login',
  loanForm: (userId) => `/${userId}/loan-form`,
  redirect: '/redirect'
}

export { routes }