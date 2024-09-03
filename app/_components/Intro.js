"use client";

import Image from "next/image";
import Socials from "./Socials";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="mb-12">
      <div className="relative mb-8 h-32 w-32">
        <Image
          src="/profile.jpg"
          alt="Nicholas Ong profile picture"
          fill
          className="rounded-full"
        />
      </div>
      <TypeAnimation
        sequence={["Hi, I'm Nicholas Ong\nand you can call me Nick."]}
        wrapper="h1"
        className="mb-4 h-16 w-full whitespace-pre-line text-2xl font-bold leading-snug"
      />
      <p className="mb-4 text-muted-foreground">
        I am an aspiring writer from Singapore. I write about tech,
        entrepreneurship, and personal growth.
      </p>
      <Socials />
    </div>
  );
}
