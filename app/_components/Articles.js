import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const articles = [
  {
    title: "Techyard pop-up at Suntec City with discounts up to 70% off",
    description:
      "Techyard pop-up at Suntec City offers up to 70% off on PC components, peripherals, and tech gadgets with hands-on testing.",
    link: "https://thesmartlocal.com/read/techyard-aftershock-pc-pop-up/",
    articleImage:
      "https://thesmartlocal.com/wp-content/uploads/2023/12/techyard-pop-up-display-.jpg",
    partner: "Techyard",
    partnerImage: "/techyard logo.png",
  },
  {
    title: "Highest-paying jobs for gamers in Singapore",
    description:
      "High-paying gaming jobs in Singapore, from programmers to esports athletes, with insights on required skills and education.",
    link: "https://thesmartlocal.com/read/highest-paying-gaming-jobs-singapore/",
    articleImage:
      "https://thesmartlocal.com/wp-content/uploads/2024/01/jobs-for-sg-gamers-dota-2.png",
    partner: "Digipen",
    partnerImage: "/digipen logo.png",
  },
  {
    title: "Stopover activities to do under 48 hours",
    description:
      "Explore stopover activities at major airports like Dubai, Frankfurt, Istanbul, London, Doha, Bangkok, Tokyo and Los Angeles.",
    link: "https://thesmartlocal.com/read/things-to-do-flight-stopover/",
    articleImage:
      "https://thesmartlocal.com/wp-content/uploads/2023/12/stopover-activites-tower-bridge-1024x682.png",
    partner: "Maybank",
    partnerImage: "/maybank logo.jpg",
  },
  {
    title: "National Day Activities you can do with your Family!",
    description:
      "Fun family activities to do with your family to celebrate National Day, such as eating together and watching aerial displays.",
    link: "https://familiesforlife.sg/pages/article/national-day-family-activities",
    articleImage:
      "https://familiesforlife.sg/media/getimage?filepath=Article/5cec5fad-b801-48e8-a74e-9cbb2dcd9881/1%20-%20National%20Day%20Activities%20you%20can%20do%20with%20your%20Family!.jpg",
    partner: "Families for Life",
    partnerImage: "/ffl logo.png",
  },
  {
    title: "Rojak. A tasty blend of Singapore's culture",
    description:
      "Celebrate Racial and Religious Harmony Month with Rojak—a vibrant fusion of Singapore’s diverse cultures, all on a plate.",
    link: "https://www.instagram.com/p/C94ZuzbSgIV/",
    articleImage: "/mccy instagram post.jpg",
    partner: "Ministry of Culture, Community and Youth",
    partnerImage: "/mccy logo.png",
  },
];

// export default function Articles() {
//   return (
//     <div className="mb-8">
//       <h2 className="mb-4 text-2xl font-semibold">Featured Articles</h2>
//       <div className="overflow-x-auto pb-4">
//         <div className="flex space-x-4">
//           {articles.map((article) => (
//             <div
//               key={article.title}
//               className="mb-4 w-80 flex-shrink-0 rounded-md bg-primary-foreground"
//             >
//               <div className="relative h-52 w-full">
//                 <Image
//                   src={article.articleImage}
//                   alt={article.title}
//                   fill
//                   className="rounded-t-md object-cover"
//                 />
//                 <div className="absolute left-2 top-2">
//                   <Image
//                     src={article.partnerImage}
//                     alt={`${article.partner} Logo`}
//                     width={32}
//                     height={32}
//                     className="rounded-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="mb-2 font-semibold">{article.title}</h3>
//                 <p className="mb-4 text-sm text-muted-foreground">
//                   {article.description}
//                 </p>
//                 <Link
//                   href={article.link}
//                   target="_blank"
//                   className="flex items-center gap-1 text-sm text-primary transition-all hover:font-semibold"
//                 >
//                   <span>View Full Article</span>
//                   <ArrowRightIcon size={16} />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Articles() {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold">Featured Articles</h2>
      <div className="overflow-x-auto pb-4 md:overflow-x-visible">
        <div className="flex space-x-4 md:grid md:grid-cols-3 md:gap-4 md:space-x-0">
          {articles.map((article) => (
            <div
              key={article.title}
              className="w-80 flex-shrink-0 rounded-md bg-primary-foreground md:w-full"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={article.articleImage}
                  alt={article.title}
                  fill
                  className="rounded-t-md object-cover"
                />
                <div className="absolute left-2 top-2">
                  <Image
                    src={article.partnerImage}
                    alt={`${article.partner} Logo`}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="p-4">
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
