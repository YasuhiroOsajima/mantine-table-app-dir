// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { EmployeeRecords } from "types/data";

const employees = [
  {
    id: "7eb6a5c3-d38f-4725-a429-1ef36354d5bf",
    firstName: "Betty",
    lastName: "Sawayn",
    email: "Betty61@hotmail.com",
    birthDate: "1944-12-24T10:17:45.950Z",
    departmentId: "7b9cafc8-439c-440e-8f5b-7c56fe6df7fd",
  },
  {
    id: "d6d20897-b14e-4773-9f7e-b7bc8529976e",
    firstName: "Ottilie",
    lastName: "Stamm",
    email: "Ottilie_Stamm52@gmail.com",
    birthDate: "1977-07-25T06:07:28.946Z",
    departmentId: "66517939-2c99-4a69-ab24-db849ac0db7c",
  },
  {
    id: "ac4436df-e8f4-48ff-ac9c-4702a24fef99",
    firstName: "Kayla",
    lastName: "Roberts",
    email: "Kayla62@gmail.com",
    birthDate: "1998-03-26T13:33:05.657Z",
    departmentId: "6660e2d1-dba9-4bcb-aa85-86fca5da11a1",
  },
];

const handler = (req: NextApiRequest, res: NextApiResponse<EmployeeRecords>) => {
  console.log("access");
  res.status(200).json({ records: employees });
};

export default handler;
