"use client";

import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

import { Trash } from "tabler-icons-react";

import { Employee } from "types/employee";

type Props = {
  selectedRecords: Employee[];
};

export const Delete = (prop: Props) => {
  return (
    <Button
      uppercase
      leftIcon={<Trash size={16} />}
      color="red"
      disabled={!prop.selectedRecords.length}
      onClick={() =>
        showNotification({
          color: "red",
          message: "Deleting data is dangerous!",
        })
      }
    >
      Delete
    </Button>
  );
};
