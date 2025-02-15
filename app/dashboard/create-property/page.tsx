"use server";

// pages/create-property.tsx
import React from "react";
import PropertyForm from "@/components/forms/PropertyForm";
import { PropertyFormData } from "@/lib/schema";



const Page = () => {
  // Initialize the form data with default values
  const form = {
    name: "",
    address: "",
    image: "",
    avg_rating: 1,
    cost_per_night: 0,
    available_rooms: 1,
    description:"",
  }

  // Handle form submission
  async function onSubmitProperty(data: PropertyFormData) {
    "use server"; // mark function as a server action (fixes the error)
  
    // TODO add item deletion logic
    return null;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Create a New Property</h1>
      <PropertyForm formData={form} submitData={onSubmitProperty} />
    </div>
  );
};

export default Page;
