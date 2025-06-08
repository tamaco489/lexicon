import Link from "next/link";

export default function MainNav() {
  return (
    <div className="flex items-center md:gap-10 gap-2 pl-4">
      <Link
        href={"/"}
        className="hidden md:flex items-center space-x-2"
      >
        <span className="font-bold hidden sm:inline-block">Post Writer</span>
      </Link>

      <nav className="md:flex gap-6 hidden">
        {/* blog */}
        <Link
          href={"/blog"}
          className="text-lg sm:text-sm font-medium hover:text-foreground/80"
        >
          ブログ
        </Link>

        {/* feature */}
        <Link
          href={"#feature"}
          className="text-lg sm:text-sm font-medium hover:text-foreground/80"
        >
          特徴
        </Link>
      </nav>
    </div>
  );
};
