import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import MySkillsFuture from "../icons/MySkillsFuture";

export default function Hero() {
  return (
    <section className="mb-24 sm:mb-32">
      <div className="flex flex-col">
        <div className="relative mb-8 h-32 w-32">
          <Image
            src="/profile.jpg"
            alt="Profile image"
            fill
            className="rounded-full"
            priority
          />
        </div>

        <div className="mb-6">
          <h1 className="font-hedvig-serif text-4xl">
            Hey, I&apos;m Nicholas.
          </h1>
        </div>

        <div className="mb-6">
          <p className="text-balance text-muted-foreground">
            A firm believer that the book is always better than the film, I love
            crafting stories and messages that bring meaning and insight.
            Meticulous to a fault, I take pride in researching on my subject
            matter regardless of importance or scale. If you&apos;re looking for
            a<span className="font-bold"> writer </span>who blends humour,
            flair, creativity, and wit, I&apos;m your guy.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="mailto:nicongggg@gmail.com" target="_blank">
            <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nicholasong-re"
            target="_blank"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link
            href="https://www.myskillsfuture.gov.sg/csp/public/profile/0zw4h52vob8f14"
            target="_blank"
            className="h-5"
          >
            <MySkillsFuture className="h-full w-full" />
          </Link>
        </div>
      </div>
    </section>
  );
}
