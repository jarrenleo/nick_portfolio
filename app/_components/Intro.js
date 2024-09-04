"use client";

import Image from "next/image";
import Socials from "./Socials";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="mb-8">
      <div className="relative mb-6 h-24 w-24">
        <Image
          src="/profile.jpg"
          alt="Nicholas Ong profile picture"
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>
      <TypeAnimation
        sequence={["Hello, I am Nicholas.", 1000, "Hi, I am Nick.", 1000]}
        wrapper="h1"
        repeat={Infinity}
        className="mb-4 h-6 text-2xl font-bold"
      />
      <p className="mb-4 text-muted-foreground">
        I am an aspiring writer from Singapore. I write about technology,
        gaming, travel and more.
      </p>
      <Socials />
    </div>
  );
}
