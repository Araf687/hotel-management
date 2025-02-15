import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Button } from '../ui/button';
import { PropertyDetails } from '@/types/data';


 const property: PropertyDetails = {    
  name: "Luxury Beach Resort",
  address: "1234 Beach Resort Way, Miami, FL",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  avg_rating: 4.5,
  cost_per_night: 150,
  available_rooms: 10,
  description:
    "Enjoy a relaxing stay at our luxury beach resort. We offer a variety of amenities including a pool, spa, and fine dining.",}


const PropertyDetailsPage = ({ propertyId }: {propertyId:string}) => {
  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-lg p-4">
        {/* Property Image */}
        <div className="relative h-64">
          <Image
            src={property.image}
            alt={property.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Property Details */}
        <div className='py-3'>
          <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
          <p className="text-gray-600 mb-4">{property.address}</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{property.avg_rating} / 5</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{property.description}</p>

          {/* Pricing and Availability */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">${property.cost_per_night} / night</span>
              <span className="text-sm text-gray-600">{property.available_rooms} rooms available</span>
            </div>
            <Button>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;