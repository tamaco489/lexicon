import { SiteConfig } from "@/types";

/**
 * サイトの基本設定
 * 
 * このファイルでは、サイト全体で使用される設定値を定義しています。
 * メタ情報、OGP画像、SNSリンクなどの設定を一元管理することで、
 * サイト全体での一貫性を保ち、設定の変更を容易にします。
 * 
 * 使用例：
 * - メタタグの生成
 * - OGPタグの設定
 * - フッターのSNSリンク
 * - サイト名の表示
 */
export const siteConfig: SiteConfig = {
  /** サイトの名前 */
  name: "post writer",

  /** サイトの説明文 */
  description: "post writer",

  /** サイトのURL（本番環境では実際のドメインに変更する必要があります） */
  url: "http://localhost:3000",

  /** OGP画像のURL（未設定） */
  ogImage: "",

  /** SNSや外部サービスのリンク */
  links: {
    /** X（旧Twitter）のプロフィールURL */
    x: "https://x.com/yukihiko_kawasaki",

    /** GitHubのリポジトリURL */
    github: "https://github.com/yukihiko-kawasaki/post-writer",
  },
};
