"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Resume() {
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
        <h2 className="flex items-center space-x-1 md:space-x-2 mt-1 md:mt-2 text-center">
          Data Analysis | Economics | Energy & Technology Policy
        </h2>
      </div>

      {/* Navbar Below Name */}
      <nav className="bg-black text-white text-sm w-full py-2 md:py-3">
       <ul className="hidden md:flex justify-center space-x-4 md:space-x-8 text-md md:text-lg">
        <li><Link href="/#about" onClick={handleAboutClick} className="hover:underline">About</Link></li>
        <li><Link href="/resume" className="hover:underline">Resume</Link></li>
        <li><Link href="/projects" className="hover:underline">Slides, Charts & Projects</Link></li>
        <li><Link href="https://substack.com/@samongom" target="_blank" className="hover:underline">Substack</Link></li>
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
           <li><Link href="https://substack.com/@samongom" target="_blank" className="block py-1">Substack</Link></li>
          </ul>
        )}
      </div>
      </nav>

      {/* Page Title */}
      <div className="text-center px-4 md:px-6 mt-6">
  <h1 className="text-2xl md:text-3xl font-bold font-montserrat">
    Research, Writing & Data Visualizations
  </h1>
  <p className="text-sm md:text-lg text-gray-700 mt-4">
    A selection of my professional and academic projects, research, and some other stuff.
  </p>
</div>

{/* Social Links */}
<div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-6">
  <Link href="https://substack.com/@samongom" target="_blank">
    <Image src="/icons/substack2.svg" alt="Substack" width={36} height={36} className="hover:scale-110 transition duration-300" />
  </Link>
  <Link href="https://github.com/santiagomong" target="_blank">
    <Image src="/icons/github.svg" alt="GitHub" width={36} height={36} className="hover:scale-110 transition duration-300" />
  </Link>
  <Link href="https://www.linkedin.com/in/santiago-mongom" target="_blank">
    <Image src="/icons/linkedin3.svg" alt="LinkedIn" width={40} height={40} className="hover:scale-110 transition duration-300" />
  </Link>
</div>

{/* Academic Projects Section */}
<section className="mt-8 md:mt-12 px-4 md:px-6">
  <h2 className="text-2xl md:text-3xl font-bold font-montserrat">Academic Projects</h2>

  {/* Grid Layout for Projects */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-6">
    
    {/* Master's Thesis */}
    <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold">
        MSc Thesis: Risks, Rates, and Rays: The Financial Realities of Solar Energy in Brazil
      </h3>
      <ul className="list-disc list-outside pl-5 text-sm md:text-base text-gray-700 mt-2 space-y-2">
        <li>Empirical investigation into the financial realities of Brazil&apos;s solar energy sector.</li>
        <li>Estimation of the <i>weighted average cost of capital (WACC) for solar PV projects (2014-2024)</i>.</li>
        <li>Analysis of macroeconomic changes and financial constraints on LCOE reductions.</li>
        <li>Projections of financing scenarios for 2024-2029 and their impact on solar PV projects.</li>
      </ul>
      <iframe
        src="https://flo.uri.sh/story/2529885/embed"
        title="Flourish Visualization"
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        className="mt-4 max-w-full"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col space-y-2 mt-4">
        <a href="thesis.pdf" download className="underline text-blue-800 hover:font-bold">Download Thesis</a>
        <a href="risksratesrays.pdf" download className="underline text-blue-800 hover:font-bold">Download Article Under Review</a>
        <a href="https://zenodo.org/records/14529054" target="_blank" className="underline text-blue-800 hover:font-bold">View Code</a>
      </div>
    </div>

    {/* Electric Vehicles and Critical Minerals */}
    <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold">Electric Vehicles and Critical Minerals</h3>
      <p className="text-sm md:text-base text-gray-700 mt-2">
        Demo of academic presentation on Electric Vehicles and its challenges.
      </p>
      <iframe
        src="/ev-project/index.html"
        width="100%"
        height="400"
        frameBorder="0"
        className="mt-4 max-w-full"
        allowFullScreen
      ></iframe>
    </div>

    {/* Governing Electric Systems in Mexico */}
    <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold">Governing Electric Systems in Mexico</h3>
      <p className="text-sm md:text-base text-gray-700 mt-2">
        Demo of academic presentation on historic developments and challenges in electric systems in Mexico.
      </p>
      <iframe
        src="/electricity-systems/index.html"
        width="100%"
        height="400"
        frameBorder="0"
        className="mt-4 max-w-full"
        allowFullScreen
      ></iframe>
    </div>

  </div>
</section>

<section className="mt-8 md:mt-12 px-4 md:px-6">

  {/* Grid Layout for Projects */}
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-6">
        {/* Energy Policy: Mexico’s EV Transition */}
    <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold">Science, Technology & Innovation</h3>
      <p className="text-sm md:text-base text-gray-700 mt-2">
        This essay explores Mexico&apos;s transition from manufacturing internal combustion engine (ICE) vehicles to electric vehicles (EVs) in the context of global market trends and innovation policies.
      </p>
      <a href="innovation.pdf" download className="underline text-blue-800 hover:font-bold mt-2">Download PDF</a>
    </div>

    {/* Governing Energy Transitions */}
    <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold">Governing Energy Transitions</h3>
      <p className="text-sm md:text-base text-gray-700 mt-2">
        This essay explores the United States&apos; transition to electric vehicles (EVs) under the Biden administration, focusing on governance challenges and political dynamics.
      </p>
      <a href="/governing.pdf" download className="underline text-blue-800 hover:font-bold mt-2">Download PDF</a>
    </div>
  </div>
</section> 

{/* Professional Projects Section */}
  <section className="mt-8 md:mt-12 px-4 md:px-6">
    <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center md:text-left">
    Professional Projects
    </h2>

  {/* Grid Layout for Projects */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-6">

    {/* Implementation of Fiscal Policies */}
      <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-lg">
        <h3 className="text-lg md:text-xl font-semibold">
        Implementation of Fiscal Policies to Strengthen Mexico&apos;s Climate Change Mitigation Efforts
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-2">
          Project for Mexico&apos;s Treasury Ministry. Led a team of two consultants to design fiscal policies to 
          <strong> reduce greenhouse gas emissions</strong> and promote sustainable energy. Used Python (Pandas, Geopandas) 
          and Excel for data modeling and geospatial analysis.
        </p>
        <p className="text-sm md:text-base text-gray-700 mt-2">
          Mainly involved in the electromobility part of the project, focused on promoting electric mobility through various 
          public policy instruments, fiscal incentives, and improvements in charging infrastructure. 
          My work aimed to reduce emissions in the transportation sector and encourage the adoption of electric vehicles (BEVs and PHEVs) 
          through integrated measures addressing both supply and demand: subsidy strategies for EV purchases, deployment of charging stations, 
          and assessing the fiscal impact of different incentive mechanisms.
        </p>
        <iframe
          src="https://1drv.ms/p/s!AlTYd39_V2-QjKUiBapifGHLtDbsYQ?embed=1&amp;em=2&amp;wdAr=1.7777777777777777"
          title="Implementation of Fiscal Policies Presentation"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          className="mt-4 max-w-full"
          allowFullScreen
        ></iframe>
      </div>

    {/* Evaluation of the Fiscal Instrument */}
      <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-lg">
        <h3 className="text-lg md:text-xl font-semibold">
        Evaluation of the Fiscal Instrument for Social and Environmental Damage from Hydrocarbon Extraction
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-2">
        Project for Mexico&apos;s Treasury Ministry. Evaluated Mexico&apos;s IAEEH tax and compensation fund to assess their effectiveness in <strong>addressing environmental and social damage from hydrocarbon extraction.</strong> 
        </p>
        <p className="text-sm md:text-base text-gray-700 mt-2">
         Analyzed fiscal policies, identified inefficiencies in fund allocation, and proposed reforms to improve transparency and ensure resources were better aligned with actual environmental costs. 
        </p>
        <iframe
          src="https://1drv.ms/p/s!AlTYd39_V2-QjKUgwt3rrOk2Heei3g?embed=1&amp;em=2&amp;wdAr=1.7777777777777777"
          title="Evaluation of Fiscal Instruments Presentation"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          className="mt-4 max-w-full"
          allowFullScreen
        ></iframe>
      </div>

    {/* Minimum Storage of Petroleum Products */}
      <div className="border border-gray-300 rounded-lg p-4 md:p-6 shadow-lg">
        <h3 className="text-lg md:text-xl font-semibold">Minimum Storage of Petroleum Products Policy</h3>
        <p className="text-sm md:text-base text-gray-700 mt-2">
          Analyzed compliance challenges for private oil companies with Mexico&apos;s 
          <strong> Minimum Storage of Petroleum Products Policy</strong>. Assessed market barriers and storage constraints.
        </p>
       <iframe
          src="https://1drv.ms/p/s!AlTYd39_V2-QjKUkPdmg2XJJid2apQ?embed=1&amp;em=2&amp;wdAr=1.7777777777777777"
          title="Minimum Storage Policy Presentation"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          className="mt-4 max-w-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>

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

