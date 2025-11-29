// src/lib/data.ts

export interface Project {
  id: string;
  title: string;
  Description: string;
  imageClass: string;
  logo?: string;
  MainImage?: string;
  techStack: string[];
  links: {
    demo?: string;
    github?: string;
  };
  features?: string[];
  galleryImages?: string[];
}

export const projectsData: Project[] = [
  {
    id: "Midiloc",
    title: "Midiloc",
    Description:
      "Midiloc is a centralized platform that streamlines retail expansion by simplifying proposal submissions, document collection, multi-role approvals, and progress tracking. It reduces processing time, improves transparency, and serves as an integrated end-to-end solution for accelerating new store openings.",
    logo: "/projects/Midiloc/MidiLoc_logo.svg",
    MainImage: "/projects/Midiloc/dashboard.svg",
    imageClass: "bg-emerald-600",

    techStack: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "postgreSQL",
      "Supabase",
      "Vercel",
      "Docker",
    ],
    links: {
      demo: "https://gigblocks.com",
      github: "https://github.com/AlvinoWJ/gigblocks",
    },
    features: [
      "Smart Contract Job Management",
      "ENS Reputation System",
      "Transparent Payments",
      "Global Access",
    ],
    galleryImages: [
      "/projects/MidiLoc/img_1.svg",
      "/projects/MidiLoc/dashboard.svg",
      "/projects/MidiLoc/img_2.svg",
      "/projects/MidiLoc/img_3.svg",
      "/projects/MidiLoc/img_4.svg",
      "/projects/MidiLoc/img_5.svg",
      "/projects/MidiLoc/img_6.svg",
      "/projects/MidiLoc/img_7.svg",
      "/projects/MidiLoc/img_8.svg",
      "/projects/MidiLoc/img_9.svg",
    ],
  },
  {
    id: "Midiland",
    title: "Midiland",
    Description:
      "Platform freelancing terdesentralisasi yang dibangun di atas blockchain Scroll, memanfaatkan ENS untuk reputasi.",
    logo: "/projects/MidiLand/Midiland_logo.svg",
    MainImage: "/projects/MidiLand/img_1.svg",
    imageClass: "bg-emerald-600",

    techStack: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "postgreSQL",
      "Supabase",
      "Vercel",
      "Docker",
    ],
    links: {
      demo: "https://gigblocks.com",
      github: "https://github.com/AlvinoWJ/gigblocks",
    },
    features: [
      "Smart Contract Job Management",
      "ENS Reputation System",
      "Transparent Payments",
      "Global Access",
    ],
    galleryImages: [
      "/projects/MidiLand/img_1.svg",
      "/projects/MidiLand/img_2.svg",
      "/projects/MidiLand/img_3.svg",
      "/projects/MidiLand/img_4.svg",
      "/projects/MidiLand/img_5.svg",
      "/projects/MidiLand/img_6.svg",
      "/projects/MidiLand/img_7.svg",
      "/projects/MidiLand/img_8.svg",
      "/projects/MidiLand/img_9.svg",
      "/projects/MidiLand/img_10.svg",
      "/projects/MidiLand/img_11.svg",
      "/projects/MidiLand/img_12.svg",
      "/projects/MidiLand/img_13.svg",
    ],
  },
  {
    id: "eventify",
    title: "Eventify Platform",
    Description:
      "Sebuah platform manajemen event komprehensif yang memudahkan penyelenggara dalam mengatur tiket.",
    imageClass: "bg-indigo-600",

    techStack: ["React", "Node.js", "PostgreSQL"],
    links: {},
  },
];

// Helper function untuk mengambil data
export function getProjectById(id: string) {
  return projectsData.find((project) => project.id === id);
}
