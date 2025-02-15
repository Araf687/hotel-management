'use client';
import Link from "next/link";
import { LogOutIcon, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button"; // Assuming you're using shadcn/ui for the button
import { useSessionData } from "@/context/SessionProvider";
import { logout } from "@/lib/auth";
import { log } from "console";
import { useRouter } from "next/navigation";

export default function Navbar() {
const {sessionUser}=useSessionData();
const router=useRouter();

const handleLogout=()=>{
  if(sessionUser?.token){
    logout(sessionUser.token);
  }
  router.push("/")
}
  return <div>
       {/* Navbar */}
       <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-xl font-bold text-gray-800">
                Hotel Management
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-800" onClick={handleLogout}>
                <LogOutIcon className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
  </div>
}