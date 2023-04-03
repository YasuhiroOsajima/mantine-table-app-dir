import { configureAuth } from "react-query-auth";

import {
  getUserProfile,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
  AuthResponse,
  User,
} from "~/apiClient/auth";
import { tokenStorage } from "~/utils/storage";

export type LoginCredentials = {
  username: string;
  password: string;
};

export type RegisterCredentials = {
  username: string;
  email: string;
  full_name: string;
  disabled: boolean;
  password: string;
};

async function handleTokenResponse(data: AuthResponse) {
  const access_token = data.access_token;
  const user = data.username;
  tokenStorage.setToken(access_token);
  return user;
}

async function userFn() {
  const result: User = await getUserProfile();
  return result.username ?? null;
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleTokenResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  const response = await registerWithEmailAndPassword(data);
  //const user = await handleTokenResponse(response);
  //return user;
  return response.username ?? null;
}

async function logoutFn() {
  await logout();
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });
