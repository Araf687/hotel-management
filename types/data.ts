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
    avg_rating: number;
    cost_per_night: number;
    available_rooms: number;
    description: string;
  }

  export interface SessionUser {
    id: number;
    name:string;
    email: string;
    token: string;
  }