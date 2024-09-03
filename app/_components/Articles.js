import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "National Day Activities you can do with your Family!",
    description: "Article description...",
    link: "https://familiesforlife.sg/pages/article/national-day-family-activities",
    image:
      "https://familiesforlife.sg/media/getimage?filepath=Article/5cec5fad-b801-48e8-a74e-9cbb2dcd9881/1%20-%20National%20Day%20Activities%20you%20can%20do%20with%20your%20Family!.jpg",
  },
  {
    title:
      "There’s A Cat Island In Japan That’s Overrun By Furballs And It’s Every Bit As Cute As It Sounds",
    description: "Article description...",
    link: "https://thesmartlocal.com/read/tashirojima-cat-island/",
    image:
      "https://thesmartlocal.com/wp-content/uploads/2023/12/cat-island-cover-690x361.png",
  },
  {
    title:
      "8 Exciting Stopover Activities On Popular Travel Routes Like Dubai, Frankfurt & Istanbul",
    description: "Article description...",
    link: "https://thesmartlocal.com/read/things-to-do-flight-stopover/",
    image:
      "https://thesmartlocal.com/wp-content/uploads/2023/12/stopover-activies-cover.png",
  },
  {
    title:
      "Techyard Has Up To 70% Off PC, Gaming & Audio Tech Gadgets, Try Before You Buy At Their Pop-Up",
    description: "Article description...",
    link: "https://thesmartlocal.com/read/techyard-aftershock-pc-pop-up/",
    image:
      "https://thesmartlocal.com/wp-content/uploads/2023/12/techyard-pop-up-cover-690x361.png",
  },
  {
    title: "ROJAK. A tasty blend of Singapore's culture",
    description: "Article description...",
    link: "https://www.instagram.com/p/C94ZuzbSgIV/",
    image: "/instagram post.jpg",
  },
];

export default function Articles() {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold">Featured Articles</h2>
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-4">
          {articles.map((article) => (
            <div
              key={article.title}
              className="mb-4 w-80 flex-shrink-0 rounded-md bg-primary-foreground p-6"
            >
              <div className="relative mb-4 h-52 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="rounded-md"
                />
              </div>

              <h3 className="mb-2 font-semibold">{article.title}</h3>
              <p className="mb-2 text-sm text-muted-foreground">
                {article.description}
              </p>
              <Link
                href={article.link}
                target="_blank"
                className="text-sm text-primary hover:underline"
              >
                View Full Article
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ... existing code ...
