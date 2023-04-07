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

const userFn = async (): Promise<string> => {
  const token: string = tokenStorage.getToken();
  const result: User = await getUserProfile(token);
  return result.username ?? null;
};

const loginFn = async (data: LoginCredentials): Promise<string> => {
  const response: AuthResponse = await loginWithEmailAndPassword(data);
  const access_token: string = response.access_token;
  const user: string = response.username;
  tokenStorage.setToken(access_token);
  return user;
};

const registerFn = async (data: RegisterCredentials): Promise<string> => {
  const user: User = await registerWithEmailAndPassword(data);
  return user.username ?? null;
};

const logoutFn = async () => {
  const token: string = tokenStorage.getToken();
  await logout(token);
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });
