"use client";

import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import { IconTrash } from "@tabler/icons-react";

import { Employee } from "@/types/employee";

type Props = {
  selectedRecords: Employee[];
};

export const Delete = (prop: Props) => {
  return (
    <Button
      uppercase
      leftIcon={<IconTrash size={16} />}
      color="red"
      disabled={!prop.selectedRecords.length}
      onClick={() =>
        notifications.show({
          color: "red",
          message: "Deleting data is dangerous!",
        })
      }
    >
      Delete
    </Button>
  );
};
