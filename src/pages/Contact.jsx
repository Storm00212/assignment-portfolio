import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-10 text-gray-300 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I’d love to connect with you! Whether it’s a project, collaboration,
        or just a friendly hello, feel free to reach out.
      </motion.p>

      <motion.a
        href="https://wa.me/254721999564"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <FaWhatsapp size={22} />
        Chat with Me on WhatsApp
      </motion.a>
    </div>
  );
};

export default Contact;
