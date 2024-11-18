import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBrandGithubCopilot,
  IconStackMiddle,
  IconUxCircle,
} from "@tabler/icons-react";
import Image from "next/image";

const fullStack = [
  {
    name: "React.js",
    icon: "/techicon/reactjs.svg",
  },
  {
    name: "Next.js",
    icon: "/techicon/next-js.svg",
  },
  {
    name: "Adonis.js",
    icon: "/techicon/adonisjs.svg",
  },
  {
    name: "Strapi",
    icon: "/techicon/strapi.svg",
  },
  {
    name: "Node.js",
    icon: "/techicon/nodejs.svg",
  },
  {
    name: "Express",
    icon: "/techicon/express.svg",
  },
  {
    name: "MongoDB",
    icon: "/techicon/mongodb.svg",
  },
  {
    name: "mySQL",
    icon: "/techicon/mysql.svg",
  },
  {
    name: "AWS",
    icon: "/techicon/aws.svg",
  },
  {
    name: "Linux",
    icon: "/techicon/linux.svg",
  },
  {
    name: "Git & Github",
    icon: "/techicon/github-desktop.svg",
  },
  {
    name: "Bitbucket",
    icon: "/techicon/bitbucket.svg",
  },
  {
    name: "Docker",
    icon: "/techicon/docker.svg",
  },
];
const design = [
  {
    name: "Figma",
    icon: "/techicon/figma.svg",
  },
  {
    name: "Canva",
    icon: "/techicon/canva.svg",
  },
  {
    name: "Latex",
    icon: "/techicon/Latex.svg",
  },
];

const developerTools = [
  {
    name: "Python",
    icon: "/techicon/python.svg",
  },
];

export function Skills() {
  return (
    <div className="flex flex-wrap justify-center w-full p-8">
      <ul className="flex flex-wrap justify-start md:justify-center mb-4 gap-2">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="heading tracking-widest bg-slate-800 py-1 px-3 rounded-full text-sm md:text-base text-zinc-400"
          >
            {skill}
          </li>
        ))}
      </ul>
      <BentoGrid className="max-w-6xl mx-auto h-fit">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = ({
  technologies,
}: {
  technologies: {
    name: string;
    icon: string;
  }[];
}) => (
  <div className="flex flex-1 w-full bg-slate-800 from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <ul className="flex flex-wrap p-6 gap-4">
      {technologies.map((item, i) => (
        <li key={i} className="">
          <Image src={item.icon} alt="icon" width={36} height={36} />
        </li>
      ))}
    </ul>
  </div>
);
const items = [
  {
    title: "Full Stack Development Tools",
    header: <Skeleton technologies={fullStack} />,
    icon: (
      <IconStackMiddle className="h-8 w-8 text-neutral-500 group-hover:text-amber-500" />
    ),
  },
  {
    title: "UI/UX Design Tools",
    header: <Skeleton technologies={design} />,
    icon: (
      <IconUxCircle className="h-8 w-8 text-neutral-500  group-hover:text-amber-500" />
    ),
  },
  {
    title: "Deep Learning Tools (Learning...)",
    header: <Skeleton technologies={developerTools} />,
    icon: (
      <IconBrandGithubCopilot className="h-8 w-8 text-neutral-500  group-hover:text-amber-500" />
    ),
  },
];
const skills = [
  "Full Stack Development",
  "Customised Application",
  "CMS Development",
  "UI/UX Design",
  "Deep Learning",
];
