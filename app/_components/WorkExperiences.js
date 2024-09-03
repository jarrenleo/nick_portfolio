import Image from "next/image";
import { Download } from "lucide-react";

const workExperiences = [
  {
    company: "The Smart Local",
    role: "Jr. Editorial Assistant",
    period: "09 / 2023 — 01 / 2024",
    logo: "/tsl logo.png",
  },
  {
    company: "The Secret Mermaid",
    role: "Barback",
    period: "2020 - 2023",
    logo: "/tsm logo.png",
  },
  {
    company: "Singapore Air Force",
    role: "Air Ops. Systems Expert",
    period: "2015 - 2020",
    logo: "/rsaf logo.svg",
  },
];

export default function WorkExperiences() {
  return (
    <div className="mb-12 rounded-md bg-primary-foreground p-6">
      <h2 className="mb-6 text-xl font-bold">Work Experiences</h2>
      <table className="mb-6 w-full">
        <tbody>
          {workExperiences.map((job, index) => (
            <tr key={index}>
              <td className="py-4 pr-2">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </td>
              <td>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold">{job.company}</span>
                  <span className="text-sm text-muted-foreground">
                    {job.role}
                  </span>
                </div>
              </td>
              <td>
                <span className="text-xs text-muted-foreground">
                  {job.period}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        href="/"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-secondary py-3 text-sm font-semibold transition-colors hover:bg-secondary-foreground/20"
      >
        <span>Download CV</span>
        <Download size={16} />
      </button>
    </div>
  );
}
