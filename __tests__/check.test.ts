import { fetchEmployees } from "~/apiClient/getEmployees";

test("check", async () => {
  const result = await fetchEmployees();
  console.log(result);
  console.log("OK");
});
