import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-block font-hedvig-serif text-xl font-medium transition-transform duration-150 ease-out-expo active:scale-[0.98] sm:text-2xl"
    >
      Nicholas.
    </Link>
  );
}
