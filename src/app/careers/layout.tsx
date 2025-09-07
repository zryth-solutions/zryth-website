"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
// import Loading from "./loading";

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <Suspense fallback={<Loading />}>
    <>
      <Header />
      <Suspense>
        <div className="min-h-screen">{children}</div>
      </Suspense>
    </>
  );
}
