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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75 animate-pulse" />
              <img
                src="/profile-bg.png"
                alt="Profile"
                className="relative w-full h-full rounded-full object-contain border-4 border-gray-800"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Software Developer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Passionate about building scalable web applications and mobile solutions. 
                Experienced in full-stack development with modern frameworks and technologies. 
                I enjoy creating intuitive user experiences and writing clean, maintainable code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Data Scientist
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in extracting insights from complex datasets through advanced 
                analytics and machine learning. Proficient in statistical modeling, 
                data visualization, and building predictive models that drive business decisions.
              </p>
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
