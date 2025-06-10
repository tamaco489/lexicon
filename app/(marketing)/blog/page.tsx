import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

export default function BlogPage() {
  const posts = allPosts;

  return (
    <div className="container max-w-4xl py-6 lg:py-10 mx-auto">
      <div>
        <div className="space-y-4 text-center">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">Blog🚀</h1>
          <p className="text-muted-foreground text-xl">A blog created with Contentlayer.</p>
        </div>
      </div>
      <hr className="my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <article key={index} className="mb-8 p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
            {post.image && (
              <div className="relative w-full aspect-video mb-4">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
            )}
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-muted-foreground">{post.description}</p>
            <p className="text-muted-foreground">{post.author}</p>
            <p className="text-muted-foreground">{format(post.date, 'yyyy-MM-dd')}</p>

            <Link href={`/blog/${post.slug}`} className="absolute inset-0"></Link>
          </article>
        ))}
      </div>
    </div>
  );
};
