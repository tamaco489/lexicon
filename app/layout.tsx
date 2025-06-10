import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

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

// Noto Sans JPフォントの設定
// - weight: フォントの太さを 400 (Regular) と 700 (Bold) に設定
// - subsets: ラテン文字のサブセットを使用
// - preload: フォントを事前に読み込む
const fontNnotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn(fontNnotoSansJP.className, "bg-background antialiased min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
