"use client";
import { properties } from "@/lib/constants";
import { PropertyDetails } from "@/types/data";
import PropertyForm from "../forms/PropertyForm";
import { PropertyFormData } from "@/lib/schema";

const EditProperty = ({ propertyId }: { propertyId: string }) => {
  const property = properties.find((p) => p.id.toString() === propertyId);
  const initialValue: PropertyDetails = {
    name: property?.name ?? "",
    address: property?.address ?? "",
    image: property?.image ?? "",
    average_rating: property?.average_rating ?? 0,
    per_night_cost: property?.per_night_cost ?? 0,
    available_rooms: property?.available_rooms ?? 0,
    description: property?.description ?? "",
  };



  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Edit Property</h1>
      <PropertyForm formData={initialValue} type="edit" />
    </div>
  );
};

export default EditProperty;
