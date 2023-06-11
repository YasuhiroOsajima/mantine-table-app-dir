import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Employees } from "@/types/employee";

export const fetchEmployees = async () => {
  const { data } = await axios.get("http://127.0.0.1:3000/api/getEmployees");
  return data;
};

export const GetEmployees = () => {
  return useQuery<Employees>({
    queryKey: ["GetEmployees"],
    queryFn: fetchEmployees,
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchInterval: 60000,
  });
};
