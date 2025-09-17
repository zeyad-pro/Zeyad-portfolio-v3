"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CursorCircle from "./components/CursorCircle";
import ParticlesBackground from "./components/ParticlesBackground";
import LenisProvider from "./components/lenis";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cairo = Cairo({
  variable: "--font-Cairo",
  subsets: ["normal"],
  weight: ["400"], // لازم تحدد الوزن عشان Lalezar مش variable font
});

export default function RootLayout({ children }) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Zeyad Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
        cz-shortcut-listen="true"
      >
        {/* شاشة الترحيب */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-background z-50" // ← أهم تعديل هنا!
            >
              <motion.h1
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`text-5xl text-red-500 font-bold ${cairo.className}`}
              >
                {" "}
                <CursorCircle />
                مرحبـا
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: "-100%", opacity: 0 }} // 👈 يبدأ من فوق
          animate={{
            y: showWelcome ? "100%" : "0%", // 👈 ينزل لتحت لحد 0%
            opacity: showWelcome ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="min-h-screen"
        >
          <LenisProvider>
            {" "}
            <Navbar />
            {/* <ParticlesBackground /> */}
            {children}
            <CursorCircle />
            <Footer />
          </LenisProvider>
        </motion.div>
      </body>
    </html>
  );
}
