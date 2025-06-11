import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // 子要素で meda-data を追加で設定するためのテンプレートの設定 ※ `%s` に子要素のメタデータが入る
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
  authors: [{
    name: "tamaco",
    url: "https://x.com/tamaco"
  }],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [`${siteConfig.url}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-background antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
