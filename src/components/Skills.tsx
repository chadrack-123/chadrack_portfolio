"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiPython, SiTypescript, SiJavascript, SiSharp,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiDotnet, SiFlask,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiFirebase,
  SiGit, SiDocker, SiGithubactions, SiAmazon, SiGooglecloud, SiLinux, SiPostman,
  SiPlotly, SiTableau,
  SiPytest, SiJest
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbApi, TbShieldLock, TbBrandWebflow, TbChartBar, TbTestPipe } from "react-icons/tb";

// Icon mapping for skills
const skillIcons: { [key: string]: JSX.Element } = {
  "Python": <SiPython className="text-blue-400" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "SQL": <FaDatabase className="text-orange-400" />,
  "C#": <SiSharp className="text-purple-500" />,
  "React": <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "HTML/CSS": <SiHtml5 className="text-orange-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Express": <SiExpress className="text-gray-300" />,
  "ASP.NET": <SiDotnet className="text-purple-500" />,
  "Flask": <SiFlask className="text-gray-300" />,
  "REST APIs": <TbApi className="text-blue-400" />,
  "JWT": <TbShieldLock className="text-green-400" />,
  "RBAC": <TbShieldLock className="text-yellow-400" />,
  "WebSockets": <TbBrandWebflow className="text-blue-400" />,
  "Pandas": <SiPandas className="text-blue-400" />,
  "NumPy": <SiNumpy className="text-cyan-400" />,
  "Scikit-learn": <SiScikitlearn className="text-orange-400" />,
  "TensorFlow": <SiTensorflow className="text-orange-500" />,
  "Feature Engineering": <TbChartBar className="text-purple-400" />,
  "SQL Analytics": <FaDatabase className="text-blue-400" />,
  "PostgreSQL": <SiPostgresql className="text-blue-400" />,
  "MS SQL Server": <SiMysql className="text-red-500" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "Redis": <SiRedis className="text-red-500" />,
  "Firebase": <SiFirebase className="text-yellow-500" />,
  "Git": <SiGit className="text-orange-500" />,
  "Docker": <SiDocker className="text-blue-400" />,
  "GitHub Actions (CI/CD)": <SiGithubactions className="text-blue-500" />,
  "AWS": <SiAmazon className="text-orange-400" />,
  "Google Cloud": <SiGooglecloud className="text-blue-400" />,
  "Linux": <SiLinux className="text-yellow-400" />,
  "Postman": <SiPostman className="text-orange-500" />,
  "Matplotlib": <TbChartBar className="text-blue-400" />,
  "Plotly": <SiPlotly className="text-blue-400" />,
  "Power BI": <TbChartBar className="text-yellow-400" />,
  "Tableau": <SiTableau className="text-orange-400" />,
  "D3.js": <TbChartBar className="text-orange-500" />,
  "PyTest": <SiPytest className="text-blue-400" />,
  "Jest": <SiJest className="text-red-500" />,
  "React Testing Library": <SiReact className="text-red-400" />,
};

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C#"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express", "ASP.NET", "Flask", "REST APIs", "JWT", "RBAC", "WebSockets"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Data & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Feature Engineering", "SQL Analytics"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MS SQL Server", "MongoDB", "Redis", "Firebase"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    category: "DevOps & Tooling",
    skills: ["Git", "Docker", "GitHub Actions (CI/CD)", "AWS", "Google Cloud", "Linux", "Postman"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    category: "Data Visualization",
    skills: ["Matplotlib", "Plotly", "Power BI", "Tableau", "D3.js"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "Testing",
    skills: ["PyTest", "Jest", "React Testing Library"],
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <div
                className={`h-1 w-full rounded-full mb-4 bg-gradient-to-r ${category.color}`}
              />

              <h3 className="text-xl font-bold text-white mb-4">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + i * 0.05,
                    }}
                    className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors flex items-center gap-2"
                  >
                    <span className="text-lg">{skillIcons[skill] || null}</span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
