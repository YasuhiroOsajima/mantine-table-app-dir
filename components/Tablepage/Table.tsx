"use client";

import dayjs from "dayjs";

import { InitialEmployeeRecordsAtom } from "~/state/InitialEmployeeRecordsAtom";
import { AllEmployeeRecordsAtom } from "~/state/AllEmployeeRecordsAtom";

import { Table } from "components/Table/Table";
import { GetEmployees } from "apiClient/getEmployees";

type firstNameProps = {
  firstName: string;
};

type birthDateProps = {
  birthDate: string;
};

type ageProps = {
  birthDate: string;
};

export const TablepageTable = () => {
  const columns = [
    {
      accessor: "firstName",
      sortable: true,
      render: ({ firstName }: firstNameProps) => `${firstName}`,
    },
    { accessor: "email", sortable: true },
    { accessor: "departmentId", sortable: true },
    {
      accessor: "birthDate",
      render: ({ birthDate }: birthDateProps) =>
        dayjs(birthDate).format("MMM DD YYYY"),
    },
    {
      accessor: "age",
      sortable: true,
      render: ({ birthDate }: ageProps) => dayjs().diff(birthDate, "y"),
    },
  ];

  return (
    <>
      <Table
        initialRecordsAtom={InitialEmployeeRecordsAtom}
        allRecordsAtom={AllEmployeeRecordsAtom}
        initialSortColumn="firstName"
        GetRecords={GetEmployees}
        columns={columns}
      />
    </>
  );
};
