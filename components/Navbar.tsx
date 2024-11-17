import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

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
    title: `Blogs`,
  },
];

const Navbar = () => {
  return (
    <div className="navbar sticky top-1 shadow-md z-50">
      <div className="subheading bg-slate-50 text-black p-2 font-extrabold text-xs sticky">
        <div className="flex flex-row text-amber-800">
          <h1>{`<SOURAV/>`}</h1>
        </div>
        <h2>Programmer</h2>
      </div>
      <div className="lg:hidden block text-teal-50">
        <MobileMenu />
      </div>
      <div className="hidden lg:block text-teal-50">
        <ul className="subheading flex flex-row justify-center gap-x-8">
          {menuList.map((menu) => (
            <li key={menu.title} className="text-xl hover:border-b-2 gap-y-4 text-amber-500 cursor-pointer items-center">
              <Link href={`${menu.link}`}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="subheading hidden lg:block text-teal-50">contact me</div>
    </div>
  );
};

export default Navbar;
