"use client";

import { useState } from "react";
import { Card, Drawer, Group, Text, Stack } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons";

export const Header = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Card shadow="sm" radius="md" withBorder className="h-20 bg-red-200 px-2">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Register"
          padding="xl"
          size="sm"
        >
          {/* Drawer content */}
        </Drawer>

        <Group position="center" className="pl-2">
          <Stack
            align="center"
            justify="center"
            spacing="xs"
            className="h-9 w-9 rounded hover:bg-red-300"
            onClick={() => setOpened(true)}
          >
            <IconMenu2 />
          </Stack>
          <Text>Application header</Text>
        </Group>
      </div>
    </Card>
  );
};
