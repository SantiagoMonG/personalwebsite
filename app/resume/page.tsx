"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
          Data & Research | Economics | Energy & Technology Policy
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

  
    <div className="bg-white text-black px-4 md:px-0">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto py-10 md:py-16 text-center">
        <p className="text-base md:text-lg text-gray-700 mt-4 font-lato leading-relaxed">
        Professional with <strong>three years of experience</strong> as a research and policy analyst in energy markets,
        technology policy, and economic analyses. Strong background in quantitative research, data analysis,
        and policy interpretation. <strong>MS in Energy & Climate Policy</strong> (graduated top of class) and dual bachelor&apos;s
        degrees in <strong>economics & government/public policy</strong>. Writes and researches about emerging
        technologies, trade, energy economics, and global economic policy. Proficient in data visualization, economic
        modeling, and policy research, using <strong>Excel, STATA, and Python</strong>. 
        Fluent in <strong>Spanish, English, and French.</strong>
        Fully <strong>authorized to work in the U.S.</strong>

        </p>
        <div className="mt-6">
          <Link href="/resume.pdf" target="_blank" download>
            <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-gray-800 transition w-full md:w-auto">
              Download PDF
            </button>
          </Link>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-2xl font-bold font-lato">Education</h2>
        <div className="mt-4 text-gray-700 font-lato space-y-6">

          {/* MSc in Energy & Climate Policy */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Master of Science, Energy & Climate Policy (GPA 3.8 U.S. equivalent) | University of Sussex
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              September 2023 - October 2024, Brighton, UK
            </p>
            <ul className="list-disc ml-4 md:ml-6 space-y-2 mt-2 leading-relaxed">
              <li><strong>Top Student of the Program (79%)</strong>: Graduated with highest overall mark.</li>
              <li><strong>Thesis (Highest Grade: 92%)</strong>: Applied Python-based analysis to examine how macroeconomic factors (interest rates, inflation) influence the cost of capital for solar PV projects in Brazil, discovering that rising financing costs constrained potential LCOE reductions despite technological advancements.</li>
              <li><strong>Coursework</strong>: Quantitative Methods, Science/Technology/Innovation Policy, Energy Policy Frameworks, Policymaking and Analysis. Emphasis on analytics, large datasets, and advanced research methods.</li>
            </ul>
          </div>

          {/* BA in Government and Public Policy */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
            Bachelor of Arts, Government and Public Policy (GPA 3.5 U.S. equivalent) | Universidad Panamericana
            </h3>
            <p className="text-sm md:text-base text-gray-600">
             August 2017 - December 2021, Mexico City, MX
            </p>
          </div>

          {/* BSc in Economics */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
            Bachelor of Science, Economics (GPA 3.5 U.S. equivalent) | Universidad Panamericana
            </h3>
            <p className="text-sm md:text-base text-gray-600">
             August 2016 - December 2020, Mexico City, MX
            </p>
          </div>

          {/* Additional Courses */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Other Notable Courses (non-exhaustive)</h3>
            <ul className="list-disc ml-4 md:ml-6 italic space-y-2 mt-2 leading-relaxed">
              <li>Bloomberg Finance Fundamentals | Bloomberg for Education (2025)</li>
              <li>Bloomberg Market Concepts | Bloomberg for Education (2024)</li>
              <li>The Data Analyst Course (Python) | Udemy (2024)</li>
              <li>The Essential Guide to Stata | Udemy (2024)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-2xl font-bold font-lato">Professional Experience</h2>
        <div className="mt-4 text-gray-700 font-lato space-y-6">

          {/* EnergeA StructurA */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Energy Consultant | EnergeA StructurA</h3>
            <p className="text-sm md:text-base text-gray-600">April 2022 - August 2023, Mexico City, MX</p>
            <ul className="list-disc ml-4 md:ml-6 space-y-2 mt-2 leading-relaxed">
              <li>Led a team of two junior consultants to design quantitative models, data analyses, and literature review for Mexico&apos;s Treasury Ministry on fiscal incentives and energy policy.</li>
              <li>Designed tax incentives for renewable energy, electromobility, and waste management.</li>
              <li>Managed Python/Excel modeling for national-level projects—evaluating incentives, cost-benefit scenarios, and policy feasibility for electromobility, renewables, and hydrocarbon activities.</li>
              <li>Benchmarked international best practices to propose reforms for Mexico&apos;s Hydrocarbon Exploration and Extraction Activity Tax (IAEEH) and compensation fund for environmental and social damages.</li>
              <li>Developed fiscal policy recommendations for environmental and social impact mitigation of hydrocarbon exploration, simplifying large datasets into clear, executive-ready presentations.</li>
              <li>Developed visual reports & policy briefs, ensuring accessibility of complex energy data.</li>
              <li>Assessed regulatory constraints for minimum petroleum storage compliance, providing strategic guidance to an international oil client.</li>
              <li>Contributed to expert economic reviews of proposed constitutional reforms in the hydrocarbons and electricity sectors, analyzing their implications for market competition.</li>
            </ul>
          </div>

          {/* CONACYT */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Research Analyst | National Council for Science and Technology (CONACYT)</h3>
            <p className="text-sm md:text-base text-gray-600">June 2020 - December 2020, Mexico City, MX</p>
            <ul className="list-disc ml-4 md:ml-6 space-y-2 mt-2 leading-relaxed">
              <li>Contributed to empirical research on the effectiveness of regulations aiming to reduce drug consumption.</li>
              <li>Enriched qualitative datasets (interviews, q-sorting) to inform evidence-based policy recommendations.</li>
            </ul>
          </div>

          {/*Economic, Finance & Law COnsulting Group*/}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Consultant | Economic, Finance & Law Consulting Group</h3>
            <p className="text-sm md:text-base text-gray-600">June 2019 - October 2020, Mexico City, MX</p>
            <ul className="list-disc ml-4 md:ml-6 space-y-2 mt-2 leading-relaxed">
              <li>Researched economic, political, and environmental issues supporting legislative strategies and public policy planning in areas including hydraulic resources, energy poverty, waste management, and the circular economy.</li>
            </ul>
          </div>

          {/* Energy Regulatory Commission (CRE) */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Intern | Energy Regulatory Commission (CRE)</h3>
            <p className="text-sm md:text-base text-gray-600">August 2018 - December 2018, Mexico City, MX</p>
            <ul className="list-disc ml-4 md:ml-6 space-y-2 mt-2 leading-relaxed">
              <li>Updated and analyzed electricity rate files and collaborated on invoice reviews and operational assessments, supporting data-driven regulatory oversight.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-900 text-white py-10 md:py-16 px-6 md:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-lato">Languages</h2>
            <ul className="mt-4 text-gray-300 font-lato space-y-2 text-base md:text-lg">
              <li>Spanish (Native)</li>
              <li>English (Fluent)</li>
              <li>French (Fluent)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-lato">Software Skills</h2>
            <ul className="mt-4 text-gray-300 font-lato space-y-2 text-base md:text-lg">
              <li>Excel (Advanced)</li>
              <li>EViews (Intermediate)</li>
              <li>STATA (Intermediate)</li>
              <li>Python (Basic)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-lato">Visualization Tools</h2>
            <ul className="mt-4 text-gray-300 font-lato space-y-2 text-base md:text-lg">
              <li>PowerPoint (Advanced)</li>
              <li>Canva (Advanced)</li>
              <li>Datawrapper (Advanced)</li>
              <li>Flourish (Advanced)</li>
            </ul>
          </div>
        </div>
      </section>

{/* Books Section */}
<section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0">
  <h2 className="text-2xl md:text-3xl font-bold font-lato text-center">Books I&apos;m Reading</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
    {/* Book 1 */}
    <div className="text-center">
      <Link href="https://www.versobooks.com/products/3069-the-price-is-wrong?srsltid=AfmBOooEG8KOsJmkv3R9JDgEYN_PdaehQUdRzgMkkoNKvVblxQJd5qcs" target="_blank">
        <Image src="/books/thepriceiswrong.jpg" alt="The Price is Wrong" width={120} height={180} className="mx-auto" />
      </Link>
      <p className="text-sm text-gray-600 font-lato mt-2">The Price is Wrong - Brett Christophers</p>
    </div>

    {/* Book 2 */}
    <div className="text-center">
      <Link href="https://nostarch.com/python-crash-course-3rd-edition" target="_blank">
        <Image src="/books/python.jpg" alt="Python Crash Course, 3rd Edition" width={120} height={180} className="mx-auto" />
      </Link>
      <p className="text-sm text-gray-600 font-lato mt-2">Python Crash Course - Eric Matthes</p>
    </div>

    {/* Book 3 */}
    <div className="text-center">
      <Link href="https://www.barnesandnoble.com/w/more-and-more-and-more-jean-baptiste-fressoz/1146515197" target="_blank">
        <Image src="/books/more.jpg" alt="More and More and More" width={120} height={180} className="mx-auto" />
      </Link>
      <p className="text-sm text-gray-600 font-lato mt-2">More and More and More - Jean-Baptiste Fressoz</p>
    </div>

    {/* Book 4 */}
    <div className="text-center">
      <Link href="https://blackwells.co.uk/bookshop/product/9780300261448?gC=098f6bcd4&gad_source=1&gclid=CjwKCAiAqfe8BhBwEiwAsne6gW3cREawdVfkaPD0dEAjgM7pWg9p2FgMDko_gd-ZNsQqz3VrL5llRxoCbl4QAvD_BwE" target="_blank">
        <Image src="/books/tradewars.jpg" alt="Trade Wars are Class Wars" width={120} height={260} className="mx-auto" />
      </Link>
      <p className="text-sm text-gray-600 font-lato mt-2">Trade Wars are Class Wars - Matthew C. Klein, Michael Pettis</p>
    </div>

    {/* Book 5 */}
    <div className="text-center">
      <Link href="https://matthewdesmondbooks.com/" target="_blank">
        <Image src="/books/poverty.jpg" alt="Poverty, by America" width={120} height={180} className="mx-auto" />
      </Link>
      <p className="text-sm text-gray-600 font-lato mt-2">Poverty, by America - Matthew Desmond</p>
    </div>

    {/* Book 6 */}
    <div className="text-center">
      <Link href="https://nostarch.com/practical-sql-2nd-edition" target="_blank">
        <Image src="/books/sql.jpg" alt="Practical SQL" width={120} height={180} className="mx-auto" />
      </Link>
      <p className="text-sm text-gray-600 font-lato mt-2">Practical SQL - Anthony DeBarros</p>
    </div>
  </div>
</section>

      {/* Bottom Navigation Bar */}
      <footer className="w-full text-dark py-6 mt-8 flex flex-col items-center space-y-3 md:flex-row md:justify-between md:px-12">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="https://www.linkedin.com/in/santiago-mongom" target="_blank">
            <Image src="/icons/linkedin3.svg" alt="LinkedIn" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://github.com/santiagomong" target="_blank">
            <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://substack.com/@samongom" target="_blank">
            <Image src="/icons/substack2.svg" alt="Substack" width={36} height={36} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
        </div>
              <div className="flex items-center space-x-2">
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
    </div>
    </>
  );
}