export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  departmentId: string;
};

export interface EmployeeList {
  employee: Employee[];
}
// http://127.0.0.1:3000/api/getEmployees
