import { HoverEffect } from "./ui/card-hover-effect";

export function Experience() {
  return (
    <div className="w-full mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Nova Information Technology, Dubai",
    designation: "Software Developer Engineer Intern",
    date: "January 2024 - March 2024",
    description:
      "Developing and implementing intuitive content management interface automated navigation bar generation and performance optimization etc. using Next.js, Strapi.js, MySQL. Assisting in the testing and quality assurance processes to ensure that the enhancements meet our usability, performance, and accessibility standards.",
    link: "https://thenovaweb.com",
  },
  {
    title: "COMSYS Educational Trust, Kolkata",
    designation: "Software Developer Engineer Intern",
    date: "June. 2024 - Present",
    description:
      "Working on amazing projects related to Anti-Money Laundering, Compliance, and ERPs. Responsibilities developing features and maintaining documentation, implementing solutions, and utilizing tools like Jira and Git for efficient project management and version control. Got opportunity to collaborate using AdonisJS, NodeJS, ExpressJS and MySQL with experienced team of developers, gaining practical experience and learning from their expertise.",
    link: "https://comsysconf.org",
  },
  {
    title: "Minimum Strength, Bangalore",
    designation: "Software Developer Engineer Intern",
    date: "June 2023 - August 2023",
    description:
      "Developed a Platform for Athlete & Faculties to upload and share content & blogs material which will be accessible to all the registered members with customized dashboards using GatsbyJS, Javascript, and TailwindCSS. Incorporated App Script & Developed a service to automatically send daily Email & WhatsApp messages in order to notify there health progress. Using GraphQL all the content is fetched from Strapi dashboard. And VPS(Linux) is used to deploy on internet.",
    link: "https://google.com",
  },
];
