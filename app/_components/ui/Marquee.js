import { cn } from "@/app/_lib/utils";

export default function Marquee({
  className,
  reverse,
  children,
  repeat = 3,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex flex-row overflow-hidden p-2 [--duration:60s] [--gap:1rem] [gap:var(--gap)]",
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 animate-marquee flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]",
              {
                "[animation-direction:reverse]": reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
