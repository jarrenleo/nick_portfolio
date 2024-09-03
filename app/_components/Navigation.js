"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";

export default function Navigation() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";

  return (
    <div className="mb-12 flex items-center justify-end gap-2">
      <span className="text-muted-foreground">
        {isDarkMode ? <MoonStar size={20} /> : <Sun size={20} />}
      </span>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isDarkMode}
          onChange={() => setTheme(isDarkMode ? "light" : "dark")}
        />
        <div className="peer h-6 w-11 rounded-full bg-secondary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-background after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full"></div>
      </label>
    </div>
  );
}
