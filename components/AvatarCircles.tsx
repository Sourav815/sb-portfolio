"use client";
import Image from "next/image";
import React from "react";

interface AvatarCirclesProps {
  avatarUrls: string[];
}

const AvatarCircles = ({ avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={"z-10 flex -space-x-4 rtl:space-x-reverse"}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="h-12 w-auto rounded-full border-2 border-white dark:border-gray-800 hover:scale-110 hover:z-50 duration-300 cursor-pointer bg-blue-950"
          src={url}
          width={300}
          height={300}
          alt={`Avatar ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default AvatarCircles;
