import { motion } from "framer-motion";
import React from "react";
import { Project } from "../typings";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-professionalDark text-xl md:text-2xl font-semibold">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-professionalBlue/80 mt-16">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-screen"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-24 md:h-40 lg:h-48 xl:h-56 object-contain rounded-lg shadow-lg"
              src={project?.image || "/images/default-project-image.png"}
              alt={project?.title || "Project image"}
            />

            <div className="space-y-5 md:space-y-8 px-4 md:px-10 max-w-4xl">
              <h4 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center text-professionalDark">
                <span className="underline decoration-professionalBlue/50">
                  Project {i + 1}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-3 justify-center flex-wrap gap-2">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="h-8 w-8 md:h-10 md:w-10 rounded-full object-contain bg-white p-1 border-2 border-professionalBlue/20"
                    src={technology?.image || "/images/default-technology-icon.png"}
                    alt={technology?.title || "Technology"}
                  />
                ))}
              </div>

              <p className="text-sm md:text-base lg:text-lg text-justify text-professionalDark/80 leading-relaxed">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[25%] md:top-[35%] bg-professionalBlue/20 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
}
