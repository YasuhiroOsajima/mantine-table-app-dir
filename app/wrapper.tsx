"use client";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Grid } from "@mantine/core";

import { Header } from "components/Header";

import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light", // lightかdark
          fontFamily: "Verdana, sans-serif",
        }}
      >
        <NotificationsProvider limit={2}>
          <Grid className="pb-1">
            <Grid.Col span={12}>
              <Header />
            </Grid.Col>
          </Grid>
          {children}
        </NotificationsProvider>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
