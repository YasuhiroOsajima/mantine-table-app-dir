import { atom } from "recoil";

import { Employee } from "types/data";

export const InitialEmployeeRecordsAtom = atom({
  key: "initialEmployeeRecords",
  default: <Employee[]>[],
});
