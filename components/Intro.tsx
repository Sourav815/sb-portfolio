import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

const reviews = ["Engineer", "Designer", "Developer"];

const ReviewCard = ({review }: { review: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <h1 className="subheading text-2xl">{review}</h1>
    </figure>
  );
};

export function Intro() {
  return (
    <div className="flex flex-col mt-[28rem] lg:mt-8 justify-center w-full text-center ">
      <div className="relative z-[-10] flex h-32 w-full flex-col items-center justify-center overflow-hidden md:shadow-xl bg-[#020617]">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#020617] dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#020617] dark:from-background"></div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="heading text-2xl font-semibold text-teal-100 dark:text-white ">
                Who Am I? <br />
                <span className="heading text-3xl md:text-[4rem] font-bold leading-none tracking-widest">
                  Let Me Tell You!
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/Image/terminal-intro.png`}
            alt="hero"
            height={1500}
            width={1500}
            className="w-full rounded-2xl object-fill lg:h-auto"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
