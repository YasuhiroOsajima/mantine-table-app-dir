"use client";

import { PasswordInput, TextInput, Button, Box } from "@mantine/core";

import { RegisterCredentials, useRegister } from "components/authPage/auth";
import { useForm } from "components/authPage/useForm";

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
        <TextInput label="Name" placeholder="Name" onChange={onChange} />
        <PasswordInput
          placeholder="Password"
          label="Password"
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
