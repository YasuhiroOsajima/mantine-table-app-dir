"use client";

import type { NextPage } from "next";
import { Grid } from "@mantine/core";

import { TablepageTable } from "~/components/Tablepage/Table";
import { MessageArea } from "components/MessageArea";

const Home: NextPage = () => {
  return (
    <Grid gutter="xs">
      <Grid.Col span={8}>
        <TablepageTable />
      </Grid.Col>
      <Grid.Col span={4}>
        <MessageArea />
      </Grid.Col>
    </Grid>
  );
};

export default Home;
