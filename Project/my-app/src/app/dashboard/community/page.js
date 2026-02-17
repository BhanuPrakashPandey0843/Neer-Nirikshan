"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/admin/sidenav";
import { 
  MessageSquare, 
  ThumbsUp, 
  MapPin, 
  Award, 
  User, 
  Send, 
  Filter,
  AlertCircle 
} from "lucide-react";

// Mock Data
const initialReports = [
  {
    id: 1,
    user: "Rahul Sharma",
    avatar: "R",
    location: "Sector 12, Noida",
    title: "Water leakage in main pipeline",
    description: "Huge water wastage near the community park due to a broken pipe. Please address immediately.",
    likes: 12,
    comments: 4,
    status: "Open",
    time: "2 hours ago",
    tag: "Leakage"
  },
  {
    id: 2,
    user: "Priya Singh",
    avatar: "P",
    location: "Village Rampur",
    title: "Contaminated water supply",
    description: "The water from the handpump has turned yellowish and smells bad.",
    likes: 24,
    comments: 8,
    status: "Investigating",
    time: "5 hours ago",
    tag: "Contamination"
  },
  {
    id: 3,
    user: "Amit Kumar",
    avatar: "A",
    location: "Industrial Zone C",
    title: "Unauthorized borewell digging",
    description: "Observed some construction work digging a new borewell without permits.",
    likes: 8,
    comments: 1,
    status: "Resolved",
    time: "1 day ago",
    tag: "Violation"
  }
];

const topContributors = [
  { name: "Priya Singh", points: 1250, badge: "Water Guardian" },
  { name: "Rahul Sharma", points: 980, badge: "Eco Warrior" },
  { name: "Vikram Malhotra", points: 850, badge: "Scout" },
];

export default function CommunityPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState(initialReports);
  const [newReport, setNewReport] = useState({ title: "", description: "", location: "" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReport.title || !newReport.description) return;

    const report = {
      id: reports.length + 1,
      user: user.email || "Anonymous",
      avatar: user.email ? user.email[0].toUpperCase() : "U",
      location: newReport.location || "Unknown Location",
      title: newReport.title,
      description: newReport.description,
      likes: 0,
      comments: 0,
      status: "Open",
      time: "Just now",
      tag: "Report"
    };

    setReports([report, ...reports]);
    setNewReport({ title: "", description: "", location: "" });
    setIsFormOpen(false);
  };

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
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Community Hub</h1>
                <p className="text-gray-600 mt-2">Connect, report, and solve water issues together.</p>
              </div>
              <button 
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition flex items-center justify-center shadow-lg shadow-green-600/20"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                Report an Issue
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Feed */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Report Form */}
                {isFormOpen && (
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100 animate-in slide-in-from-top-4">
                    <h3 className="font-bold text-gray-800 mb-4">New Report</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input 
                        type="text" 
                        placeholder="Issue Title (e.g. Pipe Leakage)" 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        value={newReport.title}
                        onChange={(e) => setNewReport({...newReport, title: e.target.value})}
                      />
                      <input 
                        type="text" 
                        placeholder="Location" 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        value={newReport.location}
                        onChange={(e) => setNewReport({...newReport, location: e.target.value})}
                      />
                      <textarea 
                        placeholder="Describe the issue..." 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none h-32"
                        value={newReport.description}
                        onChange={(e) => setNewReport({...newReport, description: e.target.value})}
                      />
                      <div className="flex justify-end gap-3">
                        <button 
                          type="button" 
                          onClick={() => setIsFormOpen(false)}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                        >
                          Cancel
                        </button>
                        <button 
                          type="submit" 
                          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                          Submit Report
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Filters */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {['All', 'Leakage', 'Contamination', 'Violation'].map((filter) => (
                    <button key={filter} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition whitespace-nowrap">
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Reports List */}
                {reports.map((report) => (
                  <div key={report.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                          {report.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{report.user}</h4>
                          <p className="text-xs text-gray-500">{report.time} • {report.location}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${report.status === 'Open' ? 'bg-red-100 text-red-600' : 
                          report.status === 'Resolved' ? 'bg-green-100 text-green-600' : 
                          'bg-yellow-100 text-yellow-600'}`}>
                        {report.status}
                      </span>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-bold text-gray-800 text-lg">{report.title}</h3>
                      <p className="text-gray-600 mt-2 text-sm leading-relaxed">{report.description}</p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm font-medium">{report.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm font-medium">{report.comments}</span>
                        </button>
                      </div>
                      <button className="text-green-600 text-sm font-semibold hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar: Leaderboard & Stats */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <h2 className="font-bold text-gray-800 text-lg">Top Contributors</h2>
                  </div>
                  <div className="space-y-4">
                    {topContributors.map((contributor, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold text-xs">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{contributor.name}</p>
                            <p className="text-xs text-green-600 font-medium">{contributor.badge}</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gray-600">{contributor.points} pts</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-2 border border-green-200 text-green-600 rounded-lg hover:bg-green-50 transition text-sm font-medium">
                    View Full Leaderboard
                  </button>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl shadow-lg text-white">
                  <h3 className="font-bold text-lg mb-2">Impact Summary</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <p className="text-green-100 text-sm">Issues Resolved</p>
                      <p className="text-3xl font-bold">1,248</p>
                    </div>
                    <div>
                      <p className="text-green-100 text-sm">Water Saved (Est.)</p>
                      <p className="text-3xl font-bold">50k L</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
