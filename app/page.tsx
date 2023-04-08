"use client";

import { Container, Grid } from "@mantine/core";

import { Header } from "~/components/share/Header/Header";
import { MainPageAccordion } from "~/components/mainPage/Accordion";
import { MainPageMessageArea } from "~/components/mainPage/MessageArea";

const Home = () => {
  return (
    <Container fluid>
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
    </Container>
  );
};

export default Home;
