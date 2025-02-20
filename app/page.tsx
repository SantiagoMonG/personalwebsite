"use client";

import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Detect current page
  const router = useRouter();

  // Function to handle "About" navigation
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior

    if (pathname === "/") {
      // If already on the homepage, scroll smoothly to the about section
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on another page, navigate to the home page and scroll to "About"
      router.push("/#about");
    }
  }
  
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <>
      {/* Name & Subtitle Section */}
      <div className="flex flex-col items-center justify-center py-4 px-4 md:py-6">
        <motion.h1
          className="text-4xl md:text-5xl font-montserrat text-dark text-center mt-2 md:mt-4 mb-1 md:mb-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          Santiago Monroy
        </motion.h1>
        <motion.div
          className="flex items-center space-x-1 md:space-x-2 mt-1 md:mt-2 text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <TypeAnimation
            sequence={[
              "Economics |", 1000, 
              "Data Analysis |", 1000, 
              "Data Analysis | Economics |", 1000, 
              "Data Analysis | Economics | Energy & Technology Policy", 3000
            ]}
            wrapper="h2"
            className="text-lg md:text-2xl font-montserrat text-gray-600 font-semibold"
            repeat={0}
          />
        </motion.div>
      </div>

      {/* Navbar Below Name */}
    <nav className="bg-black text-white text-sm w-full py-2 md:py-3">
       <ul className="hidden md:flex justify-center space-x-4 md:space-x-8 text-md md:text-lg">
        <li><Link href="/#about" onClick={handleAboutClick} className="hover:underline">About</Link></li>
        <li><Link href="/resume" className="hover:underline">Resume</Link></li>
        <li><Link href="/projects" className="hover:underline">Slides, Charts & Projects</Link></li>
       </ul>

       <div className="md:hidden text-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white font-semibold py-2">
           ☰ Menu
        </button>
        {isOpen && (
          <ul className="bg-gray-900 text-white text-sm py-2 space-y-2">
           <li><Link href="/#about" onClick={handleAboutClick} className="block py-1">About</Link></li>
           <li><Link href="/resume" className="block py-1">Resume</Link></li>
           <li><Link href="/projects" className="block py-1">Slides, Charts & Projects</Link></li>
          </ul>
        )}
      </div>
    </nav>

      <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 md:px-12 text-center space-y-3 md:space-y-4">
        <motion.p
          className="text-base md:text-lg max-w-2xl md:max-w-3xl font-lato text-gray-700"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          Bridging the worlds of <strong>data, economics, and public policy</strong>, I analyze complex economic and regulatory challenges to inform actionable insights.
        </motion.p>


        {/* Social Links */}
        <div className="flex space-x-6 mt-4">
          <Link href="https://substack.com/@samongom" target="_blank">
            <Image src="/icons/substack2.svg" alt="Substack" width={40} height={40} className="hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://github.com/santiagomong" target="_blank">
            <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} className="hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/santiago-mongom" target="_blank">
            <Image src="/icons/linkedin3.svg" alt="LinkedIn" width={40} height={40} className="hover:scale-110 filter transition duration-300" />
          </Link>
        </div>
      </div>

      {/* About & Work Approach Section */}
      <div className="py-10 px-4 md:py-16 md:px-6" id="about">
        <motion.section
          className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Column - About Me */}
          <div>
            <h2 className="text-2xl md:text-3xl font-lato font-bold text-dark border-b-2 border-dark pb-2">About me</h2>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              I&apos;m an analytical, driven, and multidisciplinary professional passionate about 
              <strong> data-driven insights with impactful solutions</strong>, passionate about <strong>trade, energy & technology policy</strong>. 
            </p>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              <strong>Three years of consultancy experience</strong> where I evolved from an analyst to managing a small team. 
            </p>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              Track record of producing <strong>high-quality deliverables</strong> for government agencies and private sector clients.
            </p>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              I excel in delivering actionable insights based on robust quantitative methods, modeling, and large data analysis. 
            </p>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              Fluent in <strong>Spanish, English, and French</strong>, having lived in four countries. 
            </p>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              Fully <strong>authorized to work in the U.S.</strong>
            </p>
            
            <div className="mt-8">
              <h2 className="text-2xl font-lato font-bold text-dark border-b-2 border-dark pb-2">
                Roles
              </h2>
              <ul className="list-disc list-inside text-dark mt-2 leading-relaxed text-justify space-y-2 text-sm md:text-base">
                <li>Public Policy Researcher/Analyst</li>
                <li>Research Associate</li>
                <li>Economics Consultant</li>
                <li>Data Analyst</li>
              </ul>
            </div>
          </div>

        

          {/* Right Column - My Approach to Work */}
          <div>
            <h2 className="text-2xl md:text-3xl font-lato font-bold text-dark border-b-2 border-dark pb-2">
              My Approach to Work
            </h2>
            <p className="text-dark mt-4 leading-relaxed text-justify text-sm md:text-base">
            I believe that data alone isn&apos;t enough—how it&apos;s communicated is just as crucial. 
            For me, the power of data lies in turning complex statistics into clear, engaging narratives.
            It&apos;s not just about numbers; it&apos;s about using data as a tool to reshape perspectives and drive meaningful conversations.
            </p>
            
          <div className="mt-6">
            <h2 className="text-xl md:text-2xl font-lato font-bold text-dark text-center md:text-left">
              Tools & Technologies
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mt-4">
              <Image src="/icons/python.svg" alt="Python" width={50} height={50} className="h-10 md:h-14" />
              <Image src="/icons/stata.svg" alt="Stata" width={50} height={50} className="h-10 md:h-14" />
              <Image src="/icons/excel.svg" alt="Excel" width={50} height={50} className="h-10 md:h-14" />
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mt-4">
              <Image src="/icons/powerpoint.svg" alt="PowerPoint" width={50} height={50} className="h-10 md:h-14" />
              <Image src="/icons/tableau2.svg" alt="Tableau" width={50} height={50} className="h-10 md:h-14" />
              <Image src="/icons/flourish.svg" alt="Flourish" width={50} height={50} className="h-10 md:h-14" />
              <Image src="/icons/datawrapper.svg" alt="Datawrapper" width={50} height={50} className="h-10 md:h-14" />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-lato font-bold text-dark border-b-2 border-dark pb-2">
              Education
            </h2>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              MSc in Energy & Climate Policy - <strong>University of Sussex</strong>, Brighton, UK
            </p>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              BA in Government & Public Policy - <strong>Universidad Panamericana</strong>, Mexico City, Mexico
            </p>
            <p className="text-dark mt-2 leading-relaxed text-justify text-sm md:text-base">
              BSc in Economics - <strong>Universidad Panamericana</strong>, Mexico City, Mexico
            </p>
          </div>
        </div>
  </motion.section>
</div>
      
      {/* Bottom Navigation Bar */}
      <footer className="w-full text-dark py-6 mt-8 flex flex-col items-center space-y-3 md:flex-row md:justify-between md:px-12">
        <div className="flex space-x-6">
          <Image src="/icons/mail2.svg" alt="Mail" width={40} height={40} className="hover:scale-110 filter transition duration-300" />
          <a href="mailto:santiagomong@gmail.com" className="hover:underline">
            santiagomong@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/icons/phone3.svg" alt="Phone" width={40} height={40} className="hover:scale-110 filter transition duration-300" />
          <a href="tel:+13468230454" className="hover:underline">
            +1-(346)-823-0454
          </a>
        </div>
      </footer>
    </>
  );
}
