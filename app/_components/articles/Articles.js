import Image from "next/image";
import Link from "next/link";
import { getArticles } from "../../_lib/data-service";

export default async function Articles() {
  const articles = await getArticles();

  return (
    <section className="mb-24 sm:mb-32">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-hedvig-serif text-2xl sm:text-3xl">
          Things I&apos;ve Worked On
        </h2>
        <Link
          href="https://thesmartlocal.com/read/author/nicholasong/"
          target="_blank"
          className="font-medium transition-colors hover:text-muted-foreground"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            href={article.link}
            key={article.id}
            target="_blank"
            className="group"
          >
            <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-all group-hover:opacity-80"
              />
            </div>

            <div>
              <h3 className="mb-4 font-medium">{article.title}</h3>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium">{article.category}</p>
                <p className="text-sm text-muted-foreground">
                  {article.read_time} mins read
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
