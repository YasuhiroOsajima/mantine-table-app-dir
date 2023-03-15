import { atom } from "recoil";

import { Employee } from "~/types/employee";

export const InitialEmployeeRecordsAtom = atom({
  key: "initialEmployeeRecords",
  default: <Employee[]>[],
});
