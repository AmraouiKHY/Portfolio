import { motion } from "framer-motion";
import React, { useState } from "react";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <article 
        className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-2 shrink-0 w-72 md:w-[500px] xl:w-[500px] h-48 md:h-auto snap-center bg-white bg-linear-to-tr from-white to-professionalBlue/10 p-3 md:p-8 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 border border-professionalBlue/20"
        onClick={() => setShowModal(true)}
      >
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-12 h-12 md:w-24 md:h-24 rounded-full object-contain bg-white p-1 md:p-2 shadow-lg border-2 border-professionalBlue/20"
          src={experience?.companyImage || "/images/default-company-logo.png"}
          alt={experience?.company || "Company logo"}
        />
        <div className="w-full px-0 md:px-6 text-center">
          <h4 className="text-sm md:text-xl lg:text-2xl font-semibold text-professionalDark leading-tight">
            {experience?.jobTitle}
          </h4>
          <p className="font-bold text-xs md:text-lg lg:text-xl mt-0.5 md:mt-1 text-professionalBlue">
            {experience?.company}
          </p>
          <div className="flex justify-center space-x-1 md:space-x-2 my-1 md:my-3 flex-wrap gap-1 md:gap-2">
            {experience?.technologies.slice(0, 5).map((technology) => (
              <img
                key={technology._id}
                className="w-5 h-5 md:w-8 md:h-8 rounded-full object-contain bg-white p-0.5 md:p-1 border border-professionalBlue/20 shadow-sm"
                src={technology?.image || "/images/default-technology-icon.png"}
                alt={technology?.title || "Technology"}
              />
            ))}
            {experience?.technologies.length > 5 && (
              <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-professionalBlue/20 flex items-center justify-center border border-professionalBlue/20">
                <span className="text-xs md:text-sm text-professionalDark font-medium">+{experience.technologies.length - 5}</span>
              </div>
            )}
          </div>
          <p className="uppercase py-1 md:py-4 text-professionalBlue/70 text-xs font-medium leading-tight">
            {new Date(experience?.dateStarted).getFullYear()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : experience?.dateEnded ? new Date(experience.dateEnded).getFullYear() : "Unknown"}
          </p>
          <p className="text-professionalBlue/60 text-xs mt-0.5 md:mt-2">Click to see details</p>
        </div>
      </article>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-professionalBlue/20 shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <img
                  className="w-16 h-16 rounded-full object-contain bg-white p-2 shadow-lg border-2 border-professionalBlue/20"
                  src={experience?.companyImage || "/images/default-company-logo.png"}
                  alt={experience?.company || "Company logo"}
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-professionalDark">
                    {experience?.jobTitle}
                  </h3>
                  <p className="font-bold text-lg md:text-xl text-professionalBlue">
                    {experience?.company}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-professionalDark mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {experience?.technologies.map((technology) => (
                  <div key={technology._id} className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-2">
                    <img
                      className="w-6 h-6 rounded-full object-contain bg-white p-1"
                      src={technology?.image || "/images/default-technology-icon.png"}
                      alt={technology?.title || "Technology"}
                    />
                    <span className="text-sm font-medium text-professionalDark">{technology?.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Range */}
            <div className="mb-6">
              <p className="text-professionalBlue/70 text-sm font-medium">
                {new Date(experience?.dateStarted).toDateString()} -{" "}
                {experience.isCurrentlyWorkingHere
                  ? "Present"
                  : experience?.dateEnded ? new Date(experience.dateEnded).toDateString() : "Unknown"}
              </p>
            </div>

            {/* Job Responsibilities */}
            <div>
              <h4 className="text-lg font-semibold text-professionalDark mb-3">Key Responsibilities & Achievements</h4>
              <ul className="list-disc text-professionalDark/80 space-y-3 pl-5 text-sm md:text-base leading-relaxed">
                {experience?.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
