/**
 * サイトの基本設定を定義する型
 * サイトのメタ情報やSNSリンクなどの設定を管理するために使用
 */
export type SiteConfig = {
  /** サイトの名前 */
  name: string;

  /** サイトの説明文 */
  description: string;
  /** サイトのURL */

  url: string;
  /** OGP画像のURL */

  ogImage: string;
  /** SNSや外部サービスのリンク */

  links: {
    /** X（旧Twitter）のプロフィールURL */
    x: string;

    /** GitHubのリポジトリURL */
    github: string;
  };
};
