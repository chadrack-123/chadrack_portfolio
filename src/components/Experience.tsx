"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "Your Company",
    period: "2023 - Present",
    description: "Developing scalable web applications and implementing new features",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Data Scientist",
    company: "Previous Company",
    period: "2021 - 2023",
    description: "Building machine learning models and analyzing complex datasets",
    skills: ["Python", "TensorFlow", "SQL", "Data Visualization"],
  },
  {
    title: "Full Stack Developer",
    company: "Another Company",
    period: "2020 - 2021",
    description: "Created responsive web applications and RESTful APIs",
    skills: ["JavaScript", "Express", "MongoDB", "React"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-purple-400 font-semibold mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
