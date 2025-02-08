"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mt-8">
  <Link href="/">
    <button className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
      ← Back to Home
    </button>
  </Link>
</div>
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold font-montserrat">Santiago Monroy</h1>
        <p className="text-lg text-gray-700 mt-4 font-lato">
        Analytical and adaptable professional with <strong>two years of consulting experience</strong> in data insights, policy
analysis, and project coordination. Skilled at translating complex challenges into clear, actionable
solutions. Holder of <strong>BSc in Economics and a BA Government & Public Policy</strong>, plus an 
<strong>MSc in Energy & Climate Policy</strong> from the University of Sussex—graduating top of the class. Proficient
in data analytics (Excel, STATA, Python) and data visualization (PowerPoint, Datawrapper, Flourish).
Experienced in collaborating with cross-functional teams, delivering client-focused solutions, and
coordinating stakeholder relationships. Fluent in <strong>Spanish, English, and French,</strong> having lived in four
countries. <strong>Fully authorized to work in the U.S.</strong> and eager to contribute to research and hone my data
analysis skills further.
        </p>
        <div className="mt-6">
          <Link href="/resume.pdf" target="_blank" download>
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Download PDF
            </button>
          </Link>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-montserrat">Education</h2>
          <ul className="mt-4 text-xl space-y-4 text-gray-700 font-lato">
            <li>
              <strong>Master of Science, Energy & Climate Policy (GPA 3.8 U.S. equivalent)</strong>      |      University of Sussex
              <br /> SEPTEMBER 2023 | OCTOBER 2024, BRIGHTON, UK
              <ul className="list-disc ml-6 space-y-4">
                <li><strong>Top Student of the Program (79%)</strong>: Graduated with highest overall mark.</li>
                <li><strong>Thesis (Highest Grade: 92%)</strong>: Applied Python-based analysis to examine how macroeconomic factors (interest rates, inflation) influence the cost of capital for solar PV projects in Brazil, discovering that rising financing costs constrained potential LCOE reductions despite technological advancements.</li>
                <li><strong>Coursework</strong>: Quantitative Methods, Science/Technology/Innovation Policy, Energy Policy Frameworks, Policymaking and Analysis. Emphasis on analytics, large datasets, and advanced research methods.</li>
              </ul>
            </li>
            <li>
              <strong>Bachelor of Arts, Government and Public Policy (GPA 3.5 U.S. equivalent)</strong>      |      Universidad Panamericana
              <br /> AUGUST 2016 | DECEMBER 2021, MEXICO CITY, MX
            </li>
            <li>
              <strong>Bachelor of Science, Economics (GPA 3.5 U.S. equivalent)</strong>      |      Universidad Panamericana
              <br /> AUGUST 2016 | DECEMBER 2020, MEXICO CITY, MX
            </li>
            <li>
              <strong>Other notable courses (non-exhaustive)</strong>:
              <ul className="list-disc ml-6 italic space-y-2">
                <li>Economics of Transformative AI | BlueDot Impact (Feb 2025 | Apr 2025)</li>
                <li>Bloomberg Finance Fundamentals | Bloomberg for Education (2025)</li>
                <li>Bloomberg Market Concepts | Bloomberg for Education (2024)</li>
                <li>The Data Analyst Course (Python) | Udemy (2024)</li>
                <li>The Essential Guide to Stata | Udemy (2024)</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-3xl font-bold font-montserrat">Professional Experience</h2>
        <div className="mt-4 text-gray-700 font-lato space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Energy Consultant | EnergeA StructurA</h3>
            <p className="text-gray-600">April 2022 - August 2023, Mexico City, MX</p>
            <ul className="list-disc pl-5">
              <li>Led a team of two junior consultants on projects for the Mexican Treasury Ministry, designing quantitative models to inform national fiscal and energy policy strategies.</li>
              <li>Oversaw programming and modeling tasks (using Python and Excel) for national-level energy and fiscal policy projects.</li>
              <li>Analyzed large datasets (including survey-based and secondary data) and conducted cost-benefit studies to evaluate incentives for electromobility and renewable energy, working closely with cross-functional teams.</li>
              <li>Developed fiscal policy recommendations for environmental and social impact mitigation of hydrocarbon exploration, simplifying large datasets into clear, executive-ready presentations.</li>
              <li>Assessed regulatory constraints for minimum petroleum storage compliance, providing strategic guidance to an international oil client.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Research Analyst | National Council for Science and Technology (CONACYT)</h3>
            <p className="text-gray-600">June 2020 - December 2020, Mexico City, MX</p>
            <ul className="list-disc pl-5">
              <li>Contributed to empirical research on the effectiveness of regulations aiming to reduce drug consumption.</li>
              <li>Enriched qualitative datasets (interviews, q-sorting) to inform evidence-based policy recommendations.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Consultant | Economic, Finance & Law Consulting Group</h3>
            <p className="text-gray-600">June 2019 - October 2020, Mexico City, MX</p>
            <ul className="list-disc pl-5">
              <li>Researched economic, political, and environmental issues supporting legislative strategies and public policy planning in areas including hydraulic resources, energy poverty, waste management, and the circular economy.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Intern | Energy Regulatory Commission (CRE)</h3>
            <p className="text-gray-600">August 2018 - December 2018, Mexico City, MX</p>
            <ul className="list-disc pl-5">
              <li>Updated and analyzed electricity rate files and collaborated on invoice reviews and operational assessments, supporting data-driven regulatory oversight.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-bold font-montserrat">Languages</h2>
            <ul className="mt-4 text-gray-300 font-lato space-y-2">
              <li>Spanish (Native)</li>
              <li>English (Fluent)</li>
              <li>French (Fluent)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-montserrat">Software Skills</h2>
            <ul className="mt-4 text-gray-300 font-lato space-y-2">
              <li>Excel (Advanced)</li>
              <li>EViews (Intermediate)</li>
              <li>STATA (Intermediate)</li>
              <li>Python (Basic)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-montserrat">Visualization Tools</h2>
            <ul className="mt-4 text-gray-300 font-lato space-y-2">
              <li>PowerPoint (Advanced)</li>
              <li>Canva (Advanced)</li>
              <li>Datawrapper (Advanced)</li>
              <li>Flourish (Advanced)</li>
            </ul>
          </div>
        </div>
      </section>

{/* Books Section */}
<section className="max-w-6xl mx-auto py-16">
  <h2 className="text-3xl font-bold font-montserrat">Books I&apos;m Reading</h2>
  <div className="grid grid-cols-3 gap-6 mt-6">
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
      <footer className="w-full bg-white dark:bg-gray-900 text-black dark:text-white py-4 mt-8 flex justify-between items-center px-12">
        <div className="flex space-x-6">
          <Link href="https://www.linkedin.com/in/santiago-mongom" target="_blank">
            <Image src="/icons/linkedin2.svg" alt="LinkedIn" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://github.com/santiagomong" target="_blank">
            <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://substack.com/@samongom" target="_blank">
            <Image src="/icons/substack2.svg" alt="Substack" width={36} height={36} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/icons/phone2.svg" alt="Phone" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          <span>+1-(346)-823-0454</span>
        </div>
      </footer>
    </div>
  );
}