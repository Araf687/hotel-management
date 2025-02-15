// lib/schemas.ts
import { z } from "zod";

// Sign-in schema
export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Register schema
export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const propertyFormSchema = z.object({
  name: z.string().min(1, "Property name is required"),
  address: z.string().min(1, "Address is required"),
  image: z.string().url("Image URL must be valid").min(1, "Image URL is required"),
  avg_rating: z.number().min(1, "Rating must be between 1 and 5").max(5, "Rating must be between 1 and 5"),
  cost_per_night: z.number().min(0, "Per night cost must be a positive number"),
  available_rooms: z.number().min(1, "At least 1 room must be available"),
  description: z.string().nullable(),
});




// Export types
export type SignInFormData = z.infer<typeof signInSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type PropertyFormData = z.infer<typeof propertyFormSchema>;