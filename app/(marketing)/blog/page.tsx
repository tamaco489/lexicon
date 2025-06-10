import { allPosts } from "@/.contentlayer/generated";

export default function BlogPage() {
  const posts = allPosts;
  console.log('ログです', posts);

  return (
    <div></div>
  );
};