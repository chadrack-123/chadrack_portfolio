"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/data/timelineData";
import { FaCalendar, FaTrophy, FaGraduationCap, FaBriefcase, FaCertificate, FaCode } from "react-icons/fa";

const getCategoryIcon = (category?: string) => {
  switch (category) {
    case "Achievement":
      return <FaTrophy className="text-yellow-400" />;
    case "Education":
      return <FaGraduationCap className="text-blue-400" />;
    case "Career":
      return <FaBriefcase className="text-green-400" />;
    case "Certification":
      return <FaCertificate className="text-purple-400" />;
    case "Contribution":
      return <FaCode className="text-cyan-400" />;
    case "Project":
      return <FaCode className="text-indigo-400" />;
    default:
      return <FaCalendar className="text-gray-400" />;
  }
};

const getCategoryColor = (category?: string) => {
  switch (category) {
    case "Achievement":
      return "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30";
    case "Education":
      return "from-blue-500/20 to-blue-600/20 border-blue-500/30";
    case "Career":
      return "from-green-500/20 to-green-600/20 border-green-500/30";
    case "Certification":
      return "from-purple-500/20 to-purple-600/20 border-purple-500/30";
    case "Contribution":
      return "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30";
    case "Project":
      return "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30";
    default:
      return "from-gray-500/20 to-gray-600/20 border-gray-500/30";
  }
};

export default function Timeline() {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            My Journey
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A chronological timeline of my achievements, milestones, and experiences
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 opacity-30 hidden md:block" />

        {/* Timeline Events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full md:w-[calc(50%-2rem)] bg-gradient-to-br ${getCategoryColor(
                    event.category
                  )} backdrop-blur-sm border rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all`}
                >
                  {/* Category Badge */}
                  {event.category && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xl">{getCategoryIcon(event.category)}</div>
                      <span className="text-sm font-semibold text-gray-300">
                        {event.category}
                      </span>
                    </div>
                  )}

                  {/* Date */}
                  <div className="flex items-center gap-2 text-purple-400 font-semibold mb-3">
                    <FaCalendar />
                    <span>{event.date}</span>
                  </div>

                  {/* Image Placeholder */}
                  {event.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>

                {/* Center Circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-gray-900 z-10 shadow-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 animate-pulse"
                  />
                </div>

                {/* Connector Line */}
                <div
                  className={`hidden md:block absolute ${
                    isLeft ? "left-[calc(50%+0.75rem)]" : "right-[calc(50%+0.75rem)]"
                  } w-12 h-0.5 bg-gradient-to-r ${
                    isLeft
                      ? "from-purple-500/50 to-transparent"
                      : "from-transparent to-purple-500/50"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* End Marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex justify-center mt-12"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-500 border-4 border-gray-900 shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
}
