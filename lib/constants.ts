export const ENV_VARIABLES = {
  AXIOS_BASE_URL: process.env.NEXT_PUBLIC_AXIOS as string,
  SECRET_KEY: process.env.NEXT_PUBLIC_SECRET as string,

};

export const properties = [
  {
    id: 1,
    name: "Luxury Suite Hotel",
    address: "123 Main St, New York, NY",
    cost_per_night: 250,
    available_rooms: 10,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.7,
    description: "Enjoy a luxurious stay at our hotel. We offer a variety of amenities including a pool, spa, and fine dining.",
  },
  {
    id: 2,
    name: "Beachfront Resort",
    address: "456 Ocean Dr, Miami, FL",
    cost_per_night: 350,
    available_rooms: 5,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.9,
    description: "Relax and unwind at our beachfront resort. We offer stunning views, a private beach, and world-class dining.",
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    address: "789 Mountain Rd, Aspen, CO",
    cost_per_night: 200,
    available_rooms: 8,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.5,
    description: "Experience the beauty of the mountains at our lodge. We offer cozy rooms, a fireplace, and scenic views.",
  },
  {
    id: 4,
    name: "City Center Hotel",
    address: "101 Downtown Ave, Chicago, IL",
    cost_per_night: 300,
    available_rooms: 12,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.6,
    description: "Stay in the heart of the city at our hotel. We offer modern rooms, a fitness center, and easy access to local attractions.",
  },
  {
    id: 5,
    name: "Riverside Retreat",
    address: "202 River Ln, Austin, TX",
    cost_per_night: 180,
    available_rooms: 6,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.4,
    description: "Relax by the river at our retreat. We offer spacious rooms, a riverside patio, and outdoor activities.",
  },
  {
    id: 6,
    name: "Sunset Paradise",
    address: "303 Beach Blvd, San Diego, CA",
    cost_per_night: 400,
    available_rooms: 4,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    avg_rating: 4.8,
    description: "Experience a tropical getaway at our resort. We offer beachfront villas, a pool, and a tiki bar.",
  },
  {
    id: 7,
    name: "Golden Sands Resort",
    address: "404 Shoreline Dr, Honolulu, HI",
    cost_per_night: 500,
    available_rooms: 3,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.9,
    description: "Relax in luxury at our beachfront resort. We offer spacious suites, a private beach, and gourmet dining.",
  },
  {
    id: 8,
    name: "Alpine Chalet",
    address: "505 Snowy Peak, Vail, CO",
    cost_per_night: 280,
    available_rooms: 7,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.7,
    description: "Stay in a cozy chalet in the mountains. We offer rustic rooms, a fireplace, and stunning views.",
  },
  {
    id: 9,
    name: "Urban Oasis",
    address: "606 Metro St, Seattle, WA",
    cost_per_night: 220,
    available_rooms: 9,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.6,
    description: "Escape to our urban oasis in the city. We offer modern rooms, a rooftop bar, and easy access to local attractions and nightlife.",  
  },
  {
    id: 10,
    name: "Lakeside Manor",
    address: "707 Lakeview Dr, Tahoe, CA",
    cost_per_night: 320,
    available_rooms: 5,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.8,
    description: "Enjoy a relaxing stay at our lakeside manor. We offer elegant suites, a lakeside patio, and water activities.",
  },
  {
    id: 11,
    name: "Historic Inn",
    address: "808 Old Town Rd, Charleston, SC",
    cost_per_night: 150,
    available_rooms: 10,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.3,
    description: "Experience the charm of the city at our historic inn. We offer cozy rooms, a courtyard, and southern  hospitality.",  
  },
  {
    id: 12,
    name: "Tropical Haven",
    address: "909 Palm St, Key West, FL",
    cost_per_night: 450,
    available_rooms: 2,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.9,
    description: "Escape to our tropical haven in paradise. We offer beachfront bungalows, a pool, and island-inspired dining.",
  },
  {
    id: 13,
    name: "Desert Mirage",
    address: "1010 Sand Dune Rd, Phoenix, AZ",
    cost_per_night: 190,
    available_rooms: 6,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.5,
    description: "Relax in the desert at our mirage. We offer spacious rooms, a pool, and stunning views of the mountains.",
  },
  {
    id: 14,
    name: "Skyline Suites",
    address: "1111 Highrise Ave, San Francisco, CA",
    cost_per_night: 380,
    available_rooms: 8,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.7,
    description: "Stay in luxury at our high-rise suites. We offer modern rooms, a rooftop pool, and panoramic views of the city.",
  },
  {
    id: 15,
    name: "Countryside Cottage",
    address: "1212 Meadow Ln, Nashville, TN",
    cost_per_night: 170,
    available_rooms: 4,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.4,
    description: "Relax in the countryside at our cozy cottage. We offer rustic rooms, a fireplace, and scenic views of the meadow.", 
  },
  {
    id: 16,
    name: "Ocean Breeze Villa",
    address: "1313 Coastal Hwy, Myrtle Beach, SC",
    cost_per_night: 270,
    available_rooms: 7,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    avg_rating: 4.6,
    description: "Enjoy a seaside getaway at our beachfront villa. We offer spacious suites, a private beach, and ocean views.",
  },
];