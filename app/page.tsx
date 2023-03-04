"use client";

import type { NextPage } from "next";
import { Grid } from "@mantine/core";
import { Accordion } from "@mantine/core";

import { Header } from "components/share/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Grid className="pb-1">
        <Grid.Col span={12}>
          <Header title="Main page" />
        </Grid.Col>
      </Grid>

      <Accordion defaultValue="customization">
        <Accordion.Item value="customization">
          <Accordion.Control>Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Home;
