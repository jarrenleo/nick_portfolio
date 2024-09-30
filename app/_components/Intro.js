"use client";

import Image from "next/image";
import Socials from "./Socials";
import { TypeAnimation } from "react-type-animation";

const description =
  "A firm believer that the book is always better than the film, I love crafting stories and messages that bring meaning and insight. Meticulous to a fault, I take pride in researching on my subject matter regardless of importance or scale. If you're looking for a writer who blends humour, flair, creativity, and wit, I'm your guy.";

export default function Intro() {
  return (
    <div className="mb-8">
      <div className="relative mb-6 h-24 w-24">
        <Image
          src="https://hrtbkhxwperxcpdnwgzz.supabase.co/storage/v1/object/public/images/profile/profile.jpg"
          alt="Profile picture"
          width={96}
          height={96}
          className="rounded-full outline outline-secondary"
        />
      </div>
      <TypeAnimation
        sequence={["Hello, my name is Nicholas.", 1000, "Hi, I am Nick.", 1000]}
        wrapper="h1"
        repeat={Infinity}
        className="mb-2 text-xl font-bold sm:text-2xl"
      />
      <p className="mb-4 text-balance text-sm text-muted-foreground sm:text-base">
        {description}
      </p>
      <Socials />
    </div>
  );
}
