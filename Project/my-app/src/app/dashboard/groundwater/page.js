"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/admin/sidenav";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Droplets,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Calendar,
} from "lucide-react";

// Mock Data
const groundwaterData = [
  { month: "Jan", level: 12.5, rainfall: 15 },
  { month: "Feb", level: 12.8, rainfall: 10 },
  { month: "Mar", level: 13.2, rainfall: 5 },
  { month: "Apr", level: 14.5, rainfall: 2 },
  { month: "May", level: 15.8, rainfall: 0 },
  { month: "Jun", level: 15.2, rainfall: 120 },
  { month: "Jul", level: 13.5, rainfall: 300 },
  { month: "Aug", level: 11.8, rainfall: 280 },
  { month: "Sep", level: 11.2, rainfall: 150 },
  { month: "Oct", level: 11.5, rainfall: 40 },
  { month: "Nov", level: 12.0, rainfall: 10 },
  { month: "Dec", level: 12.3, rainfall: 5 },
];

const recentReadings = [
  { id: 1, location: "Sector 4, Borewell 1", level: "12.3 mbgl", status: "Normal", date: "2024-02-01" },
  { id: 2, location: "Industrial Area, Zone B", level: "28.5 mbgl", status: "Critical", date: "2024-02-01" },
  { id: 3, location: "Village Pond Sensor", level: "8.2 mbgl", status: "Good", date: "2024-01-31" },
];

export default function GroundwaterPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.push("/login");
    }
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="scroll-smooth min-h-screen flex flex-col bg-gradient-to-br from-[#F3FFF6] via-[#FAFFFA] to-white">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:block w-64 flex-shrink-0 overflow-y-auto sticky top-0 h-screen">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Groundwater Monitoring</h1>
              <p className="text-gray-600 mt-2">Real-time tracking of water table levels and trends.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Avg Water Level</h3>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">12.3 <span className="text-sm font-normal text-gray-500">mbgl</span></p>
                <div className="flex items-center mt-2 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>2.1% Improved</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Critical Zones</h3>
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">3</p>
                <div className="flex items-center mt-2 text-red-500 text-sm">
                  <span>Requires Attention</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Sensors Active</h3>
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">24/25</p>
                <div className="flex items-center mt-2 text-gray-500 text-sm">
                  <span>Updated 5 mins ago</span>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Annual Water Level Trends (2023-24)</h2>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={groundwaterData}>
                    <defs>
                      <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis label={{ value: 'Depth (mbgl)', angle: -90, position: 'insideLeft' }} reversed />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="level" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorLevel)" 
                      name="Water Level (mbgl)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Readings Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800">Recent Sensor Readings</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-600 text-sm">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Location</th>
                      <th className="px-6 py-4 font-semibold">Water Level</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentReadings.map((reading) => (
                      <tr key={reading.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-gray-800 font-medium">{reading.location}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600 font-medium">{reading.level}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold
                            ${reading.status === 'Normal' ? 'bg-blue-100 text-blue-700' : 
                              reading.status === 'Good' ? 'bg-green-100 text-green-700' : 
                              'bg-red-100 text-red-700'}`}>
                            {reading.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {reading.date}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
