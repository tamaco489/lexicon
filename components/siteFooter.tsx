import Link from "next/link";

export default function SiteFotter() {
  return (
    <footer className="w-full">
      <div className="container py-10 flex flex-col items-center justify-center gap-4 mx-auto">
        <p className="text-center text-sm text-muted-foreground">
          Built by
          <Link
            href="https://x.com/tamaco"
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            tamaco
          </Link>

          <span className="text-muted-foreground">
            . Hosted on {""}
          </span>

          <Link
            href="https://vercel.com"
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </Link>
        </p>
        <p className="text-center text-sm text-muted-foreground">
          &copy; 2025 Post Writer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
