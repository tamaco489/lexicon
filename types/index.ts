/**
 * ナビゲーションアイテムを定義する型
 * メインナビゲーションやサイドバーなどのナビゲーション要素で使用
 */
export type NavItem = {
  /** ナビゲーションアイテムの表示名 */
  title: string;

  /** リンク先のURL（オプション） */
  href?: string;

  /** 無効化フラグ（オプション） */
  disabled?: boolean;

  /** 外部リンクフラグ（オプション） */
  external?: boolean;

  /** アイコン要素（オプション） */
  icon?: React.ReactNode;
};

/**
 * マーケティングサイトの設定を定義する型
 * メインナビゲーションやサイドバーなどのナビゲーション要素で使用
 */
export type MarketingConfig = {
  /** メインナビゲーションのアイテム */
  mainNav: NavItem[];
};

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
