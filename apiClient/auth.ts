import { useQuery } from "@tanstack/react-query";
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

export async function handleApiResponse(response: Response) {
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    console.error(JSON.stringify(data, null, 2));
    return Promise.reject(data);
  }
}


export function getUserProfile(): Promise<{ user: User | undefined }> {
  const { data } = axios.get("http://127.0.0.1:8000/users/me", {
    headers: {
      Authorization: tokenStorage.getToken(),
    },
  });
  data
}


export function loginWithEmailAndPassword(
  data: unknown
): Promise<AuthResponse> {
  return axios.get("http://127.0.0.1:8000/token", {
    method: "POST",
    body: JSON.stringify(data),
  }).then(handleApiResponse);
}

export function registerWithEmailAndPassword(
  data: unknown
): Promise<AuthResponse> {
  return axios.get("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  }).then(handleApiResponse);
}

export function logout(): Promise<{ message: string }> {
  return axios.get("/auth/logout", { method: "POST" }).then(handleApiResponse);
}
