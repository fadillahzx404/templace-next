"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
  // TITLE
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = "HOME";
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
      <section className="content">
        <Card>
          <CardHeader>HEI</CardHeader>
          <CardContent>
            <h1>HELLOWORLD</h1>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
