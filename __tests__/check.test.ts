//import rewire from "rewire";
const rewire = require('rewire');

const __local__ = rewire("../apiClient/getEmployees.ts");
//const __local__ = rewire("apiClient/getEmployees.ts");

test("check", () => {
  __local__.__get__("fetchEmployees");
  console.log("OK");
});
