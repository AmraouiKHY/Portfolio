import React from "react";
import { motion } from "framer-motion";
import { Education } from "../typings";

type Props = { education: Education[] };

export default function EducationComponent({ education }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-left max-w-full px-5 md:px-10 justify-evenly mx-auto items-center py-20"
    >
      <h3 className="absolute top-20 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-professionalDark text-xl md:text-2xl font-semibold">
        Education
      </h3>

      {/* Education cards */}
      <div className="w-full text-left pb-5 md:pb-10 mt-10">
        {/* Mobile: Horizontal scrollable */}
        <div className="md:hidden overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-professionalBlue/30 pb-4">
          <div className="flex gap-4 px-4" style={{ width: `${education.length * 280}px` }}>
            {education
              ?.slice() // make a shallow copy so we don't mutate the original array
              .map((edu) => (
                <article 
                  key={edu._id} 
                  className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-4 w-64 h-auto min-h-[500px] bg-white bg-linear-to-tr from-white to-professionalBlue/10 p-6 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 border border-professionalBlue/20 shrink-0"
                >
                  {/* Institution Logo */}
                  <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="h-16 rounded-full object-contain bg-white p-2 shadow-lg border-2 border-professionalBlue/20 mb-2"
                    src={edu?.institutionLogo || "/images/estin.png"}
                    alt={edu?.institution || "Institution logo"}
                  />

                  <div className="w-full text-center">
                    {/* Degree Title */}
                    <h4 className="text-sm font-semibold text-professionalDark mb-2">
                      {edu?.degree}
                    </h4>
                    
                    {/* Institution Name */}
                    <p className="font-bold text-sm mt-1 text-professionalBlue mb-3">
                      {edu?.institution}
                    </p>

                    {/* Date Range */}
                    <p className="uppercase py-2 text-professionalBlue/70 text-xs font-medium">
                      {new Date(edu?.dateStarted).toDateString()} -{" "}
                      {edu.isCurrentlyStudying
                        ? "Present"
                        : edu?.dateEnded ? new Date(edu.dateEnded).toDateString() : "Unknown"}
                    </p>

                    {/* Status Badge */}
                    {edu.isCurrentlyStudying && (
                      <div className="inline-block bg-professionalBlue/20 text-professionalDark px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Currently Studying
                      </div>
                    )}
                    
                    {/* Graduation Badge */}
                    {edu.graduated && !edu.isCurrentlyStudying && (
                      <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                        ✓ Graduated
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="text-professionalDark/80 text-xs leading-relaxed text-justify grow flex items-center">
                    <p>{edu?.description}</p>
                  </div>

                  {/* Institution Website Link */}
                  {edu?.institutionWebsite && (
                    <div className="mt-4">
                      <a
                        href={edu.institutionWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-professionalBlue text-white rounded-lg hover:bg-professionalDark transition-colors duration-300 text-xs font-medium"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visit
                      </a>
                    </div>
                  )}
                </article>
              ))}
          </div>
        </div>

        {/* Desktop: Vertical layout */}
        <div className="hidden md:flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 p-6 md:p-10">
          {education
            ?.slice() // make a shallow copy so we don't mutate the original array
            .map((edu) => (
              <article 
                key={`desktop-${edu._id}`} 
                className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-4 w-full max-w-md md:max-w-lg lg:max-w-xl h-auto min-h-[500px] bg-white bg-linear-to-tr from-white to-professionalBlue/10 p-6 md:p-8 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 border border-professionalBlue/20"
              >
                {/* Institution Logo */}
                <motion.img
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="h-16 md:h-18 rounded-full object-contain bg-white p-2 shadow-lg border-2 border-professionalBlue/20 mb-2"
                  src={edu?.institutionLogo || "/images/estin.png"}
                  alt={edu?.institution || "Institution logo"}
                />

                <div className="w-full px-0 md:px-6 text-center">
                  {/* Degree Title */}
                  <h4 className="text-base md:text-xl lg:text-2xl font-semibold text-professionalDark mb-2">
                    {edu?.degree}
                  </h4>
                  
                  {/* Institution Name */}
                  <p className="font-bold text-sm md:text-lg lg:text-xl mt-1 text-professionalBlue mb-3">
                    {edu?.institution}
                  </p>

                  {/* Date Range */}
                  <p className="uppercase py-2 md:py-4 text-professionalBlue/70 text-xs md:text-sm font-medium">
                    {new Date(edu?.dateStarted).toDateString()} -{" "}
                    {edu.isCurrentlyStudying
                      ? "Present"
                      : edu?.dateEnded ? new Date(edu.dateEnded).toDateString() : "Unknown"}
                  </p>

                  {/* Status Badge */}
                  {edu.isCurrentlyStudying && (
                    <div className="inline-block bg-professionalBlue/20 text-professionalDark px-3 py-1 rounded-full text-xs font-medium mb-4">
                      Currently Studying
                    </div>
                  )}
                  
                  {/* Graduation Badge */}
                  {edu.graduated && !edu.isCurrentlyStudying && (
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                      ✓ Graduated
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="px-0 md:px-6 text-professionalDark/80 text-sm md:text-base leading-relaxed text-justify grow flex items-center">
                  <p>{edu?.description}</p>
                </div>

                {/* Institution Website Link */}
                {edu?.institutionWebsite && (
                  <div className="mt-4">
                    <a
                      href={edu.institutionWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-professionalBlue text-white rounded-lg hover:bg-professionalDark transition-colors duration-300 text-sm font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Institution
                    </a>
                  </div>
                )}
              </article>
            ))}
        </div>
      </div>
    </motion.div>
  );
}