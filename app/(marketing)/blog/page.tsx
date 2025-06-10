import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";

export default function BlogPage() {
  const posts = allPosts;
  console.log('ログです', posts);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">Blog🚀</h1>
          <p className="text-muted-foreground text-xl">Contentlayerで作成したブログです。</p>
        </div>
      </div>
      <hr className="my-8" />
      {posts.map((post, index) => (
        <div key={index} className="mb-8">
          {post.image && (
            <div className="relative w-full aspect-video mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-muted-foreground">{post.description}</p>
        </div>
      ))}
    </div>
  );
};
