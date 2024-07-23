'use client';

import Image from "next/image";

import { Authenticated } from "convex/react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Header } from "./header";
import { LandingPage } from "./landingPage";
export default function Home() {

  return (
    <>
    <div className="">
      <LandingPage/>
      
      <Authenticated>
        <div className="flex flex-col items-center">
          <Header/>
          <div className="">
            This is a home page!!
          </div>
        </div>
      </Authenticated>
      
  </div>
    </>
  )
}
