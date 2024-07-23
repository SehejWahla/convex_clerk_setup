'use client';

import Image from "next/image";
import { Unauthenticated, useMutation, useQuery } from "convex/react";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated } from "convex/react";
import { UserButton } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
export default function Home() {
  const createDocument = useMutation(api.documents.createDocument)
  const documents = useQuery(api.documents.getDocuments)
  return (
  <>   

      <div className="pt-3 flex flex-col items-center">
              <Unauthenticated>
                <Button asChild>
                  <SignInButton />
                </Button>
              </Unauthenticated>
      </div>

  <Authenticated>
    <div className="flex flex-col items-center gap-5">
      
    
    <div className="p-2">  <UserButton /> </div>

    <div><ModeToggle/></div>

    <div> 
      <Button onClick={()=>{
        createDocument({title : 'Doc1'})
      }}>create doc</Button>
    </div>

    <div> 
     {documents?.map((item)=>(
      <div key={item._id}>{item.title}</div>
     ))}
    </div>

    </div>

  </Authenticated></>)
  
}
