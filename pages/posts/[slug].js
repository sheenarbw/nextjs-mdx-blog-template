import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "/.contentlayer/generated";

export default function Blog({ post }) {
  console.log(post);
  const Component = useMDXComponent(post.body.code);

  return <Component />;
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
