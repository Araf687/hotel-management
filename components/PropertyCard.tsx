"use client";
import { useState } from "react";
import Image from "next/image";
import { PenLine, Share2, Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Assuming you're using shadcn/ui for the card
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn/ui for the button
import Link from "next/link";
import dummyImage from "@/assets/property/dummyPropertyImg.avif";

interface PropertyCardProps {
  id: number;
  name: string;
  address: string;
  per_night_cost: number;
  available_rooms: number;
  image: string;
  average_rating: number;
}

export default function PropertyCard({
  id,
  name,
  address,
  per_night_cost,
  available_rooms,
  image,
  average_rating,
}: PropertyCardProps) {
  return (
    <>
      {" "}
      <Card>
        {/* Property Image */}
        <div className="relative h-48 w-full">
          <Image
            src={image || dummyImage}
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
        <CardFooter className="p-4 pt-2 flex">
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
        </CardFooter>
      </Card>
    </>
  );
}
