import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center">
      {/* hero section */}
      <section id="hero" className="w-full pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-4">
          {/* xフォロー */}
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-2 rounded-2xl font-medium text-sm"
          >
            Xをフォローする
          </Link>

          {/* タイトル */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">post writer</h1>

          {/* 説明 */}
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.js AppRouterで作られたものです。ユーザは自由に投稿をpostすることができます。
          </p>
        </div>

        {/* ボタン */}
        <div className="flex flex-row items-center justify-center gap-4 mt-8">
          {/* はじめる */}
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "lg", variant: "default" }), "w-fit")}
          >
            はじめる
          </Link>

          {/* github */}
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

      {/* feature section */}
      <section id="features" className="container py-8 md:py-12 bg-slate-50">
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このアプリケーションは、ユーザーが簡単に投稿を作成・管理できる便利なツールです。
            直感的なインターフェースと豊富な機能で、あなたのコンテンツ作成をサポートします。
          </p>
        </div>
      </section>
    </div>
  );
};
