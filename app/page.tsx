'use client';

import Image from "next/image";
import { Unauthenticated, useMutation, useQuery } from "convex/react";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated } from "convex/react";
import { UserButton } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
export default function Home() {
  const createDocument = useMutation(api.documents.createDocument)
  const documents = useQuery(api.documents.getDocuments)
  return (<>     <Unauthenticated>
    <SignInButton />
  </Unauthenticated>
  <Authenticated>
    <div className="flex flex-col items-center">
      
    
    <div className="p-2">  <UserButton /> </div>

    <div> 
      <button onClick={()=>{
        createDocument({title : 'Doc1'})
      }}>create doc</button>
    </div>

    <div> 
     {documents?.map((item)=>(
      <div key={item._id}>{item.title}</div>
     ))}
    </div>

    </div>

  </Authenticated></>)
  
}
