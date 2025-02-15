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
    avg_rating: property?.avg_rating ?? 0,
    cost_per_night: property?.cost_per_night ?? 0,
    available_rooms: property?.available_rooms ?? 0,
    description: property?.description ?? "",
  };

  // Handle form submission
  const onSubmitProperty = (data: PropertyFormData) => {
    // TODO add item deletion logic
    return null;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Edit Property</h1>
      <PropertyForm formData={initialValue} submitData={onSubmitProperty} />
    </div>
  );
};

export default EditProperty;
