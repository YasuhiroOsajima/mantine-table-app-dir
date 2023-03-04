import { atom } from "recoil";

import { Employee } from "types/data";

export const AllEmployeeRecordsAtom = atom({
  key: "allEmployeeRecords",
  default: <Employee[]>[],
});
