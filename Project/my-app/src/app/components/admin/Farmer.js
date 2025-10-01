"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Farmer = () => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);

  //  Get Location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lon = pos.coords.longitude.toFixed(4);
          setLocation({ lat, lon });

          // For demo: mock groundwater data based on EC, Nitrate, Hardness
          // In real project, query dataset / API here
          const mockData = {
            EC: 800, // µS/cm
            Nitrate: 40, // mg/L
            Hardness: 220, // mg/L
          };

          // Crop recommendation logic
          let crops = [];
          let warning = "";

          if (mockData.EC < 750) {
            crops = ["Rice", "Wheat", "Vegetables"];
          } else if (mockData.EC < 2250) {
            crops = ["Cotton", "Maize", "Mustard"];
          } else {
            crops = ["Barley", "Sugarbeet (salt-tolerant)"];
            warning = " High salinity — limited crop choice.";
          }

          if (mockData.Nitrate > 50) {
            warning += " Avoid leafy vegetables due to nitrate.";
          }

          setData({ ...mockData, crops, warning });
        },
        (err) => alert("Unable to fetch location: " + err.message)
      );
    } else {
      alert("Geolocation not supported in your browser.");
    }
  };

  return (
    <section className="py-16 bg-[#F8F6F4] font-sans text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#120B06] mb-6"
      >
         Farmer <span className="text-[#4BB04F]">Mode</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg leading-relaxed"
      >
        Get groundwater quality at your location and receive crop recommendations instantly.
      </motion.p>

      {/* Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={getLocation}
        className="bg-[#4BB04F] text-white px-6 py-3 rounded-2xl shadow-md hover:bg-[#3b9440] transition mb-8"
      >
         Get My Groundwater Data
      </motion.button>

      {/* Output */}
      {location && data && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 text-left"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#120B06]">
             Location Data
          </h3>
          <p className="text-gray-700 mb-2">
            Latitude: <b>{location.lat}</b>, Longitude: <b>{location.lon}</b>
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-[#120B06]">
             Groundwater Quality
          </h3>
          <ul className="text-gray-700 list-disc pl-5 mb-3">
            <li>EC: {data.EC} µS/cm</li>
            <li>Nitrate: {data.Nitrate} mg/L</li>
            <li>Hardness: {data.Hardness} mg/L</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-[#120B06]">
             Recommended Crops
          </h3>
          <p className="text-green-700 font-medium mb-2">
            {data.crops.join(", ")}
          </p>

          {data.warning && (
            <p className="text-red-600 font-medium">{data.warning}</p>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default Farmer;
