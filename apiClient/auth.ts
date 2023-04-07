import axios from "axios";

export interface AuthResponse {
  access_token: string;
  token_type: string;
  username: string;
}

export interface User {
  username: string;
  email: string;
  full_name: string;
  disabled: boolean;
}

// Get profile
export const getUserProfile = async (token: string): Promise<User> => {
  let config = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const { data } = await axios.get("http://127.0.0.1:8000/users/me", config);
  return data;
};

// Login
export interface tokenRequest {
  username: string;
  password: string;
}

export const loginWithEmailAndPassword = async (
  request: tokenRequest
): Promise<AuthResponse> => {
  const params = new URLSearchParams();
  params.append("username", request.username);
  params.append("password", request.password);

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

// Register
export interface registerRequest {
  username: string;
  email: string;
  full_name: string;
  disabled: boolean;
  password: string;
}

export const registerWithEmailAndPassword = async (
  request: registerRequest
): Promise<User> => {
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

// Logout
export const logout = async (token: string) => {
  let config = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const { data } = await axios.delete("http://127.0.0.1:8000/token", config);

  return data;
};
