import Link from "next/link";
import Image from "next/image";
import { getArticles } from "@/app/_lib/data-service";
import Marquee from "./ui/Marquee";

function ArticleCard({
  title,
  image,
  link,
  sponsor,
  sponsor_logo: sponsorLogo,
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group/item relative h-64 w-56 cursor-pointer overflow-hidden rounded-md border border-border bg-primary-foreground text-sm font-semibold sm:h-80 sm:w-72"
    >
      <div className="relative h-full w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover/item:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      {sponsor && (
        <Image
          src={sponsorLogo}
          alt={`${sponsor} Logo`}
          width={24}
          height={24}
          className="absolute left-2 top-2 rounded-full object-cover"
        />
      )}
      <h3 className="absolute bottom-3 left-3 text-balance pr-3 font-semibold">
        {title}
      </h3>
    </Link>
  );
}

export default async function Articles() {
  const articles = await getArticles();
  const firstRow = articles.slice(0, articles.length / 2);
  const secondRow = articles.slice(articles.length / 2);

  return (
    <>
      <h2 className="mb-4 text-xl font-bold">Things I&apos;ve Worked On</h2>
      <div className="relative mb-8 flex w-full flex-col items-center justify-center overflow-hidden bg-background">
        <Marquee>
          {firstRow.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </Marquee>
        <Marquee reverse>
          {secondRow.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </>
  );
}
