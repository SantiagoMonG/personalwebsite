"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Reusable motion variants to ensure smoother animations.
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="flex flex-col items-start justify-center min-h-[80vh] pt-20 px-12 text-left space-y-4">
        <motion.p
          className="text-6xl font-montserrat text-dark font-bold text-justify"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          I&apos;m Santiago Monroy
        </motion.p>
        <motion.div
          className="flex items-baseline space-x-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <TypeAnimation
            sequence={["Economics |", 1000, "Data Analysis |", 1000, "Data Analysis | Economics |", 1000, "Data Analysis | Economics | Energy & Technology Policy", 3000]}
            wrapper="h1"
            className="text-3xl font-montserrat text-dark font-bold"
            repeat={Infinity}
          />
        </motion.div>
        <motion.p
          className="text-lg max-w-3xl mt-2 font-lato text-dark text-justify"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          Bridging the worlds of <strong>data, policy, and technology</strong>, I analyze complex economic and regulatory challenges to inform actionable insights. With a foundation in <strong>quantitative analysis, public policy, and energy markets</strong>, my work explores the intersection of economics, industrial strategy, and emerging technologies.
        </motion.p>
        {/* Projects & Substack Links */}
        <div className="flex space-x-6 mt-6">
          <Link href="/projects">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-md font-montserrat font-semibold text-white hover:scale-105 transition-transform">
              Projects
            </button>
          </Link>
          <Link href="https://substack.com/@samongom" target="_blank">
          <Image src="/icons/substack.svg" alt="Substack" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://github.com/santiagomong" target="_blank">
            <Image src="/icons/github2.svg" alt="GitHub" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/santiago-mongom" target="_blank">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
        </div>
      </div>

      {/* About & Work Approach Section */}
      <div className="py-16">
        <motion.section
          className="max-w-6xl mx-auto px-6 py-8 md:grid md:grid-cols-2 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Column - About Me */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-dark border-b-2 border-dark pb-2">About me</h2>
            <p className="text-dark mt-4 leading-relaxed text-justify">
              Santiago Monroy is an analytical, driven, and multidisciplinary professional passionate about energy policy, climate finance, and international development.
              With a background in <strong>economics, policy, and technology</strong>, he bridges data-driven insights with impactful solutions for energy transitions.
            </p>
          </div>

          {/* Right Column - My Approach to Work */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-dark border-b-2 border-dark pb-2">My Approach to Work</h2>
            <p className="text-dark mt-4 leading-relaxed text-justify">
              I believe in <strong>data-driven decision-making</strong>, leveraging <strong>cross-functional collaboration</strong> to develop effective and sustainable policies.
              My experience in consulting and research has shaped my ability to distill complex topics into actionable strategies.
            </p>
          </div>

          {/* My Roles */}
          <div className="mt-6">
            <h2 className="text-3xl font-montserrat font-bold text-dark border-b-2 border-dark pb-2">Roles</h2>
            <ul className="list-disc list-inside text-dark mt-2 leading-relaxed text-justify space-y-2">
              <li>Energy & Climate Policy Analyst</li>
              <li>Data & Market Researcher</li>
              <li>Public Policy Consultant</li>
            </ul>
          </div>

          {/* Education */}
          <div className="mt-6 space-y-4">
            <h2 className="text-3xl font-montserrat font-bold text-dark border-b-2 border-dark pb-2">Education</h2>
            <p className="text-dark mt-2 leading-relaxed text-justify">
              MSc in Energy & Climate Policy - <strong>University of Sussex</strong>
            </p>
            <p className="text-dark mt-1 leading-relaxed text-justify">
              BA in Government & Public Policy - <strong>Universidad Panamericana</strong>
            </p>
            <p className="text-dark mt-1 leading-relaxed text-justify">
              BSc in Economics - <strong>Universidad Panamericana</strong>
            </p>
          </div>
        </motion.section>
      </div>
      
      {/* Bottom Navigation Bar */}
      <footer className="w-full text-dark py-4 mt-8 flex justify-between items-center px-12">
        <div className="flex space-x-6">
          <Image src="/icons/mail.svg" alt="Mail" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          <span>santiagomong@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/icons/phone2.svg" alt="Phone" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          <span>+1-(346)-823-0454</span>
        </div>
      </footer>
    </>
  );
}
