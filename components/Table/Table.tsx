"use client";

import { useEffect, useState } from "react";
import { Box, Card, TextInput, Group } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import dayjs from "dayjs";
import { Search } from "tabler-icons-react";

import { Create } from "components/Table/Create";
import { Delete } from "components/Table/Delete";
import { GetEmployees } from "apiClient/getEmployees";
import { Employee } from "types/data";

const PAGE_SIZE = 14;

export const Table = () => {
  const [initialRecords, setInitialRecords] = useState<Employee[]>([]);
  const [allRecords, setAllRecords] = useState<Employee[]>([]);

  const { data, isLoading, isError, error } = GetEmployees();
  useEffect(() => {
    if (data !== undefined) {
      setInitialRecords(data.employee);
      setAllRecords(data.employee);
    }
  }, [data]);

  // Filter
  const [filteredRecords, setFilteredRecords] = useState(initialRecords);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setFilteredRecords(
      initialRecords.filter(({ firstName, email }) => {
        if (
          debouncedQuery !== "" &&
          !`${firstName} ${email}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery, initialRecords]);

  // Pagination
  const [page, setPage] = useState(1);
  const [paginatedRecords, setPaginatedRecords] = useState(filteredRecords);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setPaginatedRecords(filteredRecords.slice(from, to));
  }, [filteredRecords, page]);

  // Sort
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: "firstName",
    direction: "asc",
  });
  const [viewRecords, setViewRecords] = useState(
    sortBy(paginatedRecords, "firstName")
  );

  useEffect(() => {
    setViewRecords(paginatedRecords);
  }, [paginatedRecords]);

  const handleSortStatusChange = (status: DataTableSortStatus) => {
    setPage(1);
    setSortStatus(status);
  };

  useEffect(() => {
    const sortedRecords = sortBy(allRecords, sortStatus.columnAccessor);
    setInitialRecords(
      sortStatus.direction === "desc" ? sortedRecords.reverse() : sortedRecords
    );
  }, [allRecords, sortStatus]);

  // Select
  const [selectedRecords, setSelectedRecords] = useState<Employee[]>([]);

  if (isLoading) {
    return (
      <Card shadow="sm" radius="md" withBorder className="h-full pl-2 pr-2">
        Loading...
      </Card>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <Card shadow="sm" radius="md" withBorder className="h-full pl-2 pr-2">
        Remote API fetch error...
      </Card>
    );
  }

  return (
    <>
      <Card shadow="sm" radius="md" withBorder className="h-full">
        <Group position="left" mb="md">
          <TextInput
            sx={{ flexBasis: "60%" }}
            placeholder="Search employees..."
            icon={<Search size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
          <Create></Create>
          <Delete selectedRecords={selectedRecords}></Delete>
        </Group>

        <Box sx={{ height: 600 }}>
          <DataTable
            withBorder
            columns={[
              {
                accessor: "firstName",
                sortable: true,
                render: ({ firstName }) => `${firstName}`,
              },
              { accessor: "email", sortable: true },
              { accessor: "departmentId", sortable: true },
              {
                accessor: "birthDate",
                render: ({ birthDate }) =>
                  dayjs(birthDate).format("MMM DD YYYY"),
              },
              {
                accessor: "age",
                sortable: true,
                render: ({ birthDate }) => dayjs().diff(birthDate, "y"),
              },
            ]}
            records={viewRecords}
            totalRecords={initialRecords.length}
            recordsPerPage={PAGE_SIZE}
            page={page}
            onPageChange={(p) => setPage(p)}
            sortStatus={sortStatus}
            onSortStatusChange={handleSortStatusChange}
            selectedRecords={selectedRecords}
            onSelectedRecordsChange={setSelectedRecords}
          />
        </Box>
      </Card>
    </>
  );
};
