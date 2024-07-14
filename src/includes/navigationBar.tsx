"use client";

import { PersonIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const d = new Date().toDateString();

  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const t = new Date().toLocaleTimeString("en-US", { hour12: false });

      setTime(t);
    }, 1000);
  }, []);

  return (
    <nav className="min-w-full sticky top-0 border flex p-3 justify-between bg-opacity-90 bg-gray-100 z-0">
      <section className="datetime flex space-x-3 items-center">
        <p className="font-medium">{d}</p>
        <div className="bg-gray-300 w-0.5 h-6 rounded-full"></div>
        <p className="font-medium">{time}</p>
      </section>
      <section className="user flex space-x-3">
        <div className="grid">
          <p className="text-lg font-bold">User</p>
          <p className="text-sm">Role</p>
        </div>
        <div className="p-4 bg-gradient-to-tr hover:bg-gradient-to-tl hover:scale-90 duration-300 transition-all from-sky-300 to-red-300 rounded-full ">
          <PersonIcon />
        </div>
      </section>
    </nav>
  );
};

export default NavigationBar;
