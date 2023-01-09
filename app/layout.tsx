import { App } from "app/wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head />
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
