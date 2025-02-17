import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/constants";
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn/ui for the button
import { Plus } from "lucide-react"; // Icon for the button
import Link from "next/link";
import AllProperty from "@/components/property/AllProperty";

const Page = () => {
  return (
    <div className="p-8">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-semibold">Manage Hotel</h1>
        <Link href="/dashboard/create-property"><Button className="p-3 tracking-wide">
          <Plus/> Create New Property
        </Button></Link>
        
      </div>

      {/* Subheading */}
      <h2 className="mb-6">Available Properties</h2>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
       
        <AllProperty/>
      </div>
    </div>
  );
};

export default Page;