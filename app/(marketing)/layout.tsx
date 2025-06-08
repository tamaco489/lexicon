import MainNav from "@/components/mainNav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { marketingConfig } from "@/config/marketing";
import SiteFooter from "@/components/siteFooter";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* header */}
      <header className="z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between px-4 md:px-8 lg:px-16">
          <MainNav items={marketingConfig.mainNav} />
          <Link
            href={"/"}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4 py-2"
            )}
          >
            Login
          </Link>
        </div>
      </header>

      {/* main */}
      <main className="flex-1">
        {children}
      </main>

      {/* footer */}
      <SiteFooter />
    </>
  );
};
