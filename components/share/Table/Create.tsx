"use client";

import { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { IconTool } from "@tabler/icons-react";

export const Create = () => {
  const [createOpened, setCreateOpened] = useState(false);

  return (
    <>
      <Modal
        opened={createOpened}
        onClose={() => setCreateOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>

      <Button
        uppercase
        leftIcon={<IconTool size={16} />}
        color="blue"
        onClick={() => setCreateOpened(true)}
      >
        Create
      </Button>
    </>
  );
};
