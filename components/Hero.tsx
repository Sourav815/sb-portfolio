import Image from "next/image";
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import Link from "next/link";
import AvatarCircles from "./AvatarCircles";

const avatars = [
  "/Icon/linedin.png",
  "/Icon/twitter.jpeg",
  "/Icon/leetcode.png",
  "/Icon/github.png",
];

const Hero = () => {
  return (
    <div className="flex flex-col justify-center gap-y-10 mt-4 lg:mt-24 w-full">
      <div className="flex justify-center">
        <h1 className="heading text-6xl lg:text-[14rem] tracking-wider text-center">
          SOURAV BHUNIA
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between h-80">
        <div className="paragraph text-center lg:text-left flex flex-col gap-y-6 lg:w-1/4 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, quae
          animi in, tenetur explicabo id nostrum molestiae veniam hic molestias
          doloremque pariatur similique incidunt voluptatem nulla nobis sunt
          architecto voluptatum?
          <Link href="https://google.com" className="subheading z-[1] mb-12">
            <RainbowButton className="cu1rsor-pointer">
              Get In Touch
            </RainbowButton>
          </Link>
        </div>
        <div className="flex justify-center lg:w-1/3 lg:relative lg:bottom-36">
          <Image
            src="/Image/hero.jpg"
            alt="Sourav Photo"
            height={1000}
            width={1000}
            className="h-96 lg:h-[28rem] w-auto border-4 border-slate-100 rounded-3xl rotate-12 hover:rotate-0 duration-500"
          />
        </div>
        <div className="hidden lg:block paragraph text-center lg:text-left flex-col justify-center gap-y-6 lg:w-1/4">
          <h1 className="subheading mb-4 text-lg">Follow Me On</h1>
          <AvatarCircles avatarUrls={avatars} />
          <h1 className="paragraph mt-12 text-4xl flex flex-row gap-x-4">{ `Let's Collaborate` }<Image src='/Icon/arrow.svg' alt="arrow" height={32} width={32} className="hover:translate-x-8 ease-in-out duration-300" /></h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
