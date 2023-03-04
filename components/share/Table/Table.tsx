"use client";

import { useEffect, useState } from "react";
import { useRecoilState, RecoilState } from "recoil";
import { UseQueryResult } from "react-query";
import { Box, Card, TextInput, Group } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import { Search } from "tabler-icons-react";

import { Create } from "components/share/Table/Create";
import { Delete } from "components/share/Table/Delete";

const PAGE_SIZE = 14;

type ColumnProps = {
  accessor: string;
  sortable?: boolean;
  render?: ({ arg }: any) => any;
};

type GetRecordsResultProps = {
  data: { records: any };
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

type Props = {
  initialRecordsAtom: RecoilState<any[]>;
  allRecordsAtom: RecoilState<any[]>;
  initialSortColumn: string;
  columns: ColumnProps[];
  getRecordsResult: GetRecordsResultProps;
};

export const Table: React.FC<Props> = ({
  initialRecordsAtom,
  allRecordsAtom,
  initialSortColumn,
  columns,
  getRecordsResult,
}) => {
  const [initialRecords, setInitialRecords] =
    useRecoilState(initialRecordsAtom);
  const [allRecords, setAllRecords] = useRecoilState(allRecordsAtom);

  const { data, isLoading, isError, error } = getRecordsResult;

  useEffect(() => {
    setInitialRecords(data.records);
    setAllRecords(data.records);
  }, [data, setAllRecords, setInitialRecords]);

  // Filter
  const [filteredRecords, setFilteredRecords] = useState(initialRecords);
  const [updatedFilterWord, setFilterWord] = useState("");
  const [filterWord] = useDebouncedValue(updatedFilterWord, 200);

  useEffect(() => {
    setFilteredRecords(
      initialRecords.filter(({ firstName, email }) => {
        if (
          filterWord !== "" &&
          !`${firstName} ${email}`
            .toLowerCase()
            .includes(filterWord.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [filterWord, initialRecords]);

  // Pagination
  const [page, setPage] = useState(1);
  const [paginatedRecords, setPaginatedRecords] = useState(filteredRecords);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setPaginatedRecords(filteredRecords.slice(from, to));
  }, [filteredRecords, page]);

  // Sort
  const [sortedRecords, setSortedRecords] = useState(
    sortBy(paginatedRecords, initialSortColumn)
  );

  useEffect(() => {
    setSortedRecords(paginatedRecords);
  }, [paginatedRecords]);

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: initialSortColumn,
    direction: "asc",
  });
  const handleSortStatusChange = (status: DataTableSortStatus) => {
    setPage(1);
    setSortStatus(status);
  };

  useEffect(() => {
    const sortedRecords = sortBy(allRecords, sortStatus.columnAccessor);
    setInitialRecords(
      sortStatus.direction === "desc" ? sortedRecords.reverse() : sortedRecords
    );
  }, [allRecords, setInitialRecords, sortStatus]);

  // Select
  const [selectedRecords, setSelectedRecords] = useState<any[]>([]);

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
            placeholder="Search by"
            icon={<Search size={16} />}
            value={updatedFilterWord}
            onChange={(e) => setFilterWord(e.currentTarget.value)}
          />
          <Create></Create>
          <Delete selectedRecords={selectedRecords}></Delete>
        </Group>

        <Box sx={{ height: 600 }}>
          <DataTable
            withBorder
            columns={columns}
            records={sortedRecords}
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
