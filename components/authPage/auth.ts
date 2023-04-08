import { configureAuth } from "react-query-auth";

import {
  getUserProfile,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
  AuthResponse,
  UserResponse,
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

const registerFn = async (data: RegisterCredentials): Promise<string> => {
  const user: UserResponse = await registerWithEmailAndPassword(data);
  return user.username ?? null;
};

const loginFn = async (data: LoginCredentials): Promise<string> => {
  const response: AuthResponse = await loginWithEmailAndPassword(data);
  const access_token: string = response.access_token;
  const username: string = response.username;
  tokenStorage.setToken(access_token);
  return username;
};

const logoutFn = async (): Promise<void> => {
  const token: string = tokenStorage.getToken();
  await logout(token);
};

const userFn = async (): Promise<string> => {
  const token: string = tokenStorage.getToken();
  const result: UserResponse = await getUserProfile(token);
  return result.username ?? null;
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn: userFn,
    loginFn: loginFn,
    registerFn: registerFn,
    logoutFn: logoutFn,
  });
