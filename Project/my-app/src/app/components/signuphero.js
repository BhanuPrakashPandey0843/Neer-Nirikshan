"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signuphero = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Signup + Payment
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      // ✅ Step 1: Start payment request
      const paymentRes = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const paymentData = await paymentRes.json();

      if (!paymentRes.ok || !paymentData.success) {
        setError(paymentData.error || "Payment failed. Please try again.");
        setLoading(false);
        return;
      }

      // ✅ Step 2: Signup after successful payment
      const signupRes = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          password,
          paymentStatus: "succeeded", // ✅ backend expects this
        }),
      });

      const signupData = await signupRes.json();

      if (signupRes.ok && signupData.success) {
        // Save token and user in localStorage
        localStorage.setItem("auth_token", signupData.token);
        localStorage.setItem(
          "user",
          JSON.stringify({ email, fullName, paid: true })
        );

        alert("🎉 Account created successfully!");
        router.push("/dashboard");
      } else {
        setError(signupData.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      setError("⚠️ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex justify-center items-center px-4">
      <div className="max-w-screen-lg w-full bg-white shadow-xl rounded-xl flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT SIDE - FORM */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mt-8 text-center lg:text-left">
            Create Your Account
          </h1>
          <p className="text-gray-500 mt-2 text-center lg:text-left">
            Join us and start your journey today!
          </p>

          <form className="space-y-4 mt-6" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 
                         placeholder-gray-500 text-gray-900 text-sm 
                         focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 
                         placeholder-gray-500 text-gray-900 text-sm 
                         focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />

            {/* Password field with toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 
                           placeholder-gray-500 text-gray-900 text-sm 
                           focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                           text-sm text-indigo-600 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password field with toggle */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 
                           placeholder-gray-500 text-gray-900 text-sm 
                           focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                           text-sm text-indigo-600 font-medium"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 tracking-wide font-semibold bg-indigo-600 text-white 
                         py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 
                         flex items-center justify-center shadow-md"
            >
              {loading ? "Processing..." : "Pay & Create Account"}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Log In
            </a>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-100 to-indigo-200 items-center justify-center">
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
            alt="Signup Illustration"
            className="max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Signuphero;
