import { allPosts } from "@/.contentlayer/generated";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Mdx from "@/components/mdx";

// Get post by slug
async function getPost(slug: string) {
  // slugAsParams is [slug]
  const post = allPosts.find((post) => post.slugAsParams === slug);

  // Return 404 error if post is not found
  if (!post) { return notFound() }

  return post;
};

// Blog post page
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {

  // Get slug from params
  const { slug } = await params;
  const post = await getPost(slug);

  // Render blog post page
  return (
    <article className="container max-w-3xl py-6 lg:py-10 mx-auto px-4 sm:px-6">
      {/* Post title and date */}
      <div className="text-center">
        {post.date && (
          <time>{format(post.date, 'yyyy-MM-dd')}</time>
        )}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {post.title}
        </h1>
      </div>

      {/* Post image */}
      <div className="mt-6 space-y-4 flex justify-center">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="my-8 rounded-md bg-muted"
            priority
          />
        )}
      </div>

      {/* Post content */}
      <Mdx code={post.body.code} />

      <hr className="my-12" />

      {/* Back to blog */}
      <div className="mt-6 space-y-4 flex justify-center">
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    </article >
  );
};
