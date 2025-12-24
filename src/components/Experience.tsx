"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "",
    period: "",
    description:
      "Designed and delivered production-grade internal platforms that automated research publication workflows and reduced manual processing time by 20%.",
    skills: ["React", "Node.js", "Python", "SQL", "TypeScript", "AWS"],
    detailedInfo: {
      responsibilities: [
        "Built full-stack applications with React, Python, SQL, and C#, integrating REST APIs and database-driven workflows for submission tracking, peer review, and reporting.",
        "Automated management and tracking of faculty research publications, streamlining workflows for submission, peer review, and publication processes.",
        "Collaborated closely with stakeholders to ship features on tight deadlines, contributing to 95% stakeholder satisfaction.",
      ],
      achievements: [
        "20% efficiency gain",
        "95% stakeholder satisfaction",
        "Automated publication workflow",
      ],
    },
  },
  {
    title: "Data Scientist",
    company: "",
    period: "",
    description:
      "Developed and evaluated machine learning models and reproducible data pipelines to support data-driven decision making.",
    skills: ["Python", "TensorFlow", "SQL", "Data Visualization", "Power BI"],
    detailedInfo: {
      responsibilities: [
        "Applied feature engineering, model selection, and evaluation for structured datasets to improve model performance and reliability.",
        "Built reproducible pipelines in Python and SQL; performed EDA and delivered insights through clear visualizations for technical and non-technical stakeholders.",
      ],
      achievements: ["Reproducible pipelines", "Model evaluation + feature engineering"],
    },
  },
  {
    title: "Full Stack Developer",
    company: "",
    period: "",
    description:
      "Built and deployed responsive web applications and RESTful APIs supporting authentication and business workflows.",
    skills: ["JavaScript", "Express", "MongoDB", "React", "HTML/CSS", "Next.js"],
    detailedInfo: {
      responsibilities: [
        "Implemented backend services using Node.js, Express, and MongoDB with React frontends focused on usability and performance.",
        "Delivered CRUD workflows, authentication, and dashboard features with clean UI and maintainable code.",
      ],
      achievements: ["Auth + CRUD workflows", "REST APIs + responsive UI"],
    },
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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

        {/* Uniform spacing between cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => {
            const isFlipped = flippedCards.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative cursor-pointer ${
                  isFlipped
                    ? "h-[680px] md:h-[520px]"
                    : "h-[280px] md:h-[250px]"
                }`}
                style={{ perspective: "1000px" }}
                onClick={() => toggleFlip(index)}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all flex flex-col"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
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

                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Push hint to bottom for consistent layout */}
                    <div className="mt-auto text-center text-sm text-gray-500 pt-4">
                      Click to see more details →
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-800/50 to-purple-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/50 flex flex-col"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <h3 className="text-2xl font-bold text-blue-300">
                        {exp.title}
                      </h3>
                      <span className="text-purple-300 font-semibold mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Scrollable content to keep card height uniform */}
                    <div className="flex-1 overflow-auto pr-2">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/50">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                          <h4 className="text-lg font-bold text-blue-300">
                            Key Responsibilities
                          </h4>
                        </div>

                        <div className="space-y-3">
                          {exp.detailedInfo.responsibilities.map((resp, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                              className="flex gap-3 items-start group"
                            >
                              <div className="mt-1 w-6 h-6 rounded-md bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center border border-blue-400/50 flex-shrink-0 group-hover:scale-110 transition-transform">
                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                              </div>
                              <span className="text-gray-200 leading-relaxed">
                                {resp}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-2">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg shadow-purple-500/50">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                              />
                            </svg>
                          </div>
                          <h4 className="text-lg font-bold text-purple-300">
                            Achievements
                          </h4>
                        </div>

                        <div className="space-y-3">
                          {exp.detailedInfo.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.1 * (i + exp.detailedInfo.responsibilities.length),
                                duration: 0.3,
                              }}
                              className="flex gap-3 items-start group"
                            >
                              <div className="mt-1 w-6 h-6 rounded-md bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center border border-green-400/50 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all">
                                <svg
                                  className="w-4 h-4 text-green-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-gray-200 leading-relaxed">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Always pinned bottom */}
                    <div className="text-center text-sm text-blue-300/70 mt-6 flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Click to flip back
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
