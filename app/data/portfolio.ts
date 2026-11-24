// All portfolio content lives here. Edit this file to update the site;
// components only handle layout and interaction.

export const profile = {
  name: "Christopher Nuñez",
  handle: "CJNunezV",
  role: "Civil Engineer & Research Analyst",
  focus: ["Scan-to-BIM", "Point Clouds & AI", "BIM Automation", "Digital Twins"],
  tagline:
    "Bridging civil engineering, artificial intelligence, and digital twins for the built environment.",
  email: "christopher.nunez.v@gmail.com",
  avatar: "/avatar.jpg",
  // Set to a file in /public (e.g. "/cv.pdf") to show a "Download CV" button.
  cv: null as string | null,
  socials: [
    { kind: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/christopher-nunez-v/" },
    { kind: "github", label: "GitHub", href: "https://github.com/CJNunezV" },
    {
      kind: "researchgate",
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Christopher-Nunez-Varillas",
    },
  ] as const,
};

export const about = [
  "Civil Engineer and computational researcher with over 3 years of experience building data-driven systems for the built environment — point cloud processing, BIM automation, and AI-assisted 3D reconstruction. I design pipelines that connect raw spatial data, engineering logic, and research outcomes.",
  "My goal is to advance digital construction and smart buildings through AI and computational methods, turning complex spatial and engineering problems into measurable results for research, industry, and academia.",
];

export type SkillIcon =
  | "python"
  | "csharp"
  | "node"
  | "bim"
  | "cloud"
  | "twin"
  | "write"
  | "paper"
  | "talk";

export const expertise: {
  title: string;
  items: { icon: SkillIcon; label: string; tools: string[] }[];
}[] = [
  {
    title: "Programming",
    items: [
      { icon: "python", label: "Python", tools: ["Open3D", "OpenCV", "NumPy"] },
      { icon: "csharp", label: "C#", tools: ["Revit API", "Navisworks API", "AutoCAD API"] },
      { icon: "node", label: "JavaScript / Node.js", tools: ["Backend", "Tooling"] },
    ],
  },
  {
    title: "Technologies",
    items: [
      { icon: "bim", label: "BIM", tools: ["OpenBIM", "IFC", "Revit", "Navisworks"] },
      { icon: "cloud", label: "Point Clouds", tools: ["LiDAR", "ReCap", "Photogrammetry"] },
      { icon: "twin", label: "Digital Twins", tools: ["IoT sensors", "Data + models", "Interoperability"] },
    ],
  },
  {
    title: "Research",
    items: [
      { icon: "paper", label: "Peer-reviewed publications", tools: ["ISARC", "IEEE CONIITI"] },
      { icon: "talk", label: "Conference talks", tools: ["International", "National"] },
      { icon: "write", label: "Academic writing", tools: ["Papers", "Reports"] },
    ],
  },
];

export type ProjectCategory = "AI & Point Clouds" | "BIM Automation" | "Digital Twins & FM";

export type Project = {
  id: string;
  icon: "scan2bim" | "revitqa" | "navis" | "dalux" | "iot";
  category: ProjectCategory;
  title: string;
  subtitle: string;
  summary: string;
  /** The headline result, shown big on the card. */
  metric?: { value: string; label: string };
  impact: string[];
  highlights: string[];
  tags: string[];
  images: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "scan-to-bim",
    icon: "scan2bim",
    category: "AI & Point Clouds",
    title: "Scan-to-BIM Automation App",
    subtitle: "Point cloud → BIM-ready model",
    summary:
      "An end-to-end Scan-to-BIM pipeline built with Python, OpenCV, and Open3D. It automates point cloud preprocessing and processing and speeds up BIM model generation, turning raw scans into standardized BIM-ready outputs.",
    metric: { value: "< 1 h", label: "from raw scan to BIM-ready output" },
    impact: [
      "End-to-end pipeline: preprocessing → processing → BIM model",
      "Standardized deliverables with less manual work",
    ],
    highlights: [
      "Automated point cloud cleanup for consistent models",
      "Extracts structured information to speed up modeling decisions",
      "Repeatable BIM outputs with one workflow across projects",
    ],
    tags: ["Python", "OpenCV", "Open3D", "Point Clouds", "Scan-to-BIM"],
    images: ["/projects/s2b/s2b.png", "/projects/s2b/s2b2.png", "/projects/s2b/s2b3.png"],
  },
  {
    id: "revit-qa",
    icon: "revitqa",
    category: "BIM Automation",
    title: "Revit Add-in — Automated Model QA/QC",
    subtitle: "Geometry + COBie + OmniClass → Excel report",
    summary:
      "A Revit add-in that automates BIM coordination review by validating geometry and data integrity (COBie and OmniClass), then generates an Excel review report — standardizing QA/QC across large model libraries.",
    metric: { value: "7 → 2 days", label: "coordination review time (~71% faster)" },
    impact: ["Used across 2 TB of BIM models", "Same review criteria for every team"],
    highlights: [
      "Automatic geometry checks and data validation rules",
      "One-click Excel report with issues and summary",
      "Consistent, repeatable review across teams",
    ],
    tags: ["Revit API", "C#", "COBie", "OmniClass", "QA/QC"],
    images: [
      "/projects/revisionlap/Revisionlap.png",
      "/projects/revisionlap/Revisionlap2.png",
      "/projects/revisionlap/Revisionlap3.png",
    ],
  },
  {
    id: "navis-qto",
    icon: "navis",
    category: "BIM Automation",
    title: "Navisworks Add-in — Automated Quantity Takeoff",
    subtitle: "Whole-model quantities, not category by category",
    summary:
      "A Navisworks API add-in that calculates quantity takeoffs reliably across the entire federated model, avoiding Revit's category-only limitation.",
    impact: ["Faster takeoffs", "Consistent quantities across disciplines", "Fewer manual errors"],
    highlights: [
      "Unified quantities across categories and model elements",
      "Reusable workflow for different projects and models",
      "Export-ready outputs for reporting",
    ],
    tags: ["Navisworks API", "C#", "BIM", "Quantity Takeoff"],
    images: ["/projects/navis/Navis.png", "/projects/navis/Navis2.png", "/projects/navis/Navis3.png"],
  },
  {
    id: "dalux-fm",
    icon: "dalux",
    category: "Digital Twins & FM",
    title: "Airport Asset Management",
    subtitle: "Dalux FM + IFC + COBie + QR codes",
    summary:
      "Implemented Dalux FM for airport asset management, keeping data interoperable through IFC models and COBie. QR codes link physical spaces to their digital asset records.",
    impact: ["Operational visibility", "Interoperable handover data", "Asset lookup by QR scan"],
    highlights: [
      "Mapped IFC + COBie to operational asset workflows",
      "QR-based access from physical spaces to asset records",
      "Better maintainability and handover data quality",
    ],
    tags: ["Dalux FM", "IFC", "COBie", "Asset Management", "QR Codes"],
    images: ["/projects/dalux/dalux.png", "/projects/dalux/dalux2.png", "/projects/dalux/dalux3.png"],
  },
  {
    id: "iot-twin",
    icon: "iot",
    category: "Digital Twins & FM",
    title: "IoT Environmental Monitoring + BIM",
    subtitle: "An early-stage digital twin",
    summary:
      "Built IoT devices (ESP32 + sensors) that monitor environmental conditions in buildings and link the data to a BIM model, laying the groundwork for digital twin workflows.",
    impact: ["Real-time monitoring", "Sensor data in BIM context", "Digital twin baseline"],
    highlights: [
      "Sensor data connected to the building model",
      "Foundation for dashboards, alerts, and simulations",
      "Extensible to more sensors and spaces",
    ],
    tags: ["IoT", "ESP32", "Sensors", "BIM", "Digital Twins"],
    images: ["/projects/iot/iot.jpg", "/projects/iot/iot2.png", "/projects/iot/iot3.png"],
  },
];

export type Publication = {
  id: string;
  venue: string;
  venueFull: string;
  year: number;
  title: string;
  /** null while the DOI has not been assigned yet. */
  doi: string | null;
  tags: string[];
  logo: string;
};

export const publications: Publication[] = [
  {
    id: "isarc2026",
    venue: "ISARC 2026",
    venueFull: "43rd International Symposium on Automation and Robotics in Construction",
    year: 2026,
    title:
      "An automated framework to quantify exposure of informal urban settlements using UAV and Scan-to-BIM",
    doi: null,
    tags: ["Scan-to-BIM", "Urban Digitalization", "UAV"],
    logo: "/conferences/ISARC-2026.png",
  },
  {
    id: "isarc2025",
    venue: "ISARC 2025",
    venueFull: "42nd International Symposium on Automation and Robotics in Construction",
    year: 2025,
    title:
      "Algorithm development for automatic detection of progressive damage in tunnel cross-sectional geometry",
    doi: "10.22260/ISARC2025/0194",
    tags: ["Tunnels", "Point Clouds", "Open3D"],
    logo: "/conferences/ISARC-2025.png",
  },
  {
    id: "isarc2024",
    venue: "ISARC 2024",
    venueFull: "41st International Symposium on Automation and Robotics in Construction",
    year: 2024,
    title: "3D reconstruction of a bridge with concrete damage classification using deep learning",
    doi: "10.22260/ISARC2024/0094",
    tags: ["Deep Learning", "Damage Detection", "3D Reconstruction"],
    logo: "/conferences/ISARC-2024.png",
  },
  {
    id: "isarc2023",
    venue: "ISARC 2023",
    venueFull: "40th International Symposium on Automation and Robotics in Construction",
    year: 2023,
    title: "3D Printing: An opportunity for the sustainable development of building construction",
    doi: "10.22260/ISARC2023/0096",
    tags: ["3D Printing", "Sustainable Construction"],
    logo: "/conferences/ISARC-2023.png",
  },
  {
    id: "coniiti2023-robotics",
    venue: "IEEE CONIITI 2023",
    venueFull: "IX International Conference on Industry Innovation and Technology Integration",
    year: 2023,
    title: "Robotics in building construction: Advantages and barriers",
    doi: "10.1109/CONIITI61170.2023.10324131",
    tags: ["Robotics", "Construction", "Automation"],
    logo: "/conferences/CONIITI.png",
  },
  {
    id: "coniiti2023-vr",
    venue: "IEEE CONIITI 2023",
    venueFull: "IX International Conference on Industry Innovation and Technology Integration",
    year: 2023,
    title:
      "Virtual reality for design and site planning in construction projects: Advantages and barriers",
    doi: "10.1109/CONIITI61170.2023.10324023",
    tags: ["VR", "Planning", "AEC"],
    logo: "/conferences/CONIITI.png",
  },
  {
    id: "coniiti2021",
    venue: "IEEE CONIITI 2021",
    venueFull: "VII International Conference on Industry Innovation and Technology Integration",
    year: 2021,
    title:
      "An Analysis of LEED Certification's Adaptation to Design and Construction of Sustainable Buildings in Peru",
    doi: "10.1109/CONIITI53815.2021.9619628",
    tags: ["Sustainability", "LEED", "Construction"],
    logo: "/conferences/CONIITI.png",
  },
];

export type Talk = {
  id: string;
  event: string;
  year: number;
  city: string;
  country: string;
  countryCode: string;
  scope: "International" | "National";
  photos: string[];
  /** id of a publication presented at this event, if any */
  publicationId?: string;
};

export const talks: Talk[] = [
  {
    id: "coreic2025",
    event: "COREIC 2025",
    year: 2025,
    city: "Abancay",
    country: "Peru",
    countryCode: "pe",
    scope: "National",
    photos: [
      "/talks/coreic2025/COREIC2025.jpg",
      "/talks/coreic2025/COREIC1.jpg",
      "/talks/coreic2025/COREIC20252.jpg",
    ],
  },
  {
    id: "bimfic2025",
    event: "BIMFIC 2025",
    year: 2025,
    city: "Lima",
    country: "Peru",
    countryCode: "pe",
    scope: "National",
    photos: ["/talks/bimfic2025/BIMFIC.jpg", "/talks/bimfic2025/BIMFIC2.jpg", "/talks/bimfic2025/BIMFIC3.jpg"],
  },
  {
    id: "coneic2025",
    event: "CONEIC 2025",
    year: 2025,
    city: "Huaraz",
    country: "Peru",
    countryCode: "pe",
    scope: "National",
    photos: ["/talks/coneic2025/CONEIC.jpg", "/talks/coneic2025/CONEIC2.jpg", "/talks/coneic2025/CONEIC3.jpg"],
  },
  {
    id: "foreic2025",
    event: "FOREIC 2025",
    year: 2025,
    city: "Lima",
    country: "Peru",
    countryCode: "pe",
    scope: "National",
    photos: ["/talks/foreic2025/FOREIC.jpg", "/talks/foreic2025/FOREIC2.jpg", "/talks/foreic2025/FOREIC3.jpg"],
  },
  {
    id: "isarc2024",
    event: "ISARC 2024",
    year: 2024,
    city: "Lille",
    country: "France",
    countryCode: "fr",
    scope: "International",
    publicationId: "isarc2024",
    photos: [
      "/talks/isarc2024/ISARC2024.jpg",
      "/talks/isarc2024/ISARC20242.jpg",
      "/talks/isarc2024/ISARC20243.jpg",
    ],
  },
  {
    id: "isarc2023",
    event: "ISARC 2023",
    year: 2023,
    city: "Chennai",
    country: "India",
    countryCode: "in",
    scope: "International",
    publicationId: "isarc2023",
    photos: [
      "/talks/isarc2023/ISARC2023.jpeg",
      "/talks/isarc2023/ISARC20232.jpeg",
      "/talks/isarc2023/ISARC20233.jpeg",
    ],
  },
];

export type Recommendation = {
  name: string;
  role: string;
  photo: string;
  text: string;
  linkedin?: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Marck Steewar Regalado Espinoza",
    role: "Professor • Researcher",
    photo: "/recommendations/regalado.jpg",
    text: "Christopher is a highly enthusiastic, entrepreneurial, and dedicated young engineer. I have been able to witness his growth throughout his academic journey and professional career, where he has consistently demonstrated the ability to face any challenge. His profile embodies all the key qualities for success.",
    linkedin: "https://www.linkedin.com/in/marck-regalado-espinoza/",
  },
  {
    name: "Oscar Manuel Solis Garcia",
    role: "Research Assistant",
    photo: "/recommendations/solis.png",
    text: "Christopher is a dedicated professional who approaches any challenge with sound judgment and determination. He stands out for his strong leadership and communication skills, which enable him to collaborate effectively and motivate his team. I deeply admire and respect him for his passion for research and his consistent commitment to excellence.",
    linkedin: "https://www.linkedin.com/in/oscar-manuel-solis-garcia-123b83226/",
  },
  {
    name: "Jorge Rojas Rondan",
    role: "Researcher",
    photo: "/recommendations/rojas.jpg",
    text: "I had the opportunity to meet Christopher during his senior year as an undergraduate student at my alma mater and he approached me for advice. From our first interactions, he stood out as a highly self-motivated and proactive young engineer. Christopher demonstrates strong dedication in everything he undertakes. He possesses a strong drive for self-learning, consistently seeking to expand his knowledge beyond classroom requirements. His intellectual curiosity and willingness to explore new ideas reflect both maturity and a genuine passion for growth. I see great potential in Christopher, particularly in the area of research and the implementation of innovative technologies within the construction industry.",
    linkedin: "https://www.linkedin.com/in/jorge-rojas-rondan/",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "talks", label: "Talks" },
  { id: "expertise", label: "Expertise" },
  { id: "recommendations", label: "Recommendations" },
  { id: "contact", label: "Contact" },
];
