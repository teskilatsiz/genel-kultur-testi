"use client";
import React from "react";
import { motion } from "framer-motion";

interface CevapKartiProps {
  cevap: string;
  onCevapla: () => void;
  aktifSoruIndex: number;
  secilenCevap: boolean | null;
  yon: "sag" | "sol";
}

const CevapKarti: React.FC<CevapKartiProps> = ({
  cevap,
  onCevapla,
  aktifSoruIndex,
  secilenCevap,
  yon,
}) => {
  return (
    <motion.div
      key={aktifSoruIndex}
      onClick={onCevapla}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: secilenCevap === null ? 0 : secilenCevap === (yon === "sag") ? 500 : -500,
        rotate: secilenCevap === null ? 0 : secilenCevap === (yon === "sag") ? 15 : -15,
      }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-40 h-40 rounded-xl shadow-lg flex items-center justify-center text-black bg-white hover:bg-gray-200 cursor-pointer"
    >
      <span className="text-lg font-semibold">{cevap}</span>
    </motion.div>
  );
};

export default CevapKarti;
