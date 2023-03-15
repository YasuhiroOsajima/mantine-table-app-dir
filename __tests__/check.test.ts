import { loginWithEmailAndPassword } from "~/apiClient/auth";

test("check", async () => {
  const result = await loginWithEmailAndPassword();
  console.log(result.access_token);
  console.log(result.token_type);
  console.log(result.user);
});
