import { Unauthenticated, useMutation, useQuery } from "convex/react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";


export function LandingPage(){
    return <>
    <div className="flex justify-center">
        <Unauthenticated>
            <Button asChild>
                <SignInButton />
            </Button>
        </Unauthenticated>
    </div>
</>
}