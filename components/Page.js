import { AppShell, Header } from "@mantine/core";
import Link from "next/link";

export default function Page({ children }) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          {/* Header content */}

          <Link href="/">Home</Link>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
