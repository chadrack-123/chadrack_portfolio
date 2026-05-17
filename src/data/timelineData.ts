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
    date: "May 2026",
    title: "Launched Portfolio Website",
    description: "Built and deployed this interactive portfolio using Next.js 15, TypeScript, Tailwind CSS, and Framer Motion — showcasing my projects, experience, and journey as a developer and data scientist.",
    category: "Project",
  },
  {
    id: 15,
    date: "2025 – 2026",
    title: "HOPFAN Library – Church Library Management System",
    description: "Built a full-stack library management system for House of Prayer for All Nations (HOPFAN). Features book cataloguing, member management with auto-generated member codes, lending workflows (borrow/return/renew/lost), automatic configurable fines, and email/SMS notifications via Nodemailer and Twilio.",
    category: "Project",
  },
  {
    id: 2,
    date: "November 2025",
    title: "Completed Master of Applied Data Science",
    description: "Graduated with a Master of Applied Data Science from the University of Johannesburg, specialising in machine learning, data engineering, and analytical modelling.",
    category: "Education",
  },
  {
    id: 3,
    date: "2024 – 2025",
    title: "CoachWell – Management System",
    description: "Built backend APIs using Next.js, Node.js, Express, and MongoDB to manage clients, sessions, and financial records. Implemented secure authentication, role-based access control, and dashboards consuming live backend data.",
    category: "Project",
  },
  {
    id: 4,
    date: "2024",
    title: "3+ Years in Production Software Development",
    description: "Reached over three years of hands-on experience building and maintaining production-grade systems at the University of Johannesburg — spanning backend APIs, database design, authentication, and live debugging across Python, C#, and JavaScript stacks.",
    category: "Achievement",
  },
  {
    id: 5,
    date: "February 2024",
    title: "Enrolled: Master of Applied Data Science",
    description: "Began postgraduate studies in Applied Data Science at the University of Johannesburg, deepening expertise in Python-based machine learning, statistical modelling, and data pipelines.",
    category: "Education",
  },
  {
    id: 6,
    date: "2023 – 2024",
    title: "Dnko – Booking Platform",
    description: "Developed backend services for an appointment and booking platform using Node.js, Express, MongoDB, and React. Handled API integration, authentication, data validation, and maintained the application in a production environment.",
    category: "Project",
  },
  {
    id: 7,
    date: "November 2023",
    title: "BCom Honours in Information Systems",
    description: "Completed a Bachelor of Commerce Honours in Information Systems at the University of Johannesburg, building a strong foundation in enterprise systems, database management, and software engineering principles.",
    category: "Education",
  },
  {
    id: 8,
    date: "2022 – 2023",
    title: "Event Registration & Attendance System",
    description: "Built backend services for real-time attendance tracking using QR codes with Python, Flask, PostgreSQL, and React. Designed optimised PostgreSQL schemas and queries for event analytics.",
    category: "Project",
  },
  {
    id: 9,
    date: "November 2022",
    title: "Advanced Diploma in Business Information Technology",
    description: "Completed an Advanced Diploma in Business Information Technology at the University of Johannesburg, advancing knowledge of software systems, business analysis, and application development.",
    category: "Education",
  },
  {
    id: 10,
    date: "2022",
    title: "Special Appointment Management System",
    description: "Developed a full-stack appointment management platform focused on data integrity and API reliability, using Python, Flask, PostgreSQL, React, and ASP.NET. Managed appointments, users, and approval workflows, and generated system documents programmatically.",
    category: "Project",
  },
  {
    id: 11,
    date: "January 2022",
    title: "Software Developer – University of Johannesburg",
    description: "Joined UJ as a Software Developer, designing and maintaining backend systems for live university platforms used by staff and students. Built RESTful APIs with Python (Flask, Django) and C# (ASP.NET), optimised PostgreSQL and MS SQL Server databases, and implemented authentication and role-based access control.",
    category: "Career",
  },
  {
    id: 12,
    date: "November 2021",
    title: "Diploma in Business Information Technology",
    description: "Graduated with a Diploma in Business Information Technology from the University of Johannesburg — the foundation of my technical career in software development and information systems.",
    category: "Education",
  },
  {
    id: 13,
    date: "February 2021",
    title: "Undergraduate Tutor & Student Assistant",
    description: "Provided technical support and code reviews for Python, JavaScript, C#, and SQL-based projects at UJ. Assisted students in debugging, improving database queries, and structuring backend logic — strengthening my ability to explain complex concepts clearly.",
    category: "Career",
  },
  {
    id: 14,
    date: "February 2019",
    title: "Started Diploma in Business Information Technology",
    description: "Began my academic journey at the University of Johannesburg — where my passion for software development, database design, and problem-solving first took root.",
    category: "Education",
  },
];
