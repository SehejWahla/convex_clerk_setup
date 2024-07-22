'use client';

import Image from "next/image";
import { Unauthenticated } from "convex/react";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated } from "convex/react";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (<>     <Unauthenticated>
    <SignInButton />
  </Unauthenticated>
  <Authenticated>
    <UserButton />
  </Authenticated></>)
  
}
