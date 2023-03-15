"use client";

import dayjs from "dayjs";

import { InitialEmployeeRecordsAtom } from "~/state/InitialEmployeeRecordsAtom";
import { AllEmployeeRecordsAtom } from "~/state/AllEmployeeRecordsAtom";

import { Table } from "~/components/share/Table/Table";
import { GetEmployees } from "~/apiClient/getEmployees";
import { Employee } from "~/types/employee";

type firstNameProps = {
  firstName: string;
};

type birthDateProps = {
  birthDate: string;
};

type ageProps = {
  birthDate: string;
};

export const TablePageTable = () => {
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

  const getEmployeeRecords = () => {
    const { data, isLoading, isError, error } = GetEmployees();

    var records: Employee[] = [];
    if (data !== undefined) {
      records = data.employees;
    }

    return { data: { records }, isLoading, isError, error };
  };

  return (
    <>
      <Table
        initialRecordsAtom={InitialEmployeeRecordsAtom}
        allRecordsAtom={AllEmployeeRecordsAtom}
        initialSortColumn="firstName"
        getRecordsResult={getEmployeeRecords()}
        columns={columns}
      />
    </>
  );
};
