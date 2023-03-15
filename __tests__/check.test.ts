import { GetEmployees } from "~/apiClient/getEmployees";

test("check", () => {
  const { data, isLoading, isError, error } = GetEmployees();
  console.log("OK");
});
