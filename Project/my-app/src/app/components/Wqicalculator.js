"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

// ✅ Standards
const standards = {
  WHO: {
    pH: [6.5, 8.5],
    TDS: [0, 1000],
    Hardness: [0, 500],
    Chloride: [0, 250],
    Nitrate: [0, 50],
    Fluoride: [0, 1.5],
    Iron: [0, 0.3],
  },
  BIS: {
    pH: [6.5, 8.5],
    TDS: [0, 500],
    Hardness: [0, 200],
    Chloride: [0, 250],
    Nitrate: [0, 45],
    Fluoride: [0, 1.0],
    Iron: [0, 0.3],
    Sulphate: [0, 200],
    Arsenic: [0, 0.01],
    Lead: [0, 0.01],
  },
};

// ✅ Parameter weights
const weights = {
  pH: 4,
  TDS: 3,
  Hardness: 2,
  Chloride: 2,
  Nitrate: 5,
  Fluoride: 4,
  Iron: 3,
  Sulphate: 2,
  Arsenic: 5,
  Lead: 5,
};

// ✅ Categories
const categories = [
  { range: [0, 25], label: "Excellent", color: "#22c55e" },
  { range: [26, 50], label: "Good", color: "#84cc16" },
  { range: [51, 75], label: "Poor", color: "#eab308" },
  { range: [76, 100], label: "Very Poor", color: "#f97316" },
  { range: [101, Infinity], label: "Unsuitable", color: "#dc2626" },
];

const Wqicalculator = () => {
  const [inputs, setInputs] = useState({});
  const [standard, setStandard] = useState("WHO");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input
  const handleChange = (param, value) => {
    let val = parseFloat(value);
    if (isNaN(val) || val < 0) {
      setInputs({ ...inputs, [param]: "" });
      return;
    }
    if (param === "pH" && val > 14) return;
    setInputs({ ...inputs, [param]: val });
  };

  // Compute WQI
  const calculateWQI = () => {
    const selectedStandard = standards[standard];
    let sumQW = 0;
    let sumW = 0;
    let details = [];

    Object.keys(selectedStandard).forEach((param) => {
      const value = inputs[param];
      if (value !== undefined && value !== "") {
        const [min, max] = selectedStandard[param];
        let Qi;

        if (param === "pH") {
          const ideal = 7.0;
          Qi = (Math.abs(value - ideal) / (max - min)) * 100;
        } else {
          Qi = (value / max) * 100;
        }

        const Wi = weights[param] || 1;
        sumQW += Qi * Wi;
        sumW += Wi;

        details.push({
          param,
          value,
          safeRange: `${min} - ${max}`,
          safeMax: max,
          statusIcon:
            value >= min && value <= max ? (
              <FaCheckCircle className="text-green-600" />
            ) : (
              <FaTimesCircle className="text-red-600" />
            ),
          statusText: value >= min && value <= max ? "Safe" : "Unsafe",
        });
      }
    });

    if (sumW === 0) return;

    const WQI = (sumQW / sumW).toFixed(2);

    let category = categories.find(
      (c) => WQI >= c.range[0] && WQI <= c.range[1]
    );
    if (!category) category = categories[categories.length - 1];

    setResult({ WQI, category, details });
  };

  // Export as PDF
  const exportPDF = () => {
    if (!result) return;
    setLoading(true);
    const doc = new jsPDF();
    doc.text(`Water Quality Index Report (${standard})`, 14, 20);
    doc.text(`WQI Score: ${result.WQI} - ${result.category.label}`, 14, 30);
    autoTable(doc, {
      head: [["Parameter", "Value", "Safe Range", "Status"]],
      body: result.details.map((d) => [
        d.param,
        d.value,
        d.safeRange,
        d.statusText,
      ]),
      startY: 40,
    });
    doc.save("WQI_Report.pdf");
    setLoading(false);
  };

  // Export as CSV
  const exportCSV = () => {
    if (!result) return;
    setLoading(true);
    let csv = "Parameter,Value,Safe Range,Status\n";
    result.details.forEach((d) => {
      csv += `${d.param},${d.value},${d.safeRange},${d.statusText}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "WQI_Report.csv";
    link.click();
    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#120B06] mb-8 text-center leading-snug"
        >
          Water Quality Index (WQI){" "}
          <span className="text-[#4BB04F]">Calculator</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 text-center"
        >
          Enter key water quality parameters and instantly calculate the{" "}
          <span className="font-semibold text-[#4BB04F]">WQI score</span> to
          assess whether your groundwater is safe for drinking, domestic, or
          agricultural purposes.
        </motion.p>

        {/* Standard Selection */}
        <div className="mb-10 flex flex-col items-center">
          <label className="mb-4 text-lg font-semibold text-gray-800">
            Select Water Quality Standard
          </label>
          <div className="flex gap-6 flex-wrap justify-center">
            {Object.keys(standards).map((std) => (
              <button
                key={std}
                onClick={() => setStandard(std)}
                className={`px-6 py-3 rounded-xl text-lg font-medium shadow-md transition-all duration-300
                  ${
                    standard === std
                      ? "bg-green-600 text-white scale-105 shadow-lg"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {std}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center max-w-sm">
            <span className="font-semibold text-green-600">WHO</span> – World
            Health Organization,{" "}
            <span className="font-semibold text-green-600">BIS</span> – Bureau
            of Indian Standards.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {Object.keys(standards[standard]).map((param) => (
            <div key={param} className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                {param}
                <FaInfoCircle
                  title={`Why it matters: ${param} is an important water quality indicator.`}
                  className="text-gray-400 cursor-pointer"
                />
              </label>
              <input
                type="number"
                step="0.01"
                value={inputs[param] ?? ""}
                onChange={(e) => handleChange(param, e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder={`Safe: ${standards[standard][param][0]} - ${standards[standard][param][1]}`}
              />
            </div>
          ))}
        </div>

        {/* Calculate & Reset Buttons */}
        <div className="flex justify-center mb-6 gap-4">
          <button
            onClick={calculateWQI}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Calculate WQI
          </button>
          <button
            onClick={() => {
              setInputs({});
              setResult(null);
            }}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 p-6 border rounded-lg bg-white shadow"
          >
            {/* WQI Score */}
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              WQI Score:{" "}
              <span style={{ color: result.category.color }}>
                {result.WQI}
              </span>{" "}
              –{" "}
              <span style={{ color: result.category.color }}>
                {result.category.label}
              </span>
            </h3>

            {/* Interpretation */}
            <p className="mt-2 text-gray-600">
              {parseFloat(result.WQI) <= 50
                ? "✅ Water is suitable for drinking."
                : parseFloat(result.WQI) <= 75
                ? "⚠️ Water may need treatment before use."
                : "❌ Water is unsuitable for drinking."}
            </p>

            {/* Recommendations */}
            {result.details.some((d) => d.statusText === "Unsafe") && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
                <h4 className="font-semibold text-red-700 mb-2">
                  Recommendations:
                </h4>
                <ul className="list-disc list-inside text-sm text-red-600">
                  {result.details
                    .filter((d) => d.statusText === "Unsafe")
                    .map((d) => (
                      <li key={d.param}>
                        {d.param} exceeds safe limits. Consider treatment.
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto mt-4">
              <table className="w-full border border-gray-300 border-collapse bg-white text-gray-900">
                <thead>
                  <tr className="bg-green-600 text-white font-semibold text-left">
                    <th className="p-2">Parameter</th>
                    <th className="p-2">Value</th>
                    <th className="p-2">Safe Range</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {result.details.map((d) => (
                    <tr
                      key={d.param}
                      className="border-t border-gray-300 bg-white"
                    >
                      <td className="p-2">{d.param}</td>
                      <td className="p-2">{d.value}</td>
                      <td className="p-2">{d.safeRange}</td>
                      <td className="p-2 flex items-center gap-2">
                        {d.statusIcon} {d.statusText}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={result.details}>
                  <XAxis dataKey="param" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4BB04F" name="Actual Value" />
                  <Bar
                    dataKey="safeMax"
                    fill="#e5e7eb"
                    name="Safe Limit"
                    opacity={0.6}
                  />
                </BarChart>
              </ResponsiveContainer>

              <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                  innerRadius="70%"
                  outerRadius="100%"
                  data={[
                    {
                      name: "WQI",
                      value: parseFloat(result.WQI),
                      fill: result.category.color,
                    },
                  ]}
                  startAngle={180}
                  endAngle={-180}
                >
                  <RadialBar
                    minAngle={15}
                    clockWise
                    dataKey="value"
                    background
                  />
                  <Legend />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>

            {/* Export Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={exportPDF}
                disabled={loading}
                className={`${
                  loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                } text-white px-4 py-2 rounded transition`}
              >
                {loading ? "Generating..." : "Export PDF"}
              </button>
              <button
                onClick={exportCSV}
                disabled={loading}
                className={`${
                  loading ? "bg-gray-400" : "bg-gray-700 hover:bg-gray-800"
                } text-white px-4 py-2 rounded transition`}
              >
                {loading ? "Generating..." : "Export CSV"}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Wqicalculator;
