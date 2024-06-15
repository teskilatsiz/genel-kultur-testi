"use client";
import React, { useState, useEffect, useRef } from "react";
import SoruKarti from "./bilesenler/SoruKarti";
import CevapKarti from "./bilesenler/CevapKarti";
import { sorulariGetir } from "./yardimcilar";
import Image from "next/image";
import { FaLightbulb, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page() {
  const [sorular, setSorular] = useState<
    { soru: string; cevaplar: { dogru: string; yanlis: string }; ipucu: string }[]
  >([]);
  const [aktifSoruIndex, setAktifSoruIndex] = useState(0);
  const [cevapHakki, setCevapHakki] = useState(3);
  const [testBitti, setTestBitti] = useState(false);
  const [kalanSure, setKalanSure] = useState(10);
  const [dogruCevapSayisi, setDogruCevapSayisi] = useState(0);
  const [secilenCevap, setSecilenCevap] = useState<boolean | null>(null);
  const [ipucu, setIpucu] = useState<string | null>(null);
  const sayacRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    sorulariGetir().then((gelenSorular) => {
      setSorular(gelenSorular);
    });
  }, []);

  useEffect(() => {
    sayacRef.current = setInterval(() => {
      setKalanSure((prevSure) => prevSure - 1);
    }, 1000);

    return () => {
      clearInterval(sayacRef.current!);
    };
  }, [aktifSoruIndex]);

  useEffect(() => {
    if (kalanSure === 0) {
      clearInterval(sayacRef.current!);
      handleCevapla(false);
    }
  }, [kalanSure]);

  const ipucuGoster = () => {
    setIpucu(sorular[aktifSoruIndex].ipucu);
  };

  const handleCevapla = (dogruMu: boolean) => {
    setSecilenCevap(dogruMu);

    setTimeout(() => {
      if (dogruMu) {
        setDogruCevapSayisi((prev) => prev + 1);
      } else {
        setCevapHakki((prev) => prev - 1);
        if (cevapHakki === 1) {
          setTestBitti(true);
          return;
        }
      }

      if (aktifSoruIndex < sorular.length - 1) {
        setAktifSoruIndex((prev) => prev + 1);
        setKalanSure(10);
        setIpucu(null);
      } else {
        setTestBitti(true);
      }

      setSecilenCevap(null);
    }, 500);
  };

  const testiYenidenBaslat = () => {
    setAktifSoruIndex(0);
    setCevapHakki(3);
    setTestBitti(false);
    setKalanSure(10);
    setDogruCevapSayisi(0);
    setIpucu(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 p-4 md:p-8">
      <div className="container mx-auto max-w-md md:max-w-2xl">
        {testBitti ? (
          <div className="text-white text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Genel Kültür Testi Bitti!
            </h2>
            <p className="text-base md:text-lg">
              Skorunuz: {dogruCevapSayisi} / {sorular.length}
            </p>
            <button
              onClick={testiYenidenBaslat}
              className="mt-4 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200"
            >
              Tekrar Başla
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center w-full mb-4">
              <div className="text-white font-semibold text-sm md:text-base">
                Kalan Cevap Hakkı: {cevapHakki}
              </div>
              <div className="text-white font-semibold text-sm md:text-base">
                Kalan Süre: {kalanSure}
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <SoruKarti soru={sorular[aktifSoruIndex]?.soru || ""} />
            </div>
            <div className="mt-8 md:flex md:flex-wrap md:justify-center md:gap-4 flex-col items-center space-y-4 md:space-y-0">
              {sorular[aktifSoruIndex]?.cevaplar &&
                Object.entries(sorular[aktifSoruIndex].cevaplar).map(
                  ([key, cevap], index) => (
                    <CevapKarti
                      key={index}
                      cevap={cevap}
                      onCevapla={() => handleCevapla(key === "dogru")}
                      aktifSoruIndex={aktifSoruIndex}
                      secilenCevap={secilenCevap}
                      yon={key === "dogru" ? "sag" : "sol"}
                    />
                  )
                )}
            </div>
            {ipucu && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg text-gray-800 relative flex items-center w-full md:w-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background:
                      "linear-gradient(to bottom, #800080, #4B0082)",
                  }}
                >
                  <FaLightbulb className="text-2xl text-white" />
                </div>
                <p className="text-sm">{ipucu}</p>
              </div>
            )}
            <div className="flex justify-center mt-4 w-full md:w-auto">
              <motion.button
                onClick={ipucuGoster}
                className="text-white font-bold py-2 px-4 rounded transition duration-300"
                style={{
                  background: "linear-gradient(to bottom, #800080, #4B0082)",
                }}
                disabled={ipucu !== null}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                İpucu
              </motion.button>
            </div>
          </>
        )}
      </div>

      <footer className="mt-8 text-white text-center">
        <p>Teşkilatsız tarafından geliştirilmiştir.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="https://twitter.com/teskilatsiz" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl" />
          </a>
          <a href="https://linkedin.com/in/teskilatsiz" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/teskilatsiz" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl" />
          </a>
        </div>
      </footer>
    </main>
  );
}
