"use client";

import Link from "next/link";
import { NavItem } from "@/types";
import MobileNav from "./mobileNav";
import { useState } from "react";

interface MainNavProps {
  items: NavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items }: MainNavProps) {

  // TODO: 開発しやすいように、一時的にtrueの状態に設定
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center md:gap-10 gap-2">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden sm:inline-block">Post Writer</span>
      </Link>

      <nav className="md:flex gap-6 hidden">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href || "/"}
            className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* mobile nav */}
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
};
