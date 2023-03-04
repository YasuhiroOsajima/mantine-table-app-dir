"use client";

import React from "react";
import { Card, Text } from "@mantine/core";

type MessageAreaProps = {
  title: string;
  message: string;
};

export const MessageArea: React.FC<MessageAreaProps> = ({ title, message }) => {
  const text = message.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.match(/\n/) ? <br /> : item}
      </React.Fragment>
    );
  });

  return (
    <Card shadow="sm" radius="md" withBorder className="h-full">
      <Card.Section>
        <Text className="p-2">{title}</Text>
      </Card.Section>

      <Text size="sm" color="dimmed" className="grow">
        {text}
      </Text>
    </Card>
  );
};
