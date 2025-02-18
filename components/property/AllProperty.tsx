'use client';
import useSWR from "swr";
import PropertyCard from "../PropertyCard";

interface Property {
    id: number;
    name: string;
    address: string;
    image: string;
    available_rooms: number;
    per_night_cost: number;
    average_rating: number;
    description: string;
    created_at: string; // ISO 8601 date format string
    updated_at: string; // ISO 8601 date format string
  }
  

const AllProperty = () => {
    
    const { data:properties, mutate,error } = useSWR<Property[]>('properties');
    console.log(properties);
    return ( <>
     {properties?.map((property, index) => (
          <PropertyCard key={index} {...property} mutate={mutate}/>
        ))}</> );
}
 
export default AllProperty;