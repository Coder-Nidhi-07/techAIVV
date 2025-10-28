import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl font-bold text-center bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h1>
      <motion.p
        className="mt-3 text-slate-600 text-center text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Choose your preferred way to connect with us. We're just a message away!
      </motion.p>

      {/* Contact Form */}
      <motion.section
        className="mt-10 p-8 rounded-2xl border bg-white shadow-lg hover:shadow-2xl transition"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-semibold text-2xl flex items-center gap-2">
          <FaEnvelope className="text-[#7c3aed]" /> Send a Message
        </h2>
        <form className="mt-6 grid gap-4">
          <input placeholder="Your name" className="border rounded-md px-4 py-3 focus:ring-2 ring-[#7c3aed]" />
          <input type="email" placeholder="Your email" className="border rounded-md px-4 py-3 focus:ring-2 ring-[#7c3aed]" />
          <textarea placeholder="How can we help?" className="border rounded-md px-4 py-3 h-32 focus:ring-2 ring-[#7c3aed]" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] shadow-md"
          >
            Send Message ✉️
          </motion.button>
        </form>
      </motion.section>

      {/* Click to Call */}
      <motion.section
        className="mt-10 p-8 rounded-2xl border bg-white shadow-lg hover:shadow-2xl transition"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-semibold text-2xl flex items-center gap-2">
          <FaPhoneAlt className="text-[#06b6d4]" /> Call Us
        </h2>
        <p className="mt-2 text-slate-600">Talk directly with our support team.</p>
        <a
          href="tel:+1234567890"
          className="inline-block mt-5 px-6 py-3 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white font-semibold shadow-md hover:scale-105 transition"
        >
          📞 Call +1 (234) 567-890
        </a>
      </motion.section>

      {/* Book Appointment */}
      <motion.section
        className="mt-10 p-8 rounded-2xl border bg-white shadow-lg hover:shadow-2xl transition"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-semibold text-2xl flex items-center gap-2">
          <FaCalendarAlt className="text-[#7c3aed]" /> Book an Appointment
        </h2>
        <p className="mt-2 text-slate-600">Schedule a free consultation at your convenience.</p>
        <a
          href="https://calendly.com/your-company/strategy-call"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 px-6 py-3 rounded-md border border-[#7c3aed] text-[#7c3aed] font-semibold hover:bg-[#7c3aed] hover:text-white transition"
        >
          📅 Book on Calendly
        </a>
      </motion.section>

      {/* Extra: Location Map + Info */}
      <motion.section
        className="mt-12 rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.020579978136!2d-122.41941528468116!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c38d1c9ef%3A0x80726c47f5ac0b8b!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1677725414301"
          className="w-full h-72 border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </motion.section>

      {/* Footer social links */}
      <div className="text-center mt-10 space-x-6 text-slate-600">
        <span>📍 <FaMapMarkerAlt className="inline text-[#7c3aed]" /> San Francisco, CA</span>
        <p className="mt-2">Follow us on social media: 🌐</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-[#7c3aed]">LinkedIn</a>
          <a href="#" className="hover:text-[#06b6d4]">Twitter</a>
          <a href="#" className="hover:text-[#7c3aed]">Instagram</a>
        </div>
      </div>
    </main>
  );
}
