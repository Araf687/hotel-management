"use client";
import { useState } from "react";
import Image from "next/image";
import { PenLine, Share2, Star, Trash } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Assuming you're using shadcn/ui for the card
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn/ui for the button
import Link from "next/link";
import dummyImage from "@/assets/property/dummyPropertyImg.avif";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import api from "@/config/api";

interface PropertyCardProps {
  id: number;
  name: string;
  address: string;
  per_night_cost: number;
  available_rooms: number;
  image: string;
  average_rating: number;
  image_url?:string;
  mutate:()=>void;
}

export default function PropertyCard({
  id,
  name,
  address,
  per_night_cost,
  available_rooms,
  image_url,
  average_rating,
  mutate
}: PropertyCardProps) {

  const deleteProperty=(id:number)=>{
    api.post(`properties/${id}`).then(res=>{
      if(res.status===200){
        console.log(res.data)
        mutate();
      }
    }).catch(err=>{
      console.log(err.response)
    })
  }
  return (
    <>
      {" "}
      <Card>
        {/* Property Image */}
        <div className="relative h-48 w-full">
          <Image
            src={image_url || dummyImage}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Property Details */}
        <CardHeader className="p-4">
          <h3 className="text-xl font-semibold">
            <Link
              href={`/dashboard/manage-hotel/${id}`}
              className="hover:text-blue-600"
            >
              {name}
            </Link>
          </h3>

          <p className="text-sm text-gray-600">{address}</p>
        </CardHeader>

        <CardContent className="p-4 pt-0">
          {/* Cost Per Night */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Cost per night:</span>
            <span className="font-semibold">${per_night_cost}</span>
          </div>

          {/* Available Rooms */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Available rooms:</span>
            <span className="font-semibold">{available_rooms}</span>
          </div>

          {/* Average Rating */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Rating:</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 font-semibold">
                {average_rating.toFixed(1)}
              </span>
            </div>
          </div>
        </CardContent>

        {/* Book Now Button */}
        <CardFooter className="p-4 pt-2 flex justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={`/dashboard/edit-property/${id}`}
              className="hover:text-sky-600"
            >
              <PenLine size={17} />
            </Link>
            <Link href={`#`} className="hover:text-blue-600">
              <Share2 size={17} />
            </Link>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Trash className="cursor-pointer hover:tex-red-600"/>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                <Button onClick={() => deleteProperty(id)} variant="destructive">
                  Delete User
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
