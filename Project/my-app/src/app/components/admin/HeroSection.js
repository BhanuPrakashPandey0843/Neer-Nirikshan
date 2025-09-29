"use client";

export default function HeroSection({ user, handleLogout }) {
  return (
    <div className="text-center mb-10 pt-20"> {/* ✅ Added top padding */}
      {/* Greeting */}
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome, <span className="text-green-600">{user.email}</span> 
      </h1>
      <p className="mt-3 text-gray-600 text-lg">
        Here’s your dashboard. Manage your account and explore insights below.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* User Info Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Account Info
          </h2>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span>{" "}
            <span className="break-all">{user.email}</span>
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Payment:</span>{" "}
            <span className="text-green-600 font-semibold">N/A</span>
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
          <p className="text-3xl font-bold">1</p>
          <p className="text-sm text-gray-700 mt-1">Across devices</p>
        </div>

        {/* Stats Card 2 */}
        <div className="bg-gradient-to-tr from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-md text-gray-800">
          <h2 className="text-lg font-semibold mb-2">Subscription Status</h2>
          <p className="text-3xl font-bold text-green-700">Active</p>
          <p className="text-sm text-gray-700 mt-1">Access granted</p>
        </div>
      </div>
    </div>
  );
}
