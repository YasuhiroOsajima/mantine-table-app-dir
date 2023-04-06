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

const handleTokenResponse = async (data: AuthResponse): Promise<string> => {
  const access_token: string = data.access_token;
  const user: string = data.username;
  tokenStorage.setToken(access_token);
  return user;
};

const userFn = async (): Promise<string> => {
  const result: User = await getUserProfile();
  return result.username ?? null;
};

const loginFn = async (data: LoginCredentials): Promise<string> => {
  const response: AuthResponse = await loginWithEmailAndPassword(data);
  const user: string = await handleTokenResponse(response);
  return user;
};

const registerFn = async (data: RegisterCredentials): Promise<string> => {
  const user: User = await registerWithEmailAndPassword(data);
  return user.username ?? null;
};

const logoutFn = async () => {
  await logout();
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });
