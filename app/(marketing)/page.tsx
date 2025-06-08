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
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このアプリケーションは、ユーザーが簡単に投稿を作成・管理できる便利なツールです。
            直感的なインターフェースと豊富な機能で、あなたのコンテンツ作成をサポートします。
          </p>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-12 max-w-[64rem]">
          {/* card 1 */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
                fill="#000000"
              >
                <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20l-26 37.5l13.4 18.4h-2.7L70.4 65L58.2 81.8h-2.6l13.5-18.4l-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8l-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8s-.8.3-.8.8s.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2c1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3c-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1c0-.7.6-1.2 1.6-1.2c.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2c-1.7 0-2.8.9-2.8 2.3c0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2c0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z" />
              </svg>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-semibold">Next.js</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Next.jsは、Reactベースのフレームワークで、サーバーサイドレンダリングや静的サイト生成などの機能を提供します。高速なパフォーマンスと優れた開発者体験を実現します。
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
                fill="#000000"
                className="w-full max-w-[45px]"
              >
                <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20l-26 37.5l13.4 18.4h-2.7L70.4 65L58.2 81.8h-2.6l13.5-18.4l-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8l-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8s-.8.3-.8.8s.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2c1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3c-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1c0-.7.6-1.2 1.6-1.2c.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2c-1.7 0-2.8.9-2.8 2.3c0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2c0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z" />
              </svg>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-semibold">Next.js</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Next.jsは、Reactベースのフレームワークで、サーバーサイドレンダリングや静的サイト生成などの機能を提供します。高速なパフォーマンスと優れた開発者体験を実現します。
                </p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
                fill="#000000"
              >
                <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20l-26 37.5l13.4 18.4h-2.7L70.4 65L58.2 81.8h-2.6l13.5-18.4l-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8l-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8s-.8.3-.8.8s.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2c1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3c-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1c0-.7.6-1.2 1.6-1.2c.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2c-1.7 0-2.8.9-2.8 2.3c0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2c0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z" />
              </svg>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-semibold">Next.js</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Next.jsは、Reactベースのフレームワークで、サーバーサイドレンダリングや静的サイト生成などの機能を提供します。高速なパフォーマンスと優れた開発者体験を実現します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
