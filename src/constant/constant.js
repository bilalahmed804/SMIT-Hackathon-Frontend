export const BASE_URL = process.env.VITE_DEVURL;

export const AppRoutes = {
  register: BASE_URL + "api/users/register",
  login: BASE_URL + "api/users/login",
  loanapply : BASE_URL + "api/users/loanform",
}

