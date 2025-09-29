"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Wqicalculator from "../../components/Wqicalculator";
import Sidebar from "../../components/admin/sidenav";

export default function WQIDashboardPage() {
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
    <div className="scroll-smooth min-h-screen flex flex-col bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white">
      {/* Navbar */}
      <Navbar />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (fixed/sticky) */}
        <aside className="hidden md:block w-64 flex-shrink-0 overflow-y-auto sticky top-0 h-screen">
          <Sidebar />
        </aside>

        {/* Main content (scrollable) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <Wqicalculator />
        </main>
      </div>

      {/* Footer */}
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}
