// types.ts
export interface PropertyFormData {
    name: string;
    address: string;
    image: string;
    averageRating: number;
    perNightCost: number;
    availableRooms: number;
  }

  export interface PropertyDetails {
    name: string;
    address: string;
    image: string;
    average_rating: number;
    per_night_cost: number;
    available_rooms: number;
    description: string;
  }

  export interface SessionUser {
    id: number;
    name:string;
    email: string;
    token: string;
  }

  export interface Property {
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