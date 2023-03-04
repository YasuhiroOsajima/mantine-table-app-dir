"use client";

import { Card, Text } from "@mantine/core";

export function MessageArea() {
  return (
    <Card shadow="sm" radius="md" withBorder className="h-full">
      <Card.Section>
        <Text className="p-2">TEST</Text>
      </Card.Section>

      <Text size="sm" color="dimmed" className="grow">
        Test text.
      </Text>
    </Card>
  );
}
