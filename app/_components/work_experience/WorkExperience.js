import Image from "next/image";
import { getWorkExperience } from "../../_lib/data-service";

export default async function WorkExperience() {
  const workExperience = await getWorkExperience();

  return (
    <section className="mb-16">
      <h2 className="mb-4 font-hedvig-serif text-3xl">
        Places I&apos;ve Worked At
      </h2>
      <table className="w-full border-separate border-spacing-y-6">
        <tbody>
          {workExperience.map((job, index) => (
            <tr key={index}>
              <td>
                <div className="relative h-12 w-12 md:h-14 md:w-14">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    fill
                    className="rounded-full"
                  />
                </div>
              </td>
              <td className="pl-2">
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">{job.company}</span>
                  <span className="text-sm text-muted-foreground">
                    {job.role}
                  </span>
                </div>
              </td>
              <td>
                <span className="font-medium">{job.period}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
