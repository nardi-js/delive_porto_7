// Default data structure
export const defaultData = {
  profile: {
    name: "Adrian Wijaya",
    title: "Computer Science Student & Full-Stack Developer",
    description: "Computer Science student at Universitas Indonesia passionate about web & mobile development. Experienced with React, Node.js, and cloud services. Active in developer communities and constantly learning new technologies.",
    profilePictureURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "adrian.wijaya@student.ui.ac.id",
    socials: [
      { name: "GitHub", url: "https://github.com/adrianwijaya", icon: "🔗" },
      { name: "LinkedIn", url: "https://linkedin.com/in/adrian-wijaya-dev", icon: "💼" },
      { name: "Twitter", url: "https://twitter.com/adrianwijaya_", icon: "🐦" },
      { name: "Instagram", url: "https://instagram.com/adrian.dev", icon: "📷" }
    ],
    education: [
      {
        id: "edu1",
        institution: "Universitas Indonesia",
        degree: "Bachelor of Computer Science",
        year: "2021 - Present",
        description: "GPA: 3.87/4.00 - Focus on Software Engineering and AI. Active in Programming Club UI and GDSC UI."
      },
      {
        id: "edu2",
        institution: "SMA Negeri 3 Jakarta",
        degree: "Science Major",
        year: "2018 - 2021",
        description: "Graduated cum laude. 1st place National Informatics Olympiad 2020. Head of Robotics Club."
      }
    ],
    experience: [
      {
        id: "exp1",
        company: "Gojek Indonesia",
        position: "Software Engineer Intern",
        year: "Jun 2024 - Sep 2024",
        description: "Developed features for Gojek app using React Native. Optimized performance by 35%."
      },
      {
        id: "exp2",
        company: "Tokopedia",
        position: "Frontend Developer Intern",
        year: "Jan 2024 - May 2024",
        description: "Built reusable UI components for seller dashboard. Implemented automated testing with Jest."
      },
      {
        id: "exp3",
        company: "Freelance Web Developer",
        position: "Full-Stack Developer",
        year: "2023 - Present",
        description: "Completed 20+ e-commerce and information system projects. 4.9/5.0 client rating."
      }
    ]
  },
  skills: [
    { id: "skill1", name: "JavaScript", level: 95, category: "Frontend", icon: "🟨" },
    { id: "skill2", name: "TypeScript", level: 90, category: "Frontend", icon: "🔷" },
    { id: "skill3", name: "React", level: 93, category: "Frontend", icon: "⚛️" },
    { id: "skill4", name: "Next.js", level: 88, category: "Frontend", icon: "▲" },
    { id: "skill5", name: "Vue.js", level: 78, category: "Frontend", icon: "💚" },
    { id: "skill6", name: "Tailwind CSS", level: 97, category: "Frontend", icon: "🎨" },
    { id: "skill7", name: "Node.js", level: 87, category: "Backend", icon: "🟢" },
    { id: "skill8", name: "Express.js", level: 90, category: "Backend", icon: "🚂" },
    { id: "skill9", name: "Python", level: 85, category: "Programming", icon: "🐍" },
    { id: "skill10", name: "Go", level: 72, category: "Programming", icon: "🐹" },
    { id: "skill11", name: "Java", level: 80, category: "Programming", icon: "☕" },
    { id: "skill12", name: "PostgreSQL", level: 83, category: "Database", icon: "🐘" },
    { id: "skill13", name: "MongoDB", level: 88, category: "Database", icon: "🍃" },
    { id: "skill14", name: "Redis", level: 75, category: "Database", icon: "🔴" },
    { id: "skill15", name: "Git & GitHub", level: 92, category: "Tools", icon: "📦" },
    { id: "skill16", name: "Docker", level: 78, category: "DevOps", icon: "🐳" },
    { id: "skill17", name: "AWS", level: 70, category: "Cloud", icon: "☁️" },
    { id: "skill18", name: "Firebase", level: 85, category: "Cloud", icon: "🔥" }
  ],
  projects: [
    {
      id: "proj1",
      title: "ShopMart - E-Commerce Platform",
      shortDescription: "Full-stack e-commerce platform with complete features",
      longDescription: "Modern e-commerce platform built with Next.js and Node.js. Features: product management, shopping cart, Midtrans payment gateway, order tracking, and admin dashboard. Optimized for thousands of concurrent users.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Midtrans", "AWS S3", "Docker"],
      githubURL: "https://github.com/adrianwijaya/shopmart",
      liveDemoURL: "https://shopmart-demo.vercel.app",
      thumbnailURL: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      features: [
        "Authentication with JWT and OAuth2",
        "Product catalog with filters and search",
        "Real-time inventory management",
        "Midtrans & QRIS payment integration",
        "Order tracking with email notifications",
        "Admin dashboard with analytics",
        "Responsive design for all devices"
      ],
      challenges: "Managing complex state, implementing secure payment gateway, and optimizing database for large catalog.",
      solutions: "Implemented Redux Toolkit for state management, Redis for caching, and PostgreSQL indexing for optimal performance."
    },
    {
      id: "proj2",
      title: "TaskMaster - Project Management",
      shortDescription: "Project management app with real-time sync",
      longDescription: "Project management app inspired by Trello. Features: real-time collaboration, drag-and-drop, team analytics. Perfect for development teams or any project.",
      techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "React DnD"],
      githubURL: "https://github.com/adrianwijaya/taskmaster",
      liveDemoURL: "https://taskmaster-app.vercel.app",
      thumbnailURL: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop"
      ],
      features: [
        "Real-time collaboration with Firebase",
        "Drag-and-drop task management",
        "Team workspaces with role-based access",
        "Task assignments and due dates",
        "Activity timeline and notifications",
        "Analytics with chart visualizations",
        "Dark mode support"
      ],
      challenges: "Implementing smooth real-time updates for multiple users and handling drag-and-drop without lag.",
      solutions: "Used Firebase with optimistic updates, custom hooks for WebSocket, and React.memo for optimized rendering."
    },
    {
      id: "proj3",
      title: "WeatherKu - Weather App",
      shortDescription: "Weather forecast app with modern UI",
      longDescription: "Mobile app for checking weather with accurate data from BMKG and OpenWeather API. Features: 7-day forecast, hourly forecast, weather map, and extreme weather notifications.",
      techStack: ["React Native", "Expo", "OpenWeather API", "AsyncStorage"],
      githubURL: "https://github.com/adrianwijaya/weatherku",
      liveDemoURL: "https://expo.dev/@adrianwijaya/weatherku",
      thumbnailURL: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop"
      ],
      features: [
        "Current weather with animated icons",
        "7-day & hourly forecasts",
        "Multiple locations with search",
        "Extreme weather notifications",
        "Interactive weather map",
        "Offline caching",
        "Auto-detect user location"
      ],
      challenges: "Handle different location permissions on iOS/Android, manage API rate limits, and smooth animations.",
      solutions: "Caching strategy with AsyncStorage, custom animation components, and fallback mechanisms for location services."
    },
    {
      id: "proj4",
      title: "CodeSnippet - Developer Tool",
      shortDescription: "Platform for saving and sharing code snippets",
      longDescription: "Platform for developers to save, organize, and share code snippets. Syntax highlighting for 50+ languages, collections, tags, and social features. GitHub Gist integration.",
      techStack: ["Next.js", "MongoDB", "Prisma", "NextAuth", "Highlight.js"],
      githubURL: "https://github.com/adrianwijaya/codesnippet",
      liveDemoURL: "https://codesnippet.vercel.app",
      thumbnailURL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
      ],
      features: [
        "Syntax highlighting for 50+ languages",
        "Collections with tags system",
        "Full-text search and filters",
        "Public & private snippets",
        "Like, comment, and share",
        "Export as images",
        "GitHub Gist integration"
      ],
      challenges: "Efficient search in large database and fast syntax highlighting without blocking UI.",
      solutions: "MongoDB text indexes for search, code splitting for highlight.js, and web workers for heavy operations."
    }
  ],
  certificates: [
    {
      id: "cert1",
      certificateTitle: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      year: "December 2023",
      credentialID: "META2023FE789",
      credentialURL: "https://coursera.org/verify/professional-cert/META2023FE789",
      certificateImageURL: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&h=300&fit=crop"
    },
    {
      id: "cert2",
      certificateTitle: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "October 2023",
      credentialID: "AWS-CLF-2023-456",
      credentialURL: "https://aws.amazon.com/verification/AWS-CLF-2023-456",
      certificateImageURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    },
    {
      id: "cert3",
      certificateTitle: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      year: "August 2023",
      credentialID: "GOOGLE-DA-2023",
      credentialURL: "https://coursera.org/verify/professional-cert/GOOGLE-DA-2023",
      certificateImageURL: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: "cert4",
      certificateTitle: "Full-Stack Web Development Specialization",
      issuer: "The Hong Kong University of Science and Technology",
      year: "June 2023",
      credentialID: "HKUST-FSWD-2023",
      credentialURL: "https://coursera.org/verify/specialization/HKUST-FSWD-2023",
      certificateImageURL: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
    },
    {
      id: "cert5",
      certificateTitle: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "March 2023",
      credentialID: "FCC-JSALGO-2023",
      credentialURL: "https://freecodecamp.org/certification/adrianwijaya/javascript-algorithms",
      certificateImageURL: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop"
    },
    {
      id: "cert6",
      certificateTitle: "Docker & Kubernetes: Complete Guide",
      issuer: "Udemy",
      year: "January 2024",
      credentialID: "UC-DOCKER-K8S-2024",
      credentialURL: "https://udemy.com/certificate/UC-DOCKER-K8S-2024",
      certificateImageURL: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop"
    }
  ],
  resume: {
    summary: "Computer Science student at UI semester 7 with GPA 3.87 and 2+ years of full-stack development experience. Proficient in JavaScript/TypeScript, React, Node.js. Completed internships at Gojek & Tokopedia, plus 20+ freelance projects with 4.9/5.0 rating.",
    education: [],
    experience: [],
    skills: [],
    achievements: [
      "🏆 Dean's List (2022, 2023, 2024)",
      "🥇 1st Place - UI Hackathon 2024",
      "🥈 2nd Place - National Informatics Olympiad 2020",
      "📝 Published paper at IEEE Conference 2024",
      "⭐ 4.9/5.0 freelance rating (20+ projects)",
      "👥 Led team of 5 developers for student portal",
      "🎤 Speaker at GDSC - Modern Web Dev",
      "💻 Contributor to 10+ open-source projects",
      "🌟 Best Intern Award - Gojek 2024"
    ]
  },
  inbox: [],
  theme: {
    primaryColor: "#3B82F6",
    accentColor: "#60A5FA",
    fontSize: "medium",
    layout: "modern"
  }
};

// LocalStorage keys
const STORAGE_KEY = "portfolioData";

// Initialize localStorage with default data
export const initializeStorage = () => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  if (!existingData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  }
};

// Get all data
export const getAllData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : defaultData;
};

// Save all data
export const saveAllData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Get specific section
export const getSection = (sectionName) => {
  const allData = getAllData();
  return allData[sectionName] || null;
};

// Update specific section
export const updateSection = (sectionName, data) => {
  const allData = getAllData();
  allData[sectionName] = data;
  saveAllData(allData);
};

// Profile methods
export const getProfile = () => getSection("profile");
export const updateProfile = (profile) => updateSection("profile", profile);

// Skills methods
export const getSkills = () => getSection("skills");
export const updateSkills = (skills) => updateSection("skills", skills);
export const addSkill = (skill) => {
  const skills = getSkills();
  const newSkill = { ...skill, id: Date.now().toString() };
  updateSkills([...skills, newSkill]);
  return newSkill;
};
export const updateSkill = (id, updatedSkill) => {
  const skills = getSkills();
  const index = skills.findIndex(s => s.id === id);
  if (index !== -1) {
    skills[index] = { ...skills[index], ...updatedSkill };
    updateSkills(skills);
  }
};
export const deleteSkill = (id) => {
  const skills = getSkills();
  updateSkills(skills.filter(s => s.id !== id));
};

// Projects methods
export const getProjects = () => getSection("projects");
export const updateProjects = (projects) => updateSection("projects", projects);
export const getProjectById = (id) => {
  const projects = getProjects();
  return projects.find(p => p.id === id);
};
export const addProject = (project) => {
  const projects = getProjects();
  const newProject = { ...project, id: Date.now().toString() };
  updateProjects([...projects, newProject]);
  return newProject;
};
export const updateProject = (id, updatedProject) => {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...updatedProject };
    updateProjects(projects);
  }
};
export const deleteProject = (id) => {
  const projects = getProjects();
  updateProjects(projects.filter(p => p.id !== id));
};

// Certificates methods
export const getCertificates = () => getSection("certificates");
export const updateCertificates = (certificates) => updateSection("certificates", certificates);
export const addCertificate = (certificate) => {
  const certificates = getCertificates();
  const newCertificate = { ...certificate, id: Date.now().toString() };
  updateCertificates([...certificates, newCertificate]);
  return newCertificate;
};
export const updateCertificate = (id, updatedCertificate) => {
  const certificates = getCertificates();
  const index = certificates.findIndex(c => c.id === id);
  if (index !== -1) {
    certificates[index] = { ...certificates[index], ...updatedCertificate };
    updateCertificates(certificates);
  }
};
export const deleteCertificate = (id) => {
  const certificates = getCertificates();
  updateCertificates(certificates.filter(c => c.id !== id));
};

// Resume methods
export const getResume = () => getSection("resume");
export const updateResume = (resume) => updateSection("resume", resume);

// Inbox methods
export const getInbox = () => getSection("inbox");
export const addMessage = (message) => {
  const inbox = getInbox();
  const newMessage = { 
    ...message, 
    id: Date.now().toString(),
    timestamp: new Date().toISOString()
  };
  updateSection("inbox", [...inbox, newMessage]);
  return newMessage;
};
export const deleteMessage = (id) => {
  const inbox = getInbox();
  updateSection("inbox", inbox.filter(m => m.id !== id));
};

// Theme methods
export const getTheme = () => getSection("theme");
export const updateTheme = (theme) => updateSection("theme", theme);

// Reset to default
export const resetData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
};
