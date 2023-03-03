import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "/.contentlayer/generated";
import Page from "../../components/Page";
import { Text } from "@mantine/core";
import FormattedDate from "../../components/Date";

export default function Blog({ post }) {
  const Component = useMDXComponent(post.body.code);
  return (
    <Page title={post.title}>
      <Text c="dimmed">
        <FormattedDate date={post.date} />
      </Text>
      <Component />
    </Page>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
}
