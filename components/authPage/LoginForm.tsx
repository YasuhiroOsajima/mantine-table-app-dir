"use client";

import { PasswordInput, TextInput, Button, Box } from "@mantine/core";

import { LoginCredentials, useLogin } from "components/authPage/auth";
import { useForm } from "components/authPage/useForm";

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
        <TextInput label="Name" placeholder="Name" onChange={onChange} />
        <PasswordInput
          placeholder="Password"
          label="Password"
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
