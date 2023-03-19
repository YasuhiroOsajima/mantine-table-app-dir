import { loginWithEmailAndPassword } from "~/apiClient/auth";

test("check", async () => {
  const username = "testuser";
  const password = "password";
  const result = await loginWithEmailAndPassword({ username, password });
  console.log(result.access_token);
  console.log(result.token_type);
  console.log(result.username);
});
