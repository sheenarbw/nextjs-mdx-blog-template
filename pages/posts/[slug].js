import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "/.contentlayer/generated";
import Page from "../../components/Page";

export default function Blog({ post }) {
  const Component = useMDXComponent(post.body.code);
  return (
    <Page>
      <Component />
    </Page>
  );
}

export async function getStaticPaths() {
  console.log();
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
}
