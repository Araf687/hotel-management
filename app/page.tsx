import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#f5f5f5] to-[#ffffff] dark:from-[#1a202c] dark:to-[#2d3748] min-h-screen flex flex-col items-center justify-center px-8 py-20 sm:px-16 sm:py-32">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-16">
      {/* <Image
  src="https://via.placeholder.com/200x100.png?text=Hotel+Logo"
  alt="Hotel Logo"
  width={200}
  height={100}
  priority
/> */}

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
          Welcome to Hotel Management System
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mt-4 max-w-xl">
          Manage bookings, rooms, and services with ease. Everything you need to run your hotel efficiently.
        </p>
      </div>

      {/* Call to Action (CTA) */}
      <div className="w-full max-w-xl text-center mb-12">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Ready to get started? Access your dashboard or log in to manage your hotel.
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {/* Login Button */}
        <Link
          href="/auth"
          className="bg-primary text-white  font-semibold rounded-full py-3 px-6 w-full sm:w-auto text-center transition-colors hover:bg-primary-dark dark:hover:bg-primary-light shadow-lg hover:shadow-2xl"
        >
          Login to Dashboard
        </Link>

        {/* Book a Room Button */}
        <Link
          href="#"
          className="bg-secondary text-white text-black font-semibold rounded-full py-3 px-6 w-full sm:w-auto text-center transition-colors hover:bg-secondary-dark dark:hover:bg-secondary-light shadow-lg hover:shadow-2xl"
        >
          Book a Room
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="mt-24 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} [Hotel Name]. All rights reserved.</p>
        <p>Made with ❤️ for a better hotel experience.</p>
      </footer>
    </div>
  );
}
