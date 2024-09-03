import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nicholasong-re/",
    iconPath:
      "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H6.5v-7H9V17z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2s0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2S8.6,8.7,7.7,8.7z M18,17h-2.4v-3.8c0-1.1-0.7-1.3-0.9-1.3	s-1.1,0.2-1.1,1.3c0,0.2,0,3.8,0,3.8h-2.5v-7h2.5v1c0.3-0.6,1-1,2.2-1s2.2,1,2.2,3.2V17z",
  },
  {
    name: "X",
    link: "https://x.com/Niiiiiiicholas/",
    iconPath:
      "M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ig_nchls/",
    iconPath:
      "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z",
  },
];

export default function Socials() {
  return (
    <div className="flex gap-4 text-muted-foreground">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.link}
          target="_blank"
          className="transition-colors hover:text-secondary-foreground/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d={social.iconPath}></path>
          </svg>
        </Link>
      ))}
    </div>
  );
}
