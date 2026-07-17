"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "../_lib/utils";

export default function FadeInImage({ className, ...props }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Cached images can finish loading before hydration, so onLoad never fires
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <Image
      ref={ref}
      {...props}
      onLoad={() => setLoaded(true)}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out-expo",
        loaded ? "opacity-100" : "opacity-0",
        className,
      )}
    />
  );
}
