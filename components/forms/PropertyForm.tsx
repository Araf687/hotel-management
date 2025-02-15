
"use client"; // This makes it a client component

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropertyFormData, propertyFormSchema } from "@/lib/schema";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FileInput from "../ui/custom/FileInput";




interface PropertyFormProps {
  formData: PropertyFormData;
  submitData: (data: PropertyFormData) => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ formData }) => {
  const  form= useForm<PropertyFormData>({
    defaultValues: formData, // Populate form fields with initial data
    resolver: zodResolver(propertyFormSchema), // Use Zod resolver for validation
  });
  const { register, handleSubmit, formState: { errors } } = form;

  const submitForm: SubmitHandler<PropertyFormData> = (data) => {
    
    console.log(data); // Call the parent's onSubmit handler with form data
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
      {/* Property Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Property Name
        </label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          className="mt-2 block w-full bg-white tracking-wide"
        />
        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Property Address
        </label>
        <Input
          id="address"
          type="text"
          {...register("address")}
          className="mt-2 block w-full bg-white tracking-wide"
        />
        {errors.address && <span className="text-sm text-red-500">{errors.address.message}</span>}
      </div>

      {/* Property Image */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Property Image
        </label>
       <FileInput name="image" form={form}/>
        {errors.image && <span className="text-sm text-red-500">{errors.image.message}</span>}
      </div>

      {/* Average Rating */}
      <div>
        <label htmlFor="avg_rating" className="block text-sm font-medium text-gray-700">
          Average Rating (1-5)
        </label>
        <Input
          id="avg_rating"
          type="number"
          min="1"
          max="5"
          {...register("avg_rating", { valueAsNumber: true })}
          className="mt-2 block w-full bg-white tracking-wide"
        />
        {errors.avg_rating && <span className="text-sm text-red-500">{errors.avg_rating.message}</span>}
      </div>

      {/* Per Night Cost */}
      <div>
        <label htmlFor="perNightCost" className="block text-sm font-medium text-gray-700">
          Per Night Cost
        </label>
        <Input
          id="perNightCost"
          type="number"
          min="0"
          {...register("cost_per_night", { valueAsNumber: true })}
          className="mt-2 block w-full bg-white tracking-wide"
        />
        {errors.cost_per_night && <span className="text-sm text-red-500">{errors.cost_per_night.message}</span>}
      </div>

      {/* Available Rooms */}
      <div>
        <label htmlFor="available_rooms" className="block text-sm font-medium text-gray-700">
          Available Rooms
        </label>
        <Input
          id="available_rooms"
          type="number"
          min="1"
          {...register("available_rooms", { valueAsNumber: true })}
          className="mt-2 block w-full bg-white tracking-wide"
        />
        {errors.available_rooms && <span className="text-sm text-red-500">{errors.available_rooms.message}</span>}
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <Button type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default PropertyForm;
