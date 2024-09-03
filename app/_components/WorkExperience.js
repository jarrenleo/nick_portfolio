import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

const workExperience = [
  {
    company: "The Smart Local",
    role: "Jr. Editorial Assistant",
    period: "09 / 2023 -\n01 / 2024",
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

export default function WorkExperience() {
  return (
    <div className="mb-12 rounded-md bg-primary-foreground p-6">
      <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
      <table className="mb-4 w-full">
        <tbody>
          {workExperience.map((job, index) => (
            <tr key={index}>
              <td className="py-3 pr-2">
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
                  <span className="text-xs text-muted-foreground">
                    {job.role}
                  </span>
                </div>
              </td>
              <td className="text-center">
                <span className="whitespace-pre-line text-xs text-muted-foreground">
                  {job.period}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        href="https://drive.usercontent.google.com/u/0/uc?id=1xhbRBVsdb1Bsx89hLgtqNB2eR0smsVfV&export=download"
        download="Nicholas_Ong_Resume.pdf"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-secondary py-3 text-sm font-semibold transition-colors hover:bg-secondary-foreground/20"
      >
        <span>Download Resume</span>
        <Download size={16} />
      </Link>
    </div>
  );
}
