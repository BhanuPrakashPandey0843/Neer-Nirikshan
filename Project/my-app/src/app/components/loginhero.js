"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Loginhero = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.user && data.token) {
        // ✅ Save user in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Save JWT token in cookies (so middleware can read it)
        document.cookie = `auth_token=${data.token}; path=/; max-age=3600; secure; samesite=strict`;

        // ✅ Redirect based on paid status
        if (data.user.paid) {
          router.push("/dashboard");
        } else {
          router.push("/payment");
        }
      } else {
        setError(data.error || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT SIDE - FORM */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center lg:text-left">
            Login
          </h1>
          <p className="text-gray-500 mt-3 text-center lg:text-left text-base">
            Access your dashboard
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 tracking-wide font-semibold bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center shadow-md"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>
            )}
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-100 to-indigo-200 items-center justify-center p-6">
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
            alt="Login Illustration"
            className="max-w-sm md:max-w-md w-full h-auto drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Loginhero;
