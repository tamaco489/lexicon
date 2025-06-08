import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-4">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-2 rounded-2xl font-medium text-sm"
          >
            Xをフォローする
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">post writer</h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.js AppRouterで作られたものです。
            ユーザは自由に投棄王をpostすることができます。
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "lg", variant: "default" }), "w-fit")}
          >
            はじめる
          </Link>
          <Link
            href={siteConfig.links.github}
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-fit")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
      </section>
    </div>
  );
}
