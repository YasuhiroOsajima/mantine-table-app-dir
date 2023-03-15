import axios from "axios";

import { tokenStorage } from "~/utils/storage";

export interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  id: string;
  name?: string;
}

export interface profile {
  username: string;
  email: string;
  full_name: string;
  disabled: boolean;
}

export const getUserProfile = async (): Promise<profile> => {
  let config = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + tokenStorage.getToken(),
    },
  };

  const { data } = await axios.get("http://127.0.0.1:8000/users/me", config);
  return data;
};

export interface Token {
  access_token: string;
  token_type: string;
  user: string;
}

export const loginWithEmailAndPassword = async (): Promise<Token> => {
  const params = new URLSearchParams();
  params.append("username", "testuser");
  params.append("password", "password");

  let config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const { data } = await axios.post(
    "http://127.0.0.1:8000/token",
    params,
    config
  );
  return data;
};

export interface registerRequest {
  username: string;
  email: string;
  full_name: string;
  disabled: boolean;
  password: string;
}

export interface register {
  username: string;
  email: string;
  full_name: string;
  disabled: boolean;
}

export const registerWithEmailAndPassword = async (
  request: registerRequest
): Promise<register> => {
  let config = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  };

  let params = {
    username: request.username,
    email: request.email,
    full_name: request.full_name,
    disabled: request.disabled,
    password: request.password,
  };

  const { data } = await axios.post(
    "http://127.0.0.1:8000/users",
    params,
    config
  );

  return data;
};

export const logout = async () => {
  let config = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + tokenStorage.getToken(),
    },
  };

  const { data } = await axios.delete("http://127.0.0.1:8000/token", config);

  return data;
};
