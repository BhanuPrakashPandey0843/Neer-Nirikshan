"use client";

import { motion } from "framer-motion";
import { RiMailLine, RiInstagramLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xovnvbop"); // replace with your Formspree ID

  return (
    <section className="font-[Rubik] bg-[#F9FFF9] text-[#120B06] px-6 py-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section - Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-sm text-[#4BB04F] font-medium uppercase tracking-wider">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Have questions or feedback? <br />
            <span className="text-[#4BB04F]">Reach out to Neer Nirikshan!</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            We're here to help you understand groundwater quality and water safety.
            Share your questions, feedback, or suggestions, and our team will get back to you promptly.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Instagram Card */}
            <div className="flex items-center gap-3 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4BB04F]/10 text-[#4BB04F] text-2xl">
                <RiInstagramLine />
              </span>
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-gray-500 text-sm">@neernirikshan</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-3 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4BB04F]/10 text-[#4BB04F] text-2xl">
                <RiMailLine />
              </span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500 text-sm">contact@neernirikshan.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-3 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4BB04F]/10 text-[#4BB04F] text-2xl">
                <RiPhoneLine />
              </span>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-500 text-sm">+91 123 456 7890</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-3 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4BB04F]/10 text-[#4BB04F] text-2xl">
                <RiMapPinLine />
              </span>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-500 text-sm">123 Water St, Clean City, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-3xl p-8 sm:p-10"
        >
          <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
            Send us your queries
          </h3>

          {state.succeeded ? (
            <p className="text-green-600 text-center font-medium">
              ✅ Message Sent Successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  required
                  className="w-full p-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB04F]"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  required
                  className="w-full p-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB04F]"
                />
              </div>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB04F]"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  required
                  className="w-full p-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB04F]"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full p-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB04F]"
                />
              </div>

              <textarea
                name="query"
                placeholder="Describe your question or feedback..."
                rows="4"
                required
                className="w-full p-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB04F]"
              ></textarea>
              <ValidationError prefix="Message" field="query" errors={state.errors} />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#4BB04F] text-white font-medium py-3 rounded-full shadow hover:bg-[#3a9440] transition-colors"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
