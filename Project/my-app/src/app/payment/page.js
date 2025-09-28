"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PaymentPage() {
  const router = useRouter();

  const handlePayment = async () => {
    const token = document.cookie.split("auth_token=")[1];
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();

    if (res.ok) {
      alert("✅ Payment successful!");
      router.push("/dashboard");
    } else {
      alert(data.error || "❌ Payment failed");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
          Unlock Premium Access
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Upgrade your account and gain full access to exclusive features and
          your personalized dashboard.
        </p>
      </motion.div>

      {/* Payment Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center px-6"
      >
        <div className="bg-gray-800 rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            Premium Plan
          </h2>
          <p className="text-gray-400 mb-6">One-time payment for lifetime access</p>
          <p className="text-5xl font-extrabold mb-6">
            <span className="text-yellow-400">$9.99</span>
          </p>

          <ul className="text-left space-y-3 mb-8">
            <li>✔ Full Dashboard Access</li>
            <li>✔ Priority Support</li>
            <li>✔ Exclusive Features</li>
          </ul>

          <button
            onClick={handlePayment}
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl shadow-md transition-all"
          >
            Complete Payment
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
