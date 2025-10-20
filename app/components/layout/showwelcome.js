"use client"
import ShowWelcomeJs from "@/app/hook/showWelcome";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import CursorCircle from "../CursorCircle";
import { Cairo } from "next/font/google";


const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["700"], // تختار الوزن اللي عايزه
});



function ShowwelcomeL() {
  let showWelcome = ShowWelcomeJs();
  console.log(showWelcome);
  return (
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
            className={`text-5xl text-red-600 font-bold ${cairo.className}`}
          >
            {" "}
            <CursorCircle />
            مرحبـــا
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ShowwelcomeL;
