import { HoverEffect } from "./ui/card-hover-effect";

export function Education() {
  return (
    <div className="w-full mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    designation:
      "Jalpaiguri Government Engineering College, Jalpaiguri, WB, IN",
    date: "July 2022 - June 2025",
    description: "",
    link: "https://thenovaweb.com",
  },
  {
    title: "Diploma in Computer Science and Technology",
    designation: "Central Calcutta Polytechnic, Kolkata, WB, IN",
    date: "August 2019 - June 2022",
    description: "",
    link: "https://comsysconf.org",
  },
  {
    title: "X+II (Science, Physics, Chemistry, Mathematics, Biology)",
    designation: "Dhalhara Paglimata High School, Dhalhara, WB, IN",
    date: "March 2018 - March 2019",
    description: "",
    link: "https://google.com",
  },
];
