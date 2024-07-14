"use client";
import Image from "next/image";
import Link from "next/link";
//ICON
import { FileText, House } from "lucide-react";

import { usePathname } from "next/navigation";

const Sidebar = () => {
  // Style Sidebar Menu
  const pathname = usePathname();
  const reqIs =
    "bg-gradient-to-tr from-red-400 to-sky-300 font-semibold text-black";
  const hover =
    "hover:bg-gradient-to-tl from-red-400 to-sky-300 hover:font-bold hover:text-black";

  return (
    <div className="flex flex-col w-full p-5">
      <section className="logo-sidebar hover:scale-90 transition-all duration-300 pt-3 pb-10">
        <a href="/">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </section>
      <div className=" h-0.5 bg-gray-400 rounded-full mb-10"></div>
      <section className="menu-sidebar">
        <ul className="space-y-3">
          <li
            className={`${
              pathname == "/" ? reqIs : "text-gray-400"
            } ${hover} p-2 w-full rounded-md hover:scale-90 transition-all duration-300`}
          >
            <Link href="/" className="flex items-center space-x-3">
              <House /> <span>Home</span>
            </Link>
          </li>
          <li
            className={`p-2 ${
              pathname == "/report" ? reqIs : "text-gray-400"
            }  w-full rounded-md hover:scale-90 transition-all duration-300
              ${hover}`}
          >
            <Link href="/report" className="flex items-center space-x-3">
              <FileText /> <span>Report</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
