"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/admin/HeroSection";
import Sidebar from "../components/admin/sidenav";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
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

      {/* Main layout: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar (not fixed anymore, just sticky) */}
        <aside className="hidden md:block w-64 sticky top-0 self-start">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 md:p-10">
          <HeroSection user={user} handleLogout={handleLogout} />
        </main>
      </div>

      {/* ✅ Footer sits below content + sidebar */}
      <Footer />
    </div>
  );
}
