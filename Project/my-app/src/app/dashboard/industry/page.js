"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/admin/sidenav";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Factory,
  AlertTriangle,
  CheckCircle,
  FileText,
  Droplet,
  Download,
  Activity,
} from "lucide-react";

// Mock Data
const waterConsumption = [
  { month: "Jan", usage: 4000, limit: 5000 },
  { month: "Feb", usage: 3500, limit: 5000 },
  { month: "Mar", usage: 4200, limit: 5000 },
  { month: "Apr", usage: 4800, limit: 5000 },
  { month: "May", usage: 5100, limit: 5000 },
  { month: "Jun", usage: 3800, limit: 5000 },
];

const effluentData = [
  { name: "Treated", value: 85, color: "#22c55e" },
  { name: "Untreated", value: 5, color: "#ef4444" },
  { name: "Recycled", value: 10, color: "#3b82f6" },
];

const alerts = [
  { id: 1, type: "Critical", message: "Discharge pH level exceeded 8.5", time: "2 hours ago" },
  { id: 2, type: "Warning", message: "Water consumption nearing daily limit", time: "5 hours ago" },
];

export default function IndustryPage() {
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
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Industry Compliance</h1>
                <p className="text-gray-600 mt-2">Monitor water usage, effluent discharge, and compliance status.</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                 <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition shadow-sm">
                  <Download className="w-4 h-4" />
                  <span>Report</span>
                </button>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg border border-green-200 shadow-sm">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Compliant</span>
                </div>
              </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Daily Consumption</h3>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Droplet className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">4,250 <span className="text-sm font-normal text-gray-500">Liters</span></p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">85% of daily limit used</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Effluent Quality (WQI)</h3>
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">72 <span className="text-sm font-normal text-gray-500">Good</span></p>
                <div className="flex items-center mt-2 text-green-600 text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>Within permissible limits</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Active Alerts</h3>
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">{alerts.length}</p>
                <div className="space-y-2 mt-3">
                  {alerts.map(alert => (
                    <p key={alert.id} className="text-xs text-red-600 truncate flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>
                      {alert.message}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              
              {/* Usage Chart */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Water Consumption vs Limit</h2>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={waterConsumption}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Legend />
                      <Bar dataKey="usage" name="Usage (L)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="limit" name="Limit (L)" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Effluent Pie Chart */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Effluent Management</h2>
                <div className="h-[300px] w-full flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={effluentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {effluentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  {effluentData.map((entry, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold" style={{ color: entry.color }}>{entry.value}%</p>
                      <p className="text-xs text-gray-500">{entry.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compliance Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Compliance Audit Log</h2>
                <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-600 text-sm">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Date</th>
                      <th className="px-6 py-4 font-semibold">Parameter</th>
                      <th className="px-6 py-4 font-semibold">Reading</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-gray-600">Feb 01, 2024</td>
                      <td className="px-6 py-4 font-medium text-gray-800">pH Level</td>
                      <td className="px-6 py-4 text-gray-600">7.2</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Pass</span>
                      </td>
                      <td className="px-6 py-4 text-blue-600 text-sm cursor-pointer hover:underline">View Report</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-gray-600">Feb 01, 2024</td>
                      <td className="px-6 py-4 font-medium text-gray-800">TDS</td>
                      <td className="px-6 py-4 text-gray-600">450 ppm</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Pass</span>
                      </td>
                      <td className="px-6 py-4 text-blue-600 text-sm cursor-pointer hover:underline">View Report</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-gray-600">Jan 31, 2024</td>
                      <td className="px-6 py-4 font-medium text-gray-800">Heavy Metals</td>
                      <td className="px-6 py-4 text-gray-600">Detected (Trace)</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Warning</span>
                      </td>
                      <td className="px-6 py-4 text-blue-600 text-sm cursor-pointer hover:underline">View Report</td>
                    </tr>
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
