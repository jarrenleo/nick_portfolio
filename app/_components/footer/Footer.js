import Link from "next/link";
import Logo from "../navigation/Logo";

export default function Footer() {
  return (
    <footer id="footer" className="bg-muted">
      <div className="mx-auto flex max-w-7xl items-start justify-between px-6 pb-12 pt-16">
        <div className="flex flex-col gap-[88px]">
          <Logo />
          <div className="flex flex-col">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Nicholas Ong
            </p>
            <p className="text-muted-foreground">Singapore, SG</p>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <h3 className="mb-4 text-xl font-medium">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="transition-colors hover:text-foreground">
                <Link href="mailto:nicongggg@gmail.com" target="_blank">
                  Email
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium">Connect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="transition-colors hover:text-foreground">
                <Link
                  href="https://www.linkedin.com/in/nicholasong-re"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="transition-colors hover:text-foreground">
                <Link href="https://x.com/nicongggg" target="_blank">
                  X
                </Link>
              </li>
              <li className="transition-colors hover:text-foreground">
                <Link href="https://www.instagram.com/ig_nchls" target="_blank">
                  Instagram
                </Link>
              </li>
              <li className="transition-colors hover:text-foreground">
                <Link
                  href="https://discordapp.com/users/369924066741714946"
                  target="_blank"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
