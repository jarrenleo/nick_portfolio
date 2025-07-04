import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-10 mb-32 w-full bg-background py-6">
      <div className="flex items-end justify-between">
        <Logo />
        <div className="flex items-center gap-4 text-lg font-medium sm:text-xl">
          <Link
            href="https://hrtbkhxwperxcpdnwgzz.supabase.co/storage/v1/object/public/resume//Resume_NicholasOng.pdf"
            target="_blank"
            className="transition-colors hover:text-muted-foreground"
          >
            Resume
          </Link>
          <Link
            href="#footer"
            className="transition-colors hover:text-muted-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
