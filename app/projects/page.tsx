"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* Page Title */}
      <h1 className="text-5xl font-bold font-montserrat text-center">Projects</h1>
      <p className="text-lg text-gray-700 text-center mt-4">
        A selection of my work in consulting, research, and policy.
      </p>

      {/* Academic Projects Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold font-montserrat">Academic Projects</h2>
        <div className="mt-6 space-y-12">
          {/* Master's Thesis */}
          <div className="bg-gray-100 p-6 rounded-lg shadow flex justify-between justify-text items-start relative">
            <div>
              <h3 className="text-xl font-semibold">Master's Thesis: Solar Energy Financing in Brazil</h3>
              <ul className="list-disc list-outside pl-5 text-gray-700 mt-2 space-y-2">
                <li><strong>Solar photovoltaic (PV)</strong> is the fastest growing electricity source by capacity, with global additions reaching 600 GW in 2024. At the same time, rising interest rates adversely affect solar PV's competitiveness.</li>
                <li><strong>Study Focus:</strong> Examines the financial dynamics of Brazil's solar energy sector, focusing on how financing conditions impact the Levelised Cost of Energy (LCOE) for solar PV projects.</li>
                <li><strong>WACC Disparity:</strong> Brazil's Weighted Average Cost of Capital (WACC) is significantly higher than in advanced economies, ranging from 10% to 15% compared to 2.5% in Germany.</li>
                <li><strong>Methodology:</strong> Utilizes a three-tiered approach to estimate the nominal after-tax WACC for solar PV projects in Brazil, calculate LCOE for projects awarded in energy auctions from 2014 to 2022, and project financing scenarios for 2024 to 2029.</li>
                <li><strong>Findings:</strong> Despite a 35% decline in CAPEX over the study period, financing costs increased from 47% of total project costs in 2014 to 62% in 2022, offsetting CAPEX and OPEX reductions and limiting LCOE improvements.</li>
                <li><strong>Future Projections:</strong> Scenario analysis predicts that financing costs could range from 38% to 55% of total project costs by 2029, depending on macroeconomic conditions.</li>
                <li><strong>Innovation:</strong> Introduces intra-annual granularity in WACC estimates, capturing short-term economic fluctuations for greater accuracy. Findings highlight the critical role of macroeconomic stability and targeted financial strategies in achieving cost-effective solar PV deployment in Brazil and other emerging markets.</li>
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
              <a href="/public/thesis.pdf" download className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">Download PDF</a>
              <a href="https://zenodo.org/code_link" target="_blank" className="bg-gradient-to-r from-green-400 to-green-800 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">View Code</a>
            </div>
          </div>

          {/* Energy Policy: Mexico’s EV Transition */}
          <div className="bg-gray-100 p-6 rounded-lg shadow flex justify-between items-start relative">
            <div>
              <h3 className="text-xl font-semibold">Science, Technology & Innovation</h3>
              <p className="text-gray-700 mt-2">
                This essay explores Mexico's transition from manufacturing internal combustion engine (ICE) vehicles to electric vehicles (EVs) in the context of global market trends and innovation policies. It highlights Mexico's competitive advantages, such as its proximity to the U.S., low labor costs, and specialized workforce, positioning it as a key player in the automotive industry. The paper emphasizes the challenges of overcoming path dependency in ICE manufacturing and the potential for Mexico to leverage economies of scale and learning economies to shift towards EV production.
              </p>
            </div>
            <a href="innovation.pdf" download className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">Download PDF</a>
          </div>

          {/* Governing Energy Transitions */}
          <div className="bg-gray-100 p-6 rounded-lg shadow flex justify-between items-start relative">
            <div>
              <h3 className="text-xl font-semibold">Governing Energy Transitions</h3>
              <p className="text-gray-700 mt-2">
                This essay explores the United States' transition to electric vehicles (EVs) under the Biden administration, focusing on governance challenges and political dynamics. It highlights Biden's ambitious climate agenda, including the Bipartisan Infrastructure Law and the Inflation Reduction Act, which combine legislative incentives and regulatory standards to promote EV adoption. However, Biden faces significant obstacles such as political polarization, resistance from fossil fuel interests, and public skepticism about EVs.
              </p>
            </div>
            <a href="/governing.pdf" download className="bg-gradient-to-r from-teal-600 to-teal-950 text-white px-4 py-2 rounded-md font-semibold text-center hover:scale-110">Download PDF</a>
          </div>

          {/* Electric Vehicles and Critical Minerals */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Electric Vehicles and Critical Minerals</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              Examines the link between electric vehicle production and the demand for critical minerals.
            </p>
            <iframe
                src="https://drive.google.com/file/d/1nDLBuyk-5IlWRGvmSdcHRXLmRAxQ_5AK/preview"
                width="100%" 
                height="400"
                allow="autoplay"
            ></iframe>
          </div>

          {/* Governing Electric Systems in Mexico */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Governing Electric Systems in Mexico</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              Discusses the regulatory framework and challenges in governing electric systems in Mexico.
            </p>
            <iframe
                src="https://drive.google.com/file/d/1GVYWj1ovNyHY6EQw9JWTIPZtLav-p-lH/preview"
                width="100%" 
                height="400"
                allow="autoplay"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Professional Projects Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold font-montserrat">Professional Projects</h2>
        <div className="mt-6 space-y-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Implementation of Fiscal Policies to Strengthen Mexico's Climate Change Mitigation Efforts</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              Project for Mexico's Treasury Ministry. In charge of a team of two other junior consultants. Project aimed to support the Mexican government in designing fiscal policies to <strong>reduce greenhouse gas emissions and promote sustainable energy</strong>. The analysis involved evaluating existing policies, identifying international best practices, and offering recommendations for sectors like <strong>electromobility, renewable energy, and waste management</strong>. Excel was used extensively for data modeling, assessing fiscal impacts, and calculating cost-benefit scenarios, while Python with libraries like Pandas and Geopandas was applied for geospatial and statistical analyses, particularly in mapping infrastructure and emissions data. Limited interaction with code scripting.
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

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Evaluation of the Fiscal Instrument to Compensate for Social and Environmental Damage from Hydrocarbon Exploration and Extraction Activities</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              Project for Mexico's Treasury Ministry. In charge of a team of two other junior consultants. Project evaluated the fiscal instrument used to <strong>mitigate social and environmental damage caused by hydrocarbon exploration and extraction</strong> in Mexico. It focused on analyzing the current fiscal framework, particularly the Hydrocarbon Exploration and Extraction Activity Tax (IAEEH) and the Fund for Federal Entities and Municipalities that Produce Hydrocarbons. The study provided a detailed assessment of the legal, social, economic, and environmental impacts of hydrocarbon activities, offering <strong>recommendations to improve the compensation mechanisms</strong>. International best practices from countries like Norway and Alaska were reviewed to draw comparisons and suggest <strong>potential reforms to enhance Mexico's fiscal response to these environmental and social impacts</strong>.
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

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Minimum Storage of Petroleum Products Policy</h3>
            <p className="text-gray-700 mt-2 text-justify mb-6">
              This project was conducted for an international private oil company. This project focuses on the challenges private companies face in complying with Mexico's Public Policy on Minimum Storage of Petroleum Products (PPAMP), which was introduced to ensure energy security by mandating minimum levels of fuel storage (gasoline, diesel, and jet fuel). The study highlights structural issues in Mexico's storage infrastructure, such as PEMEX's market dominance, limited private sector involvement, and regulatory inconsistencies. The analysis identifies significant barriers to competition, including restricted access to storage infrastructure and concentrated market control by PEMEX, limiting private companies' ability to meet policy requirements.
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
          <Link href="https://www.linkedin.com/in/santiago-mongom" target="_blank">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://github.com/santiagomong" target="_blank">
            <Image src="/icons/github2.svg" alt="GitHub" width={40} height={40} className="hover:invert hover:scale-110 filter transition duration-300" />
          </Link>
          <Link href="https://substack.com/@samongom" target="_blank">
            <Image src="/icons/substack.svg" alt="Substack" width={36} height={36} className="hover:invert hover:scale-110 filter transition duration-300" />
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

