"use client";

import { useRecoilState } from "recoil";
import { Card, Drawer, Group, Text, Stack } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons";

import { DrawerContent } from "./DrawerContent";
import { DrawerOpenAtom } from "state/DrawerOpenAtom";

type HeaderTitleProps = {
  title: string;
};

export const Header: React.FC<HeaderTitleProps> = ({ title }) => {
  const [opened, setOpened] = useRecoilState(DrawerOpenAtom);

  return (
    <Card shadow="sm" radius="md" withBorder className="h-15 bg-red-200 px-2">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Menu"
          padding="xl"
          size="sm"
        >
          <DrawerContent />
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
          <Text>{title}</Text>
        </Group>
      </div>
    </Card>
  );
};
