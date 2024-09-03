"use client";

import Image from "next/image";
import Socials from "./Socials";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="mb-12">
      <div className="relative mb-8 h-24 w-24">
        <Image
          src="/profile.jpg"
          alt="Nicholas Ong profile picture"
          fill
          className="rounded-full"
        />
      </div>
      <TypeAnimation
        sequence={["Hello, my name is Nicholas.", 1000, "Hi, I'm Nick.", 1000]}
        wrapper="h1"
        repeat={Infinity}
        className="mb-4 h-8 w-full whitespace-pre-line text-2xl font-bold leading-snug"
      />
      <p className="mb-4 text-muted-foreground">
        I am an aspiring writer from Singapore. I write about technology,
        gaming, travel and more.
      </p>
      <Socials />
    </div>
  );
}
