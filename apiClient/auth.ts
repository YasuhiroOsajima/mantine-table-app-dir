import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { bool } from "yup";

import { tokenStorage } from "~/utils/storage";

export interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  id: string;
  name?: string;
}

//export async function handleApiResponse(response: Response) {
//  const data = await response.json();
//
//  if (response.ok) {
//    return data;
//  } else {
//    console.error(JSON.stringify(data, null, 2));
//    return Promise.reject(data);
//  }
//}

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
//export function getUserProfile(): Promise<{ user: User | undefined }> {
//  return fetch('/auth/me', {
//    headers: {
//      Authorization: storage.getToken(),
//    },
//  }).then(handleApiResponse);
//}

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
//export function loginWithEmailAndPassword(
//  data: unknown
//): Promise<AuthResponse> {
//  return fetch('/auth/login', {
//    method: 'POST',
//    body: JSON.stringify(data),
//  }).then(handleApiResponse);
//}

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
//export function registerWithEmailAndPassword(
//  data: unknown
//): Promise<AuthResponse> {
//  return fetch('/auth/register', {
//    method: 'POST',
//    body: JSON.stringify(data),
//  }).then(handleApiResponse);
//}

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
//export function logout(): Promise<{ message: string }> {
//  return axios.get("/auth/logout", { method: "POST" }).then(handleApiResponse);
//}
