import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const articles = [
  {
    title: "Techyard pop-up at Suntec City with discounts up to 70% off",
    description:
      "Techyard pop-up at Suntec City offers up to 70% off on PC components, peripherals, and tech gadgets with hands-on testing.",
    image:
      "https://thesmartlocal.com/wp-content/uploads/2023/12/techyard-pop-up-display-.jpg",
    link: "https://thesmartlocal.com/read/techyard-aftershock-pc-pop-up/",
    sponsor: "Techyard",
    sponsorLogo: "/articles/techyard logo.png",
  },
  {
    title: "Highest-paying jobs for gamers in Singapore",
    description:
      "High-paying gaming jobs in Singapore, from programmers to esports athletes, with insights on required skills and education.",
    image:
      "https://thesmartlocal.com/wp-content/uploads/2024/01/jobs-for-sg-gamers-dota-2.png",
    link: "https://thesmartlocal.com/read/highest-paying-gaming-jobs-singapore/",
    sponsor: "Digipen",
    sponsorLogo: "/articles/digipen logo.png",
  },
  {
    title: "Stopover activities to do under 48 hours",
    description:
      "Explore stopover activities at major airports like Dubai, Frankfurt, Istanbul, London, Doha, Bangkok, Tokyo and Los Angeles.",
    image:
      "https://thesmartlocal.com/wp-content/uploads/2023/12/stopover-activites-tower-bridge-1024x682.png",
    link: "https://thesmartlocal.com/read/things-to-do-flight-stopover/",
    sponsor: "Maybank",
    sponsorLogo: "/articles/maybank logo.jpg",
  },
  {
    title: "National Day Activities you can do with your Family!",
    description:
      "Fun family activities to do with your family to celebrate National Day, such as eating together and watching aerial displays.",
    image:
      "https://familiesforlife.sg/media/getimage?filepath=Article/5cec5fad-b801-48e8-a74e-9cbb2dcd9881/1 - National Day Activities you can do with your Family!.jpg",
    link: "https://familiesforlife.sg/pages/article/national-day-family-activities",
    sponsor: "Families for Life",
    sponsorLogo: "/articles/ffl logo.jpg",
  },
  {
    title: "Rojak. A tasty blend of Singapore's culture",
    description:
      "Celebrate Racial and Religious Harmony Month with Rojak—a vibrant fusion of Singapore’s diverse cultures, all on a plate.",
    image: "/articles/mccy post.jpg",
    link: "https://www.instagram.com/p/C94ZuzbSgIV/",
    sponsor: "Ministry of Culture, Community and Youth",
    sponsorLogo: "/articles/mccy logo.png",
  },
];

export default function Articles() {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-bold">Things I&apos;ve Worked On</h2>
      <div className="overflow-x-scroll pb-4">
        <div className="flex gap-4">
          {articles.map((article) => (
            <div
              key={article.title}
              className="w-72 flex-shrink-0 rounded-md bg-primary-foreground p-4 sm:w-80"
            >
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <Image
                  src={article.sponsorLogo}
                  alt={`${article.sponsor} Logo`}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <span className="truncate">{article.sponsor}</span>
              </div>
              <div className="relative mb-4 w-full pb-[56.25%]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">{article.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {article.description}
                </p>
                <Link
                  href={article.link}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-primary transition-all hover:font-semibold"
                >
                  <span>View Full Article</span>
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
