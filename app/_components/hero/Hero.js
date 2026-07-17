import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Linkedin from "../icons/Linkedin";
import MySkillsFuture from "../icons/MySkillsFuture";

export default function Hero() {
  return (
    <section className="mb-24 sm:mb-32">
      <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
        <div className="max-w-2xl">
          <h1 className="fade-up mb-6 font-hedvig-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Hey, I&apos;m Nicholas.
          </h1>

          <p className="fade-up fade-up-delay-1 mb-8 text-balance leading-relaxed text-muted-foreground">
            A firm believer that the book is always better than the film, I love
            crafting stories and messages that bring meaning and insight.
            Meticulous to a fault, I take pride in researching on my subject
            matter regardless of importance or scale. If you&apos;re looking for
            a<span className="font-medium text-foreground"> writer </span>
            who blends humour, flair, creativity, and wit, I&apos;m your guy.
          </p>

          <div className="fade-up fade-up-delay-2 flex items-center gap-5">
            <Link
              href="mailto:nicongggg@gmail.com"
              target="_blank"
              className="inline-flex transition-transform duration-150 ease-out-expo active:scale-[0.96]"
            >
              <Mail className="h-5 w-5 text-muted-foreground transition-colors duration-200 hover:text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nicholasong-re"
              target="_blank"
              className="inline-flex transition-transform duration-150 ease-out-expo active:scale-[0.96]"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors duration-200 hover:text-foreground" />
            </Link>
            <Link
              href="https://www.myskillsfuture.gov.sg/csp/public/profile/0zw4h52vob8f14"
              target="_blank"
              className="inline-flex h-5 transition-transform duration-150 ease-out-expo active:scale-[0.96]"
            >
              <MySkillsFuture className="h-full w-full" />
            </Link>
          </div>
        </div>

        <div className="fade-up fade-up-delay-1 relative h-32 w-32 shrink-0 sm:mx-auto sm:h-44 sm:w-44">
          <Image
            src="/profile.jpg"
            alt="Nicholas Ong"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
