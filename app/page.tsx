"use client";

import type { NextPage } from "next";
import { Grid } from "@mantine/core";

import { Header } from "~/components/share/Header/Header";
import { MainPageAccordion } from "~/components/mainPage/Accordion";
import { MainPageMessageArea } from "~/components/mainPage/MessageArea";

const Home: NextPage = () => {
  return (
    <>
      <Grid className="pb-1">
        <Grid.Col span={12}>
          <Header title="Main page" />
        </Grid.Col>
      </Grid>

      <Grid className="pl-1 pr-1">
        <Grid.Col span={12}>
          <MainPageMessageArea />
        </Grid.Col>
        <Grid.Col span={12}>
          <MainPageAccordion />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
