"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Groundwater Monitoring", icon: BarChart3, path: "/dashboard/groundwater" },
    { name: "Farmer Mode", icon: User, path: "/dashboard/farmer" },
    { name: "Community Mode", icon: User, path: "/dashboard/community" },
    { name: "Industry Mode", icon: User, path: "/dashboard/industry" },
    { name: "WQI Calculator", icon: BarChart3, path: "/dashboard/wqi" },
    { name: "Logout", icon: LogOut, action: "logout" }, // special logout button
  ];

  // ✅ Detect Mobile Screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className={`fixed top-0 left-0 h-screen ${
        isOpen ? "w-64" : "w-20"
      } bg-white shadow-xl border-r border-gray-200 text-gray-800 flex flex-col justify-between z-50 transition-all duration-500`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
          {isOpen && (
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-bold tracking-wide text-green-600"
            >
              My Dashboard
            </motion.h2>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? (
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Menu */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="mt-6 space-y-2 px-3"
        >
          {menuItems.map((item, idx) => {
            const isActive = pathname === item.path;
            return (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.action === "logout" ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 p-3 rounded-xl transition-all relative group hover:bg-red-50 hover:text-red-500 text-left"
                  >
                    <item.icon className="w-5 h-5 text-gray-600 group-hover:text-red-500" />
                    {isOpen && (
                      <span className="text-sm font-medium tracking-wide">
                        {item.name}
                      </span>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all relative group ${
                      isActive
                        ? "bg-green-100 text-green-700 font-semibold"
                        : "hover:bg-gray-100 hover:text-green-600"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        isOpen ? "text-gray-600 group-hover:text-green-600" : "mx-auto"
                      } transition-all`}
                    />
                    {isOpen && (
                      <span className="text-sm font-medium tracking-wide">
                        {item.name}
                      </span>
                    )}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-200 text-xs text-gray-500 text-center">
        {isOpen && <p>© 2025 My App</p>}
      </div>
    </motion.aside>
  );
}
