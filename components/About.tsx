import { motion } from "framer-motion";
import React from "react";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center py-20"
    >
      <h3 className="absolute top-16 md:top-20 left-1/2 transform -translate-x-1/2 uppercase tracking-[15px] md:tracking-[20px] text-professionalDark text-lg md:text-xl lg:text-2xl font-semibold z-10">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="mt-16 md:mt-8 mb-8 md:mb-0 shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full md:rounded-lg object-cover shadow-2xl border-4 border-professionalBlue/20"
        src={pageInfo?.profilePic || "/images/profile-pic.JPG"}
        alt={pageInfo?.name || "Profile picture"}
      />
      
      <div className="space-y-4 md:space-y-5 px-4 md:px-8 lg:px-12 max-w-2xl">
        <h4 className="text-lg md:text-3xl lg:text-4xl font-semibold text-professionalDark">
          Here is a{" "}
          <span className="underline decoration-professionalBlue/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base lg:text-lg text-justify leading-relaxed text-professionalDark/80">
          {pageInfo?.backgroundInformation}
        </p>
        
        {/* CV Download Section */}
        <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-4">
          <h5 className="text-base md:text-lg lg:text-xl font-semibold text-professionalDark">
            Want to know more?
          </h5>
          <a
            href="/cv/KHIREDDINE_AMRAOUI_Resume.pdf"
            download="Khireddine_Amraoui_CV.pdf"
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-professionalBlue text-white rounded-lg hover:bg-professionalDark transition-colors duration-300 font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg 
              className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download My CV
          </a>
        </div>
      </div>
    </motion.div>
  );
}
