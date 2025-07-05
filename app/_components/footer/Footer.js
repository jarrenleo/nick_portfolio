import Link from "next/link";
import Logo from "../navigation/Logo";

export default function Footer() {
  return (
    <footer id="footer" className="bg-muted">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-12">
        <div className="flex flex-col gap-14">
          <Logo />
          <div className="flex flex-col text-sm sm:text-base">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Nicholas Ong
            </p>
            <p className="text-muted-foreground">Singapore, SG</p>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <h3 className="mb-4 text-lg font-medium sm:text-xl">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li className="transition-colors hover:text-foreground">
                <Link href="mailto:nicongggg@gmail.com" target="_blank">
                  Email
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium sm:text-xl">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
              <li className="transition-colors hover:text-foreground">
                <Link
                  href="https://www.linkedin.com/in/nicholasong-re"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="transition-colors hover:text-foreground">
                <Link href="https://www.instagram.com/ig_nchls" target="_blank">
                  Instagram
                </Link>
              </li>
              <li className="transition-colors hover:text-foreground">
                <Link
                  href="https://www.myskillsfuture.gov.sg/csp/public/profile/0zw4h52vob8f14"
                  target="_blank"
                >
                  MySkillsFuture
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
