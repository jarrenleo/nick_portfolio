"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="mb-12 flex items-center justify-end gap-2">
      <span className="text-muted-foreground">
        {theme === "dark" ? <MoonStar size={20} /> : <Sun size={20} />}
      </span>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <div className="peer h-6 w-11 rounded-full bg-secondary after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-background after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full"></div>
      </label>
    </div>
  );
}
