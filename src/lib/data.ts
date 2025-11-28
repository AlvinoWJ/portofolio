// src/lib/data.ts

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageClass: string;
  logo?: string;
  MainImage?: string;
  techStack: string[];
  links: {
    demo?: string;
    github?: string;
  };
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: "Midiloc",
    title: "Midiloc",
    shortDescription:
      "Platform freelancing terdesentralisasi yang dibangun di atas blockchain Scroll, memanfaatkan ENS untuk reputasi.",
    logo: "/projects/Midiloc/MidiLoc_logo.svg",
    MainImage: "/projects/Midiloc/dashboard.svg",
    imageClass: "bg-emerald-600",
    fullDescription:
      "Midiloc is a centralized data and workflow platform designed to streamline the entire retail expansion process from proposal submission and document collection to multi-role approval and progress tracking addressing the inefficiencies and delays commonly found in traditional store-opening procedures. By unifying all stakeholders in a single integrated system and enabling role-based actions for input, review, and approval, Midiloc significantly reduces processing time, enhances transparency, and improves operational efficiency, ultimately becoming a comprehensive end-to-end solution for accelerating new store openings in retail companies.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Solidity",
      "Ethers.js",
      "Scroll",
      "ENS",
      "WAGMI",
      "IPFS",
      "Pinata",
      "Hardhat",
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
  },
  {
    id: "Midiland",
    title: "Midiland",
    shortDescription:
      "Platform freelancing terdesentralisasi yang dibangun di atas blockchain Scroll, memanfaatkan ENS untuk reputasi.",
    logo: "/projects/MidiLand_logo.svg",
    MainImage: "/projects/MidiLand_logo.svg",
    imageClass: "bg-emerald-600",
    fullDescription:
      "GigBlocks is a decentralized freelancing platform built on Scroll blockchain, leveraging ENS for reputation management. It aims to solve issues of traditional freelance platforms by offering transparency, global access, and fair treatment of freelancers. Key features include smart contract-based job management, ENS-powered reputation system, and future plans for ZK-based privacy features.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Solidity",
      "Ethers.js",
      "Scroll",
      "ENS",
      "WAGMI",
      "IPFS",
      "Pinata",
      "Hardhat",
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
  },
  {
    id: "eventify",
    title: "Eventify Platform",
    shortDescription:
      "Sebuah platform manajemen event komprehensif yang memudahkan penyelenggara dalam mengatur tiket.",
    imageClass: "bg-indigo-600",
    fullDescription: "Detail lengkap tentang Eventify...",
    techStack: ["React", "Node.js", "PostgreSQL"],
    links: {},
  },
];

// Helper function untuk mengambil data
export function getProjectById(id: string) {
  return projectsData.find((project) => project.id === id);
}
