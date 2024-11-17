"use client";

import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const menuList = [
    {
      logo: ``,
      link: `#`,
      title: `Explore`,
    },
    {
      logo: ``,
      link: `#`,
      title: `Project`,
    },
    {
      logo: ``,
      link: `#`,
      title: `Blog`,
    },
  ];

  return (
    <div>
      <button
        onClick={handleClick}
        className={`flex flex-col justify-center items-center lg:hidden`}
      >
        <span
          className={`bg-slate-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-slate-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-slate-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>
      <div
        className={`morph flex-1 justify-self-center pb-7 transition-all duration-700 bg-blue-500 pt-5 w-5/6 h-screen -top-2 z-50 absolute lg:hidden flex justify-between ${
          isOpen ? "-left-4 " : "-left-[40rem]"
        }`}
      >
        <div>
          <ul className="m-4">
            {menuList.map((menu) => (
              <li key={menu.title} className="my-4 text-xl">
                {menu.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
