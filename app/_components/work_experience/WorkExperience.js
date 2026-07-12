import Image from "next/image";
import Reveal from "../Reveal";
import { getWorkExperience } from "../../_lib/data-service";

export default async function WorkExperience() {
  const workExperience = await getWorkExperience();

  return (
    <section className="mb-24 sm:mb-32">
      <h2 className="mb-6 font-hedvig-serif text-3xl tracking-tight sm:text-4xl">
        Places I&apos;ve Worked At
      </h2>
      <Reveal>
        <ul className="divide-y divide-border">
          {workExperience.map((job, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-4 py-5"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium sm:text-base">
                    {job.company}
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    {job.role}
                  </span>
                </div>
              </div>
              <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                {job.period}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
