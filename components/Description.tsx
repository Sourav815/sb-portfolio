"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Experience } from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export function Description() {
  const [activeTab, setActiveTab] = useState("Experience");
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="subheading bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[0.63rem] font-medium tracking-tight text-transparent md:text-base w-full"
        >
          <div className="flex flex-col items-center p-6">
            {/* Buttons */}
            <div className="flex mb-6 bg-transparent border-[0.1px] border-gray-400 p-2 text-amber-200 space-x-1">
              <button
                onClick={() => setActiveTab("Experience")}
                className={`px-3 py-2 rounded-full hover:bg-slate-700 hover:text-white ${
                  activeTab === "Experience"
                    ? "bg-slate-700 text-white border-2"
                    : "bg-transparent"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("Skills")}
                className={`px-3 py-2 rounded-full hover:bg-slate-700 hover:text-white ${
                  activeTab === "Skills"
                    ? "bg-slate-700 text-white border-2"
                    : "bg-transparent"
                }`}
              >
                Skill
              </button>
              <button
                onClick={() => setActiveTab("Education")}
                className={`px-3 py-2 rounded-full hover:bg-slate-700 hover:text-white ${
                  activeTab === "Education"
                    ? "bg-slate-700 text-white border-2"
                    : "bg-transparent"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("Achievements")}
                className={`px-3 py-2 rounded-full hover:bg-slate-700 hover:text-white ${
                  activeTab === "Achievements"
                    ? "bg-slate-700 text-white border-2"
                    : "bg-transparent"
                }`}
              >
                Achievement
              </button>
            </div>

            {/* Divs */}
          </div>
        </motion.h1>
      </LampContainer>
      <div className="w-full duration-300">
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Education" && <Education />}
        {activeTab === "Skills" && <Skills />}
      </div>
    </div>
  );
}
