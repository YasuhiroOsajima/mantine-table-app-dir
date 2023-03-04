import { useQuery } from "react-query";
import axios from "axios";

import { EmployeeRecords } from "types/data";

const fetchEmployees = async () => {
  const { data } = await axios.get("http://127.0.0.1:3000/api/getEmployees");
  return data;
};

export const GetEmployees = () => {
  return useQuery<EmployeeRecords>({
    queryKey: ["GetEmployees"],
    queryFn: fetchEmployees,
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });
};
