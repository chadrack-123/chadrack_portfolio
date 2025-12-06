"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Customer Churn Prediction",
    description: "Machine learning model to predict customer churn with 92% accuracy",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask"],
    category: "Data Science",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for visualizing real-time business metrics",
    tech: ["React", "D3.js", "WebSocket", "Redis"],
    category: "Data Visualization",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform mobile app for fitness tracking and workout planning",
    tech: ["React Native", "Firebase", "Redux", "API Integration"],
    category: "Mobile Development",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Sentiment Analysis Tool",
    description: "NLP-based tool for analyzing customer feedback and social media sentiment",
    tech: ["Python", "NLTK", "TensorFlow", "FastAPI"],
    category: "Machine Learning",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated deployment pipeline and infrastructure as code implementation",
    tech: ["AWS", "Terraform", "Docker", "GitHub Actions"],
    category: "DevOps",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all cursor-pointer"
            >
              <div
                className={`h-2 w-20 rounded-full mb-4 bg-gradient-to-r ${project.color}`}
              />
              
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                {project.category}
              </span>
              
              <h3 className="text-xl font-bold text-white mt-2 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs"
                  >
                    {tech}
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
