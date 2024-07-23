'use client';

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated } from "convex/react";
import { Authenticated } from "convex/react";

export function Header(){

    return     <>  

        <div className="flex items-start justify-between w-full bg-slate-600 p-2 items-center">
            <div className="">Big Brain</div>
            <div className="flex gap-2 items-center">
                <div><UserButton/></div>
                <div><ModeToggle/></div>
            </div>
        </div> 


    </>
}

/* 
<div className="bg-slate-500">
            <div className="container mx-auto flex justify-between items-center">
                            <div>Header</div>
                            <div className="pt-3 flex flex-col items-center">
                                
                                <Unauthenticated>
                                    <Button asChild>
                                        <SignInButton />
                                    </Button>
                                </Unauthenticated>
                            </div>
                            <div className="flex items-center gap-5">
                                <Authenticated>
                                    <div className="p-2">  <UserButton /> </div>
                                    <div><ModeToggle/></div>
                                </Authenticated>
                            </div>
            </div>    
        </div>   
*/