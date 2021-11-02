import { LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_ERROR } from "./constants";

export const requestLogin = (body) => ({
  type: LOGIN_REQUEST,
  body,
});
export const requestLoginError = () => ({
  type: LOGIN_ERROR,
});

export const requestLogout = () => ({
  type: LOGOUT_REQUEST,
});
