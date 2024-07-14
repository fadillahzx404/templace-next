"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
const data = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

const Report = () => {
  // TITLE
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = "REPORT";
    setTitle(document.title);
  }, []);

  //PAGE
  return (
    <div className="w-full flex flex-col h-full  px-4 py-6 bg-white z-30">
      <section className="title-content pb-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="text-2xl font-extrabold"></p>
      </section>
      <section className="content"></section>
    </div>
  );
};

export default Report;
