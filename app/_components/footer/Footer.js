import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mb-14">
          <h2 className="mb-4 font-hedvig-serif text-3xl tracking-tight sm:text-4xl">
            Have a story in mind?
          </h2>
          <Link
            href="mailto:nicongggg@gmail.com"
            target="_blank"
            className="text-lg text-muted-foreground underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent sm:text-xl"
          >
            nicongggg@gmail.com
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-6 text-sm text-muted-foreground sm:flex-row sm:items-end">
          <div className="flex flex-col gap-1">
            <p>&copy; {new Date().getFullYear()} Nicholas Ong</p>
            <p>Singapore, SG</p>
          </div>
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/in/nicholasong-re"
              target="_blank"
              className="transition-colors duration-200 hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/ig_nchls"
              target="_blank"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="https://www.myskillsfuture.gov.sg/csp/public/profile/0zw4h52vob8f14"
              target="_blank"
              className="transition-colors duration-200 hover:text-foreground"
            >
              MySkillsFuture
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
