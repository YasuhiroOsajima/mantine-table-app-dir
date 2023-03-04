"use client";

import type { NextPage } from "next";
import { Grid } from "@mantine/core";

import { Header } from "components/share/Header/Header";
import { TablepageTable } from "components/tablePage/Table";
import { MessageArea } from "components/tablePage/MessageArea";

const Home: NextPage = () => {
  return (
    <>
      <Grid className="pb-1">
        <Grid.Col span={12}>
          <Header title="Table page" />
        </Grid.Col>
      </Grid>
      <Grid gutter="xs">
        <Grid.Col span={8}>
          <TablepageTable />
        </Grid.Col>
        <Grid.Col span={4}>
          <MessageArea />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
