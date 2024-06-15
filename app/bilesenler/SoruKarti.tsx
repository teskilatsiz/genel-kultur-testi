"use client";
import React from "react";
import { motion } from "framer-motion";

interface SoruKartiProps {
  soru: string;
}

const SoruKarti: React.FC<SoruKartiProps> = ({ soru }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg text-white text-center w-full md:w-96"
    >
      <h2 className="text-2xl font-semibold mb-4">{soru}</h2>
    </motion.div>
  );
};

export default SoruKarti;
