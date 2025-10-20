"use client";
import { motion } from "framer-motion";
import { Geist, Geist_Mono } from "next/font/google";
import ShowWelcomeJs from "@/app/hook/showWelcome";
import CursorCircle from "../CursorCircle";
import ParticlesBackground from "../ParticlesBackground";
import Navbar from "../navbar";
import Footer from "../footer";
import ShowwelcomeL from "./showwelcome";
import LenisProvider from "../lenis";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Body({ children }) {
      let showWelcome = ShowWelcomeJs();
      console.log(showWelcome);
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      cz-shortcut-listen="true"
    >
      {/* شاشة الترحيب */}
      <ShowwelcomeL />

      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{
          y: showWelcome ? "100%" : "0%",
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
        </LenisProvider>
        <CursorCircle />
        <Footer />
      </motion.div>
    </body>
  );
}

export default Body;
