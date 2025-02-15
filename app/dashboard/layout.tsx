import Link from "next/link";
import { Home, Hotel, Users, BookOpen, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen flex flex-col">
   <Navbar/>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Dashboard Menu</h2>
          </div>
          <nav className="mt-4">
            <Link
              href="/dashboard"
              className="flex items-center p-3 hover:bg-gray-700"
            >
              <Home className="h-5 w-5 mr-2" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/manage-hotel"
              className="flex items-center p-3 hover:bg-gray-700"
            >
              <Hotel className="h-5 w-5 mr-2" />
              Manage Hotel
            </Link>
            <Link
              href="/dashboard/bookings"
              className="flex items-center p-3 hover:bg-gray-700"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Bookings
            </Link>
            <Link
              href="/dashboard/guests"
              className="flex items-center p-3 hover:bg-gray-700"
            >
              <Users className="h-5 w-5 mr-2" />
              Guests
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center p-3 hover:bg-gray-700"
            >
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Link>
          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}