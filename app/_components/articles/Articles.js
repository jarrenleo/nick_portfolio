import Link from "next/link";
import Reveal from "../Reveal";
import FadeInImage from "../FadeInImage";
import { getArticles } from "../../_lib/data-service";

export default async function Articles() {
  const articles = await getArticles();

  if (!articles.length) return null;

  const [featured, ...rest] = articles;
  const hasOddRest = rest.length % 2 === 1;
  const gridArticles = hasOddRest ? rest.slice(0, -1) : rest;
  const closingArticle = hasOddRest ? rest.at(-1) : null;

  return (
    <section className="mb-24 sm:mb-32">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="font-hedvig-serif text-3xl tracking-tight sm:text-4xl">
          Things I&apos;ve Worked On
        </h2>
        <Link
          href="https://thesmartlocal.com/read/author/nicholasong/"
          target="_blank"
          className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          View all
        </Link>
      </div>

      <Reveal className="mb-14">
        <Link
          href={featured.link}
          target="_blank"
          className="group grid gap-6 transition-transform duration-150 ease-out-expo active:scale-[0.99] sm:grid-cols-2 sm:items-center sm:gap-10"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
            <FadeInImage
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-[1.03]"
            />
          </div>
          <div>
            <p className="mb-3 text-sm text-muted-foreground">
              {featured.category} &middot; {featured.read_time} min read
            </p>
            <h3 className="font-hedvig-serif text-2xl leading-snug transition-colors duration-200 group-hover:text-accent sm:text-3xl">
              {featured.title}
            </h3>
          </div>
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
        {gridArticles.map((article, index) => (
          <Reveal key={article.id} delay={(index % 2) * 60}>
            <Link
              href={article.link}
              target="_blank"
              className="group block transition-transform duration-150 ease-out-expo active:scale-[0.99]"
            >
              <div className="relative mb-5 aspect-[3/2] w-full overflow-hidden rounded-xl">
                <FadeInImage
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-[1.03]"
                />
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                {article.category} &middot; {article.read_time} min read
              </p>
              <h3 className="font-medium leading-snug transition-colors duration-200 group-hover:text-accent">
                {article.title}
              </h3>
            </Link>
          </Reveal>
        ))}
      </div>

      {closingArticle && (
        <Reveal className="mt-14">
          <Link
            href={closingArticle.link}
            target="_blank"
            className="group grid gap-6 transition-transform duration-150 ease-out-expo active:scale-[0.99] sm:grid-cols-2 sm:items-center sm:gap-10"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl sm:order-2">
              <FadeInImage
                src={closingArticle.image}
                alt={closingArticle.title}
                fill
                className="object-cover group-hover:scale-[1.03]"
              />
            </div>
            <div className="sm:order-1">
              <p className="mb-3 text-sm text-muted-foreground">
                {closingArticle.category} &middot; {closingArticle.read_time}{" "}
                min read
              </p>
              <h3 className="font-hedvig-serif text-2xl leading-snug transition-colors duration-200 group-hover:text-accent sm:text-3xl">
                {closingArticle.title}
              </h3>
            </div>
          </Link>
        </Reveal>
      )}
    </section>
  );
}
