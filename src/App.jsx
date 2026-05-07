import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Building2,
  FileText,
  CalendarDays,
  ArrowRight,
  Mail,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

// 引入刚做好的3D地球
import Globe from "./components/Globe";

// 你原来的 jurisdictions 数据可以保留在这里
const jurisdictions = [
  {
    name: "Vanuatu",
    tag: "Financial licensing",
    summary:
      "Company setup, financial dealer licensing, renewal, PI insurance, audit and ongoing compliance tracking.",
  },
  {
    name: "Belize",
    tag: "LLC & compliance",
    summary:
      "LLC formation, economic substance considerations, tax registration timing and redomiciliation overview.",
  },
  {
    name: "SVG",
    tag: "Company services",
    summary: "Company setup, banking, ongoing compliance and licensing guidance.",
  },
  {
    name: "Dubai",
    tag: "Financial & corporate",
    summary: "Corporate setup, financial licensing, banking and compliance support.",
  },
  {
    name: "Mauritius",
    tag: "Financial licensing",
    summary: "Company setup, banking, investment services and ongoing compliance.",
  },
  {
    name: "Nevis",
    tag: "Company services",
    summary: "Offshore company formation, banking and compliance support.",
  },
  {
    name: "Cook Islands",
    tag: "Company & trust",
    summary: "Company and trust formation, banking and compliance guidance.",
  },
];

export default function App() {
  return (
    <div>
      {/* 页面标题 */}
      <h1 className="text-3xl font-bold mb-4">Welcome to Entity & Licence Hub</h1>

      {/* 3D 地球 */}
      <div className="mb-10">
        <Globe />
      </div>

      {/* 示例: jurisdictions 列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jurisdictions.map((j) => (
          <div
            key={j.name}
            className="p-4 border rounded-md shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="font-semibold text-xl">{j.name}</h2>
            <p className="text-sm text-gray-600">{j.tag}</p>
            <p className="mt-2 text-gray-700">{j.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
