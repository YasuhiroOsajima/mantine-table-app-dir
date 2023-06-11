"use client";

import { RecoilRoot } from "recoil";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AuthLoader } from "@/components/authPage/auth";
import { AuthScreen } from "@/components/authPage/AuthScreen";
import "./globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Todo.
// https://codefrontend.com/reactjs-redirect-to-url/
export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthLoader
        renderLoading={() => <div>Loading ...</div>}
        renderUnauthenticated={() => <AuthScreen />}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light", // lightかdark
            fontFamily: "Verdana, sans-serif",
          }}
        >
          <Notifications limit={2}>
            <RecoilRoot>{children}</RecoilRoot>
          </Notifications>
        </MantineProvider>
      </AuthLoader>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
