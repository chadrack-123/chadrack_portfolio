"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Special Appointment System",
    description:
      "Full-stack university appointment platform with REST APIs, role-based access, and automated PDF confirmations.",
    tech: ["React", "ASP.NET", "C#", "Python", "MS SQL"],
    category: "Full-Stack (Production)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Event Registration System (QR Attendance)",
    description:
      "Real-time event attendance tracking using personalized QR codes with secure roles for organisers, attendees, and admins.",
    tech: ["React", "Flask", "Python", "PostgreSQL", "QR Codes"],
    category: "Real-time Systems",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Dnko — Beauty Salon Booking System",
    description:
      "Responsive booking platform with real-time scheduling, email notifications, and an admin dashboard for staff availability.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Email Notifications"],
    category: "Product Engineering",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "CoachWell — Coach Management System",
    description:
      "Dashboard-driven platform for managing client sessions, appointments, and payments with secure authentication and RBAC.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "RBAC"],
    category: "SaaS Platform",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Data Pipeline + Analytics (ETL → Dashboard)",
    description:
      "End-to-end pipeline that cleans and models data (ETL) and serves analytics for decision-making with reproducible workflows.",
    tech: ["Python", "SQL", "Pandas", "dbt", "Dashboards"],
    category: "Data Engineering",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "CI/CD + Cloud Deployment Automation",
    description:
      "Automated build, test, and deployment workflow for faster releases with repeatable infrastructure and containerized services.",
    tech: ["Docker", "GitHub Actions", "GCP/AWS", "CI/CD", "Deployments"],
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
