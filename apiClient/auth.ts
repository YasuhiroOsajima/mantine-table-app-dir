import axios from "axios";

const webserver = "http://127.0.0.1:8000";

// Request type
export interface tokenRequest {
  username: string;
  password: string;
}
export interface registerRequest {
  username: string;
  email: string;
  full_name: string;
  disabled: boolean;
  password: string;
}

// Response type
export interface AuthResponse {
  access_token: string;
  token_type: string;
  username: string;
}

export interface UserResponse {
  username: string;
  email: string;
  full_name: string;
  disabled: boolean;
}

// Register
export const registerWithEmailAndPassword = async (
  request: registerRequest
): Promise<UserResponse> => {
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

  const { data } = await axios.post(webserver + "/users", params, config);

  return data;
};

// Login
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

  const { data } = await axios.post(webserver + "/token", params, config);
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

  const { data } = await axios.delete(webserver + "/token", config);

  return data;
};

// Get profile for authenticated user.
export const getUserProfile = async (token: string): Promise<UserResponse> => {
  let config = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const { data } = await axios.get(webserver + "/users/me", config);
    return data;
  } catch (err) {
    console.log(err);
    return {
      username: "",
      email: "",
      full_name: "",
      disabled: false,
    };
  }
};
