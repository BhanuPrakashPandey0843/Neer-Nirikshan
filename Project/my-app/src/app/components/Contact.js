"use client";

import { motion } from "framer-motion";
import { RiMailLine, RiInstagramLine } from "react-icons/ri";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xovnvbop"); // replace with your Formspree form ID

  return (
    <section className="font-[Rubik] bg-[#F9FFF9] text-[#120B06] px-6 py-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm text-[#4BB04F] font-medium">Contact us</p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            We value your input. <br />
            <span className="text-[#4BB04F]">Share with us!</span>
          </h2>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            In our concise Frequently Asked Questions section, we’ve compiled
            straightforward answers to address common queries about our
            product/service.
          </p>

          <div className="flex flex-col gap-6 mt-6">
            {/* Instagram */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F98531]/10 text-[#F98531] text-xl">
                <RiInstagramLine />
              </span>
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-gray-600 text-sm">@ntcc_cse</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4BB04F]/10 text-[#4BB04F] text-xl">
                <RiMailLine />
              </span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600 text-sm">helpersntcc@gmail.com</p>
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
          className="bg-white shadow-md rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
            We value your input
          </h3>

          {state.succeeded ? (
            <p className="text-green-600 text-center font-medium">
              ✅ Message Sent Successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name fields */}
              <div className="grid grid-cols-2 gap-3">
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

              {/* Email */}
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB04F]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              {/* Location + Phone */}
              <div className="grid grid-cols-2 gap-3">
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

              {/* Problem Statement */}
              <textarea
                name="problem_statement"
                placeholder="Describe your problem statement..."
                rows="3"
                required
                className="w-full p-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BB04F]"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="problem_statement"
                errors={state.errors}
              />

              {/* Submit */}
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
