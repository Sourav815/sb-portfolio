import Image from "next/image";
import React from "react";

const Achievement = [
  {
    type: "Publication",
    title:
      "Ensemble Learning of Maize Leaves Infected by Fall Armyworms Using CNN",
    image: "/Image/procedings.webp",
  },
  {
    type: "Publication",
    title: "Deep Learning",
    image: "/Image/procedings.webp",
  },
  {
    type: "Publication",
    title: "Deep Learning",
    image: "/Image/procedings.webp",
  },
];

const Achievements = () => {
  return (
    <div className="w-full px-6">
      <ul className="flex flex-wrap gap-4 justify-between">
        {Achievement.map((data, idx) => (
          <li key={idx} className="w-[24rem] h-96 p-4 space-y-4 bg-slate-900">
            <div className="flex flex-col justify-start space-y-2">
              <h1 className="heading text-lg md:text-xl text-zinc-300 tracking-wide">{data.title}</h1>
              <p className="paragraph text-sm md:text-md text-zinc-200">{data.type}</p>
            </div>
            {data.image && (
              <div className="relative flex transform-gpu snap-mandatory ">
                <div className="shrink-0 sm:w-2" />
                <Image
                  key={data.type}
                  src={data.image}
                  alt={data.type}
                  width={300}
                  height={300}
                  className="h-64 w-full shrink-0  snap-always object-cover shadow-sm"
                />
                <div className="shrink-0 snap-center sm:w-2" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
