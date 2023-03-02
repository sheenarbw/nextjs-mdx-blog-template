import { AppShell, Header, Container, Title, Text } from "@mantine/core";
import Link from "next/link";

export default function Page({ children, title }) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Link href="/">Home</Link>
        </Header>
      }
    >
      <Container>
        <Title pb="lg">{title}</Title>
        {/* <Paper shadow="xs" p="md"> */}
        {children}
        {/* </Paper> */}
      </Container>
    </AppShell>
  );
}
