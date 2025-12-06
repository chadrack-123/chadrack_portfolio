"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "R"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Web Development",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "HTML/CSS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Data Science & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Keras"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Linux", "Jupyter", "VS Code"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    category: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly", "D3.js", "Tableau", "Power BI"],
    color: "from-yellow-500 to-orange-500",
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
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                  >
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
