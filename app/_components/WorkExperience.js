import Image from "next/image";
import { getWorkExperience } from "../_lib/data-service";
import DownloadButton from "./ui/DownloadButton";

export default async function WorkExperience() {
  const workExperience = await getWorkExperience();

  return (
    <div className="mb-8 w-full rounded-md bg-primary-foreground p-4 sm:max-w-96">
      <h2 className="text-xl font-bold">Work Experience</h2>
      <table className="mb-2 w-full border-separate border-spacing-y-4">
        <tbody>
          {workExperience.map((job, index) => (
            <tr key={index}>
              <td>
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </td>
              <td className="pl-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold">{job.company}</span>
                  <span className="text-xs text-muted-foreground">
                    {job.role}
                  </span>
                </div>
              </td>
              <td className="text-center">
                <span className="text-xs text-muted-foreground">
                  {job.period}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DownloadButton />
    </div>
  );
}
