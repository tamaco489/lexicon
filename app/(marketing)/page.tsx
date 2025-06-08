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
        {/* content description */}
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このアプリケーションは、ユーザーが簡単に投稿を作成・管理できる便利なツールです。
            直感的なインターフェースと豊富な機能で、あなたのコンテンツ作成をサポートします。
          </p>
        </div>

        {/* feature cards */}
        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mt-12 max-w-[64rem]">
          {/* Next.js */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 512 512"
                fill="#000000"
              >
                <path fill="#000000" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z" />
              </svg>
              <div className="space-y-4 overflow-hidden">
                <h3 className="font-semibold text-lg">Next.js</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  Next.js is a React-based framework that provides features such as server-side rendering and static site generation. It delivers high performance and an excellent developer experience.
                </p>
              </div>
            </div>
          </div>

          {/* React.js */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path fill="#000000" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.345-.034c-.46 0-.915.01-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.782-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034c.46 0 .915-.01 1.36-.034c-.44.572-.895 1.095-1.345 1.565c-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-semibold">React.js</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  React.js is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of their applications. With its virtual DOM and component-based architecture, React provides excellent performance and maintainability.
                </p>
              </div>
            </div>
          </div>

          {/* PlanetScale */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
                fill="#000000"
              >
                <path d="M256 128.044c-.024 70.657-57.299 127.932-127.956 127.956ZM128 0c51.977 0 96.719 30.98 116.765 75.483L75.483 244.765a127.791 127.791 0 0 1-20.636-11.715L159.897 128H128l-90.51 90.51C14.327 195.345 0 163.345 0 128C0 57.308 57.308 0 128 0Z" />
              </svg>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-semibold">PlanetScale</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  PlanetScale is a cloud-based database service that provides a scalable and reliable database solution for modern applications. It offers a flexible pricing model and seamless integration with popular development tools.
                </p>
              </div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path fill="#000000" d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51z" />
              </svg>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-semibold">Tailwind CSS</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes for styling HTML elements. It allows developers to build responsive and customizable web applications with minimal custom CSS.
                </p>
              </div>
            </div>
          </div>

          {/* OAuth */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path fill="#000000" d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58l2.343 7.45l-6.157-4.597l-6.158 4.58l2.358-7.433l-6.188-4.55l7.63-.045L12.008 0l2.356 7.404l7.615.044z" />
              </svg>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-semibold">OAuth</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  OAuth is an open standard for authorization that allows users to grant access to their resources to third-party applications without sharing their credentials. It provides a secure and flexible way to authenticate users across different platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Stripe */}
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 min-h-[160px] max-h-[200px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path fill="#000000" fill-rule="evenodd" d="M1 1h22v22H1V1Zm10.12 8.19c0-.604.494-.836 1.314-.836c1.174 0 2.658.356 3.833.99V5.71c-1.283-.509-2.55-.71-3.833-.71c-3.138 0-5.225 1.639-5.225 4.375c0 4.266 5.874 3.586 5.874 5.425c0 .711-.619.943-1.484.943c-1.283 0-2.922-.525-4.22-1.236v3.679c1.437.618 2.89.88 4.22.88c3.215 0 5.426-1.591 5.426-4.358c-.016-4.607-5.905-3.788-5.905-5.519Z" />
              </svg>
              <div className="space-y-2 overflow-hidden">
                <h3 className="font-semibold">Stripe</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  Stripe is a payment processing platform that allows businesses to accept payments online. It provides a comprehensive suite of tools for managing payments, subscriptions, and fraud prevention.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ? */}
        {/* <div>
          <p>Post writerは、ユーザーが簡単に投稿を作成・管理できる便利なツールです。</p>
        </div> */}
      </section>
    </div>
  );
};
