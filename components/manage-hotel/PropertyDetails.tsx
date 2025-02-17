'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { PropertyDetails } from '@/types/data';  // Assuming this is the correct type
import useSWR from 'swr';
import dummyImage from "@/assets/property/dummyPropertyImg.avif";

const PropertyDetailsPage = ({ propertyId }: { propertyId: string }) => {
  // Fetching property data using SWR hook
  const { data: singleProperty, error } = useSWR<PropertyDetails>(`/properties/${propertyId}`);

  // Error handling
  if (error) {
    return <div>Error loading property details</div>;
  }

  // Loading state
  if (!singleProperty) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg space-y-2 shadow-lg p-4">
        {/* Property Image */}
        <div className="relative h-64">
          <Image
            src={singleProperty.image || dummyImage}
            alt={singleProperty.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Property Details */}
        <div className='py-3'>
          <h1 className="text-3xl font-bold mb-2">{singleProperty.name}</h1>
          <p className="text-gray-600 mb-4">{singleProperty.address}</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{singleProperty.average_rating} / 5</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{singleProperty.description}</p>

          {/* Pricing and Availability */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">${singleProperty.per_night_cost} / night</span>
              <span className="text-sm text-gray-600">{singleProperty.available_rooms} rooms available</span>
            </div>
            {/* <Button>
              Book Now
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
