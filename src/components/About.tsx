"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Profile Picture Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-52 h-52 md:w-64 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                <img
                  src="/profile1-bg.png"
                  alt="Profile"
                  className="relative w-full h-full rounded-full object-contain shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Text Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-3 text-blue-400 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  Software Developer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passionate about building scalable web applications and mobile solutions. 
                  Experienced in full-stack development with modern frameworks and technologies. 
                  I enjoy creating intuitive user experiences and writing clean, maintainable code.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-3 text-purple-400 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Data Scientist
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Specialized in extracting insights from complex datasets through advanced 
                  analytics and machine learning. Proficient in statistical modeling, 
                  data visualization, and building predictive models that drive business decisions.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              I bridge the gap between software engineering and data science, combining 
              technical expertise with analytical thinking to deliver innovative solutions 
              that make a real impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
