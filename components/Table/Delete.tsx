"use client";

import { FC } from "react";
import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

import { Trash } from "tabler-icons-react";

import { Employee } from "types/data";

type Props = {
  selectedRecords: Employee[];
};

export const Delete: FC<Props> = (prop) => {
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
