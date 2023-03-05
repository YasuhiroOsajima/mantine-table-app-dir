"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { Button } from "@mantine/core";

import { LoginForm } from "components/authPage/LoginForm";
import { RegisterForm } from "components/authPage/RegisterForm";

const Auth: NextPage = () => {
  const [mode, setMode] = useState<"register" | "login">("register");

  return (
    <div>
      {mode === "login" && (
        <>
          <LoginForm />
          <Button onClick={() => setMode("register")}>Register</Button>
        </>
      )}
      {mode === "register" && (
        <>
          <RegisterForm />
          <Button onClick={() => setMode("login")}>Login</Button>
        </>
      )}
    </div>
  );
};

export default Auth;
