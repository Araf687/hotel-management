"use server";

// pages/create-property.tsx
import React from "react";
import PropertyForm from "@/components/forms/PropertyForm";
import { PropertyFormData } from "@/lib/schema";
import api from "@/config/api";



const Page = () => {
  // Initialize the form data with default values
  const form = {
    name: "",
    address: "",
    image: "",
    average_rating: 1,
    per_night_cost: 0,
    available_rooms: 1,
    description:"",
  }


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Create a New Property</h1>
      <PropertyForm formData={form} type={"create"}/>
    </div>
  );
};

export default Page;
