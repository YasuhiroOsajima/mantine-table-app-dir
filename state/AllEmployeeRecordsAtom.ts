import { atom } from "recoil";

import { Employee } from "~/types/employee";

export const AllEmployeeRecordsAtom = atom({
  key: "allEmployeeRecords",
  default: <Employee[]>[],
});
