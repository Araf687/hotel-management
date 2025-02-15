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

interface PropertyCardProps {
  id: number ;
  name: string;
  address: string;
  cost_per_night: number;
  available_rooms: number;
  image: string;
  avg_rating: number;
}

export default function PropertyCard({
  id,
  name,
  address,
  cost_per_night,
  available_rooms,
  image,
  avg_rating,
}: PropertyCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Property Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Property Details */}
      <CardHeader className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{address}</p>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        {/* Cost Per Night */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700">Cost per night:</span>
          <span className="font-semibold">${cost_per_night}</span>
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
              {avg_rating.toFixed(1)}
            </span>
          </div>
        </div>
      </CardContent>

      {/* Book Now Button */}
      <CardFooter className="p-4 pt-2 flex ">
        {/* <Button variant={"outline"}>Book Now</Button> */}
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
  );
}
