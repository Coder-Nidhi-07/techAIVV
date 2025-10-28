import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "SEO & Content Strategy",
    description:
      "Rank higher and attract the right audience. We blend data-driven SEO with compelling content that builds trust and drives conversions.",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Search Marketing",
    description:
      "Target high-intent audiences with optimized campaigns that deliver measurable ROI and consistent lead generation.",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Social Media Campaigns",
    description:
      "Leverage storytelling and data-driven strategies to grow your brand, increase engagement, and convert audiences effectively.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Website & UX Design",
    description:
      "We design high-converting websites that not only look beautiful but are strategically optimized to turn visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Branding & Identity",
    description:
      "Craft a unique brand identity with stunning visuals and a consistent message that sets you apart in your industry.",
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231664?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Digital Strategy & Growth",
    description:
      "Get a clear digital roadmap. From analytics to automation, we help your business grow smart, fast, and sustainably.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 px-6">
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
            Core Services
          </span>
        </motion.h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We provide a complete suite of digital marketing solutions designed to
          help your business scale faster, smarter, and more effectively.
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
            <div className="relative overflow-hidden">
              <motion.img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <motion.a
                whileHover={{ x: 5 }}
                href="/contact"
                className="mt-4 inline-block text-[#7c3aed] font-medium"
              >
                Talk to an expert →
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
          Get Your Free Growth Audit
        </motion.a>
      </div>
    </section>
  );
}
