import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="nav-material sticky top-0 z-10 mb-20 w-full bg-background/80 py-5 backdrop-blur-md sm:mb-28">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="https://hrtbkhxwperxcpdnwgzz.supabase.co/storage/v1/object/public/resume//Resume_NicholasOng.pdf"
            target="_blank"
            className="inline-block text-muted-foreground transition-[color,transform] duration-150 ease-out-expo hover:text-foreground active:scale-[0.98]"
          >
            Resume
          </Link>
          <Link
            href="#footer"
            className="inline-block text-muted-foreground transition-[color,transform] duration-150 ease-out-expo hover:text-foreground active:scale-[0.98]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
