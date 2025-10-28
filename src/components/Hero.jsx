import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.png";





export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Digital marketing that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]">
              grows your revenue
            </span>{" "}
            — predictably.
          </h1>

          <p className="mt-6 text-slate-700 text-lg leading-relaxed">
            At <span className="font-semibold text-slate-800">TechAIVV</span>, we
            combine data-driven strategy, creative design, and AI-powered automation
            to help ambitious brands achieve consistent growth. From SEO to paid
            campaigns, we turn your marketing spend into measurable ROI.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Request a Proposal
            </motion.button>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed33] to-[#06b6d433] blur-3xl rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 6 }}
          ></motion.div>

          <motion.img
            src={heroImage}
            alt="Digital Marketing"
            className="relative w-full rounded-xl shadow-2xl object-cover h-80 z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>
      </div>

      {/* Floating Decorative Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-tr from-[#7c3aed33] to-[#06b6d433] rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tr from-[#06b6d433] to-[#7c3aed33] rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>
    </section>
  );
}
