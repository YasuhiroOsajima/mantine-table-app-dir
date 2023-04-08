"use client";

import { PasswordInput, TextInput, Button, Box } from "@mantine/core";

import { RegisterCredentials, useRegister } from "~/components/authPage/auth";
import { useForm } from "~/components/authPage/useForm";

export const RegisterForm = () => {
  const register = useRegister();
  const { values, onChange } = useForm<RegisterCredentials>();

  return (
    <Box maw={320} mx="auto">
      Register
      <form
        title="Register"
        onSubmit={(e) => {
          e.preventDefault();
          register.mutate(values, {
            onSuccess: () => console.log("registered"),
          });
        }}
      >
        <TextInput
          placeholder="username"
          name="username"
          label="username"
          onChange={onChange}
        />
        <TextInput
          placeholder="email"
          name="email"
          type="email"
          onChange={onChange}
        />
        <TextInput
          placeholder="full_name"
          name="full_name"
          label="full_name"
          onChange={onChange}
        />
        <PasswordInput
          placeholder="password"
          name="password"
          label="password"
          withAsterisk
          onChange={onChange}
        />
        <Button disabled={register.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
