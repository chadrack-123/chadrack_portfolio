export interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "January 2026",
    title: "Launched Portfolio Website",
    description: "Built and deployed an interactive portfolio website using Next.js 15, TypeScript, and Framer Motion. Features smooth animations and responsive design.",
    category: "Project",
  },
  {
    id: 2,
    date: "December 2025",
    title: "Completed Advanced Data Science Course",
    description: "Finished comprehensive data science certification covering machine learning, deep learning, and data visualization techniques.",
    category: "Education",
  },
  {
    id: 3,
    date: "October 2025",
    title: "Published Research Paper",
    description: "Co-authored and published a research paper on predictive analytics in the International Journal of Data Science.",
    category: "Achievement",
  },
  {
    id: 4,
    date: "August 2025",
    title: "Promoted to Senior Developer",
    description: "Received promotion to Senior Software Developer role, leading a team of 5 developers on enterprise applications.",
    category: "Career",
  },
  {
    id: 5,
    date: "June 2025",
    title: "Won Hackathon Competition",
    description: "First place winner at TechHack 2025 for developing an AI-powered solution for sustainable agriculture.",
    category: "Achievement",
  },
  {
    id: 6,
    date: "March 2025",
    title: "Open Source Contribution Milestone",
    description: "Reached 100+ contributions to open-source projects, with major contributions to popular React libraries.",
    category: "Contribution",
  },
  {
    id: 7,
    date: "January 2025",
    title: "Started New Role",
    description: "Joined innovative tech startup as Full Stack Developer, working with cutting-edge technologies.",
    category: "Career",
  },
  {
    id: 8,
    date: "November 2024",
    title: "Certified AWS Solutions Architect",
    description: "Successfully obtained AWS Solutions Architect Associate certification after rigorous preparation.",
    category: "Certification",
  },
];
