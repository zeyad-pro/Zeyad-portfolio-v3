"use client";
import { motion } from "framer-motion";

import ShowWelcomeJs from "@/app/hook/showWelcome";
import CursorCircle from "../CursorCircle";
import ParticlesBackground from "../ParticlesBackground";
import Navbar from "../navbar";
import Footer from "../footer";
import ShowwelcomeL from "./showwelcome";
import LenisProvider from "../lenis";

function Body({ children, geistMono, geistSans, cairo }) {
  let showWelcome = ShowWelcomeJs();
  return (
    <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
    cz-shortcut-listen="true" 
    >
      <ShowwelcomeL cairo={cairo} />
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
          <Navbar />
          <ParticlesBackground />
          {children}
        </LenisProvider>
        <CursorCircle />
        <Footer />
      </motion.div>
    </body>
  );
}

export default Body;
