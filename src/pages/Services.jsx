import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI-Powered Marketing",
    description:
      "Harness artificial intelligence to automate, analyze, and optimize your digital campaigns in real-time.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Data Analytics & Insights",
    description:
      "Unlock hidden patterns and actionable insights through data visualization and intelligent reporting.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Content Marketing",
    description:
      "Create and distribute impactful content that builds brand trust, drives engagement, and boosts conversions.",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Social Media Optimization",
    description:
      "Engage audiences across platforms with strategic campaigns, trending creatives, and consistent brand voice.",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Performance Advertising",
    description:
      "Maximize ROI with smart ad placement, real-time bidding optimization, and conversion-driven strategy.",
    image:
      "https://images.unsplash.com/photo-1556767576-cfba9fd31f58?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Brand Experience Design",
    description:
      "Design user-centered brand experiences that are emotionally engaging and visually unforgettable.",
    image:
      "https://images.unsplash.com/photo-1612831455543-9dbf1eaa46f9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 px-6"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]">
            Premium Services
          </span>
        </motion.h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Empower your business with next-gen marketing, automation, and design
          solutions crafted for modern growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <motion.img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Text */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <motion.a
                whileHover={{ x: 6 }}
                href="/contact"
                className="mt-4 inline-block text-[#7c3aed] font-medium"
              >
                Learn More →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Let’s Build Something Great
        </motion.a>
      </div>
    </section>
  );
}
