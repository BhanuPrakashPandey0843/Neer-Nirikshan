"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ✅ Get logged-in user from localStorage (set after login)
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);

      if (parsedUser.paid) {
        setUser(parsedUser);
      } else {
        alert("⚠️ You must complete payment to access dashboard.");
        router.push("/payment"); // redirect if not paid
      }
    } else {
      router.push("/login"); // redirect if not logged in
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12">
        {/* Greeting */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, <span className="text-green-600">{user.email}</span> 🎉
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Here’s your premium dashboard. Manage your account and explore insights below.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Account Info</h2>
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p>
              <span className="font-medium">Payment:</span>{" "}
              <span className="text-green-600 font-semibold">Verified ✅</span>
            </p>
            <button
              onClick={handleLogout}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          {/* Stats Card 1 */}
          <div className="bg-gradient-to-tr from-green-100 to-green-200 p-6 rounded-2xl shadow-md text-gray-800">
            <h2 className="text-lg font-semibold mb-2">Active Sessions</h2>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-gray-600 mt-1">Across devices</p>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-gradient-to-tr from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-md text-gray-800">
            <h2 className="text-lg font-semibold mb-2">Subscription Status</h2>
            <p className="text-3xl font-bold text-green-700">Active</p>
            <p className="text-sm text-gray-600 mt-1">Lifetime access unlocked</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
