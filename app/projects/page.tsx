"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
  <Link href="/">
    <button className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
      ← Back to Home
    </button>
  </Link>
      {/* Page Title */}
      <h1 className="text-5xl font-bold font-montserrat text-center">Projects</h1>
      <p className="text-lg text-gray-700 text-center mt-4">
        A selection of my work in consulting, research, and policy.
      </p>

      <div className="flex space-x-6 mt-6">
        <Link href="https://substack.com/@samongom" target="_blank">
          <Image src="/icons/substack2.svg" alt="Substack" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
           </Link>
           <Link href="https://github.com/santiagomong" target="_blank">
            <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/santiago-mongom" target="_blank">
            <Image src="/icons/linkedin2.svg" alt="LinkedIn" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
        </Link>
      </div>

      {/* Academic Projects Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold font-montserrat">Academic Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {/* Master's Thesis */}
          <div className="relative border border-gray-300 rounded-lg p-6 shadow-lg overflow-hidden">
            <div>
              <h3 className="text-xl font-semibold">MSc Thesis: Risks, Rates, and Rays: The Financial Realities of Solar Energy in Brazil</h3>
              <ul className="list-disc list-outside pl-5 text-gray-700 mt-2 space-y-2">
                <li>Emprirical investigation into the financial realities of Brazil&apos;s solar energy sector</li>
                <li>Estimating the <i>weighted average cost of capital (WACC) for solar PV projects in Brazil 2014-2024</i>, within a decade of significant macroeconomic change.</li>
                <li>Introducing <i>intra-annual granularity by estimating monthly WACC values</i>. This addresses shortcomings of yearly or lagging data, capturing short-term fluctuations, and offering a more accurate assessment of financing costs.</li>
                <li>Calculating the <i>impact of the WACC on LCOE for projects</i> awarded through Brazil&apos;s energy auctions (2014 to 2022), highlighting the influence of financing costs as a limiting factor for solar PV competitiveness, despite falling capital costs.</li>
                <li>Projecting future financing scenarios (2024 to 2029) and their implications for solar PV costs.</li>
              </ul>
              <iframe
                src="https://flo.uri.sh/story/2529885/embed"
                title="Flourish Visualization"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                style={{ maxWidth: "100%", border: "none" }}
                className="mt-6"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="thesis.pdf" download className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">Download Thesis</a>
              <a href="risksratesrays.pdf" download className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">Download Article Under Review</a>
              <a href="https://zenodo.org/records/14529054" target="_blank" className="bg-gradient-to-r from-green-400 to-green-800 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">View Code</a>
            </div>
          </div>

          {/* Energy Policy: Mexico’s EV Transition */}
          <div className="relative border border-gray-300 rounded-lg p-6 shadow-lg overflow-hidden">
            <div>
              <h3 className="text-xl font-semibold">Science, Technology & Innovation</h3>
              <p className="text-gray-700 mt-2">
                This essay explores Mexico&apos;s transition from manufacturing internal combustion engine (ICE) vehicles to electric vehicles (EVs) in the context of global market trends and innovation policies. It highlights Mexico&apos;s competitive advantages, such as its proximity to the U.S., low labor costs, and specialized workforce, positioning it as a key player in the automotive industry. The paper emphasizes the challenges of overcoming path dependency in ICE manufacturing and the potential for Mexico to leverage economies of scale and learning economies to shift towards EV production.
              </p>
            </div>
            <a href="innovation.pdf" download className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">Download PDF</a>
          </div>

          {/* Governing Energy Transitions */}
          <div className="relative border border-gray-300 rounded-lg p-6 shadow-lg overflow-hidden">
            <div>
              <h3 className="text-xl font-semibold">Governing Energy Transitions</h3>
              <p className="text-gray-700 mt-2">
                This essay explores the United States&apos; transition to electric vehicles (EVs) under the Biden administration, focusing on governance challenges and political dynamics. It highlights Biden&apos;s ambitious climate agenda, including the Bipartisan Infrastructure Law and the Inflation Reduction Act, which combine legislative incentives and regulatory standards to promote EV adoption. However, Biden faces significant obstacles such as political polarization, resistance from fossil fuel interests, and public skepticism about EVs.
              </p>
            </div>
            <a href="/governing.pdf" download className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">Download PDF</a>
          </div>

          {/* Electric Vehicles and Critical Minerals */}
          <div className="relative border border-gray-300 rounded-lg p-6 shadow-lg overflow-hidden">
            <h3 className="text-xl font-semibold">Electric Vehicles and Critical Minerals</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              Examines the link between electric vehicle production and the demand for critical minerals.
            </p>
            <iframe
                src="/ev-project/index.html"
                width="100%" 
                height="540"
                frameBorder="0"
                allowFullScreen
            ></iframe>
          </div>

          {/* Governing Electric Systems in Mexico */}
          <div className="relative border border-gray-300 rounded-lg p-6 shadow-lg overflow-hidden">
            <h3 className="text-xl font-semibold">Governing Electric Systems in Mexico</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              Discusses the regulatory framework and challenges in governing electric systems in Mexico.
            </p>
            <iframe
                src="/electricity-systems/index.html"
                width="100%" 
                height="540"
                frameBorder="0"
                allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Professional Projects Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold font-montserrat">Professional Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <div className="relative border border-gray-300 rounded-lg p-6 shadow-lg overflow-hidden">
            <h3 className="text-xl font-semibold">Implementation of Fiscal Policies to Strengthen Mexico&apos;s Climate Change Mitigation Efforts</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              Project for Mexico&apos;s Treasury Ministry. In charge of a team of two other junior consultants. Project aimed to support the Mexican government in designing fiscal policies to <strong>reduce greenhouse gas emissions and promote sustainable energy</strong>. The analysis involved evaluating existing policies, identifying international best practices, and offering recommendations for sectors like <strong>electromobility, renewable energy, and waste management</strong>. Excel was used extensively for data modeling, assessing fiscal impacts, and calculating cost-benefit scenarios, while Python with libraries like Pandas and Geopandas was applied for geospatial and statistical analyses, particularly in mapping infrastructure and emissions data. Limited interaction with code scripting.
            </p>
            <iframe
              src="https://1drv.ms/p/s!AlTYd39_V2-QjKUiBapifGHLtDbsYQ?embed=1&amp;em=2&amp;wdAr=1.7777777777777777"
              title="Implementation of Fiscal Policies Presentation"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              style={{ maxWidth: "100%", border: "none" }}
              className="mt-6"
              allowFullScreen
            ></iframe>
          </div>

          <div className="relative border border-gray-300 rounded-lg p-6 shadow-lg overflow-hidden">
            <h3 className="text-xl font-semibold">Evaluation of the Fiscal Instrument to Compensate for Social and Environmental Damage from Hydrocarbon Exploration and Extraction Activities</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              Project for Mexico&apos;s Treasury Ministry. In charge of a team of two other junior consultants. Project evaluated the fiscal instrument used to <strong>mitigate social and environmental damage caused by hydrocarbon exploration and extraction</strong> in Mexico. It focused on analyzing the current fiscal framework, particularly the Hydrocarbon Exploration and Extraction Activity Tax (IAEEH) and the Fund for Federal Entities and Municipalities that Produce Hydrocarbons. The study provided a detailed assessment of the legal, social, economic, and environmental impacts of hydrocarbon activities, offering <strong>recommendations to improve the compensation mechanisms</strong>. International best practices from countries like Norway and Alaska were reviewed to draw comparisons and suggest <strong>potential reforms to enhance Mexico&apos;s fiscal response to these environmental and social impacts</strong>.
              Excel and Python were used for financial modeling, data analysis, and visualization to assess the economic impacts and fiscal distribution of resources. Limited interaction with code scripting.
            </p>
            <iframe
              src="https://1drv.ms/p/s!AlTYd39_V2-QjKUgwt3rrOk2Heei3g?embed=1&amp;em=2&amp;wdAr=1.7777777777777777"
              title="Evaluation of Fiscal Instruments Presentation"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              style={{ maxWidth: "100%", border: "none" }}
              className="mt-6"
              allowFullScreen
            ></iframe>
          </div>

          <div className="relative border border-gray-300 rounded-lg p-6 shadow-lg overflow-hidden">
            <h3 className="text-xl font-semibold">Minimum Storage of Petroleum Products Policy</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              This project was conducted for an international private oil company. This project focuses on the challenges private companies face in complying with Mexico&apos;s Public Policy on Minimum Storage of Petroleum Products (PPAMP), which was introduced to ensure energy security by mandating minimum levels of fuel storage (gasoline, diesel, and jet fuel). The study highlights structural issues in Mexico&apos;s storage infrastructure, such as PEMEX&apos;s market dominance, limited private sector involvement, and regulatory inconsistencies. The analysis identifies significant barriers to competition, including restricted access to storage infrastructure and concentrated market control by PEMEX, limiting private companies&apos; ability to meet policy requirements.
            </p>
            <iframe
              src="https://1drv.ms/p/s!AlTYd39_V2-QjKUkPdmg2XJJid2apQ?embed=1&amp;em=2&amp;wdAr=1.7777777777777777"
              title="Minimum Storage Policy Presentation"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              style={{ maxWidth: "100%", border: "none" }}
              className="mt-6"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Bottom Navigation Bar */}
      <footer className="w-full bg-white dark:bg-gray-900 text-black dark:text-white py-4 mt-8 flex justify-between items-center px-12">
        <div className="flex space-x-6">
          <Image src="/icons/mail.svg" alt="Mail" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          <span>santiagomong@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Image src="/icons/phone2.svg" alt="Phone" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          <span>+1-(346)-823-0454</span>
        </div>
      </footer>
    </div>
  );
}

