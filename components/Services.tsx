import React from "react";
import { MagicCard } from "./ui/magic-card";
import Image from "next/image";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      description:
        "Leveraging expertise in both front-end and back-end technologies, I provide services to create seamless, high-performing web applications. My approach ensures a cohesive user experience, robust functionality, and scalability, tailored to meet your project needs. I am dedicated to delivering efficient, optimized solutions.",
      icon: "/Icon/web.png",
      technology: [
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
      ],
    },
    {
      title: "Hosting & Deployment",
      description:
        "I provide comprehensive DevOps services focused on streamlining development workflows, enhancing deployment efficiency, and ensuring robust infrastructure management. By implementing automation, continuous integration, and monitoring solutions, I help organizations achieve faster, more reliable software delivery. My approach prioritizes security, scalability, and collaboration.",
      icon: "/Icon/devops.png",
      technology: [
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
      ],
    },
    {
      title: "UI & UX Design",
      description:
        "I specialize in delivering high-quality UI and UX design services that focus on creating intuitive, user-centered interfaces. My approach combines functionality with aesthetic appeal to enhance user engagement and streamline interactions. By understanding user needs and brand goals, I design seamless experiences that drive satisfaction and improve usability across digital platforms. Let’s work together to make your product beautiful and easy to use.",
      icon: "/Icon/ux.png",
      technology: [
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
        }
      ],
    },
  ];
  return (
    <div className="bg-transparent ">
      <h1 className="heading text-3xl md:text-[4rem] font-bold leading-none tracking-widest text-center mb-10">Services</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {services.map((service, idx) => (
          <MagicCard
            key={idx}
            className="cursor-pointer flex-col items-center justify-center shadow-2xl text-4xl bg-transparent w-[26rem] group"
            gradientColor={"#262626"}
          >
            <div className="flex flex-row justify-between py-2 px-6">
              <Image
                src={service.icon}
                alt="Fullstack icon"
                width={64}
                height={64}
                className="text-slate-100 border-[0.01rem] border-teal-600 p-2 transform duration-500 group-hover:bg-slate-100"
              />
              <h2 className="text-teal-300 text-2xl font-extrabold paragraph transform duration-500 -rotate-45 group-hover:rotate-0">
                →
              </h2>
            </div>
            <div className="p-6 border-[0.1rem] border-slate-600 mr-8 rounded-tr-xl border-l-0 border-b-0 flex flex-col justify-start ">
              <div className="subheading text-amber-600 text-xl my-2 group-hover:translate-x-4 duration-500">
                {service.title}
              </div>
              <p className="paragraph text-teal-300 text-base group-hover:translate-x-4 duration-500">
                {service.description}
              </p>
              <div className="mt-2 flex flex-wrap justify-start group-hover:translate-x-4 duration-500">
                <ul className="flex flex-wrap justify-start gap-2">
                  {service.technology.map((tech, idx) => (
                    <li key={idx} className="">
                      <div className=" mx-auto flex flex-row items-center justify-start rounded-2xl bg-white px-2 py-1.5 text-sm font-medium">
                        <Image
                          src={tech.icon}
                          alt="icon"
                          height={16}
                          width={16}
                        />{" "}
                        <hr className="mx-2 h-4 w-px shrink-0 bg-blue-950" />{" "}
                        <span
                          className={cn(
                            `inline animate-gradient bg-gradient-to-r from-[#110f2c] via-[#020484] to-[#070011] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                          )}
                        >
                          {tech.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
