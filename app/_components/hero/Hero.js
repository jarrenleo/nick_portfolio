"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mb-24 sm:mb-32">
      <div className="flex flex-col">
        <div className="relative mb-8 h-32 w-32">
          <Image
            src="/profile.png"
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

        <div className="mb-8">
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
          <Link
            href="#footer"
            rel="noopener noreferrer"
            className="rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-muted-foreground"
          >
            Contact me
          </Link>
          <div className="flex items-center gap-2.5 rounded-full bg-[rgb(225,249,220)] px-4 py-2.5 text-sm font-medium text-[rgb(23,141,0)]">
            <span className="relative h-2 w-2 rounded-full bg-[rgb(23,141,0)]">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-[rgb(23,141,0)]"></span>
            </span>
            Open to work
          </div>
        </div>
      </div>
    </section>
  );
}
