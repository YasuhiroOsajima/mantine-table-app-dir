"use client";

import { PasswordInput, TextInput, Button, Box } from "@mantine/core";

import { LoginCredentials, useLogin } from "~/components/authPage/auth";
import { useForm } from "~/components/authPage/useForm";

export const LoginForm = () => {
  const login = useLogin();
  const { values, onChange } = useForm<LoginCredentials>();

  return (
    <Box maw={320} mx="auto">
      Login
      <form
        title="Login"
        onSubmit={(e) => {
          e.preventDefault();
          login.mutate(values);
        }}
      >
        <TextInput
          placeholder="username"
          name="username"
          label="username"
          onChange={onChange}
        />
        <PasswordInput
          placeholder="password"
          name="password"
          label="password"
          withAsterisk
          onChange={onChange}
        />
        <Button disabled={login.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
