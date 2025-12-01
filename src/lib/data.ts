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
    logo: "/projects/MidiLoc/MidiLoc_logo.svg",
    MainImage: "/projects/MidiLoc/dashboard.svg",
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
      demo: "https://midiloc.vercel.app/",
      github: "https://github.com/AlvinoWJ/gigblocks",
    },
    features: [
      "Integrated Store Opening Process Management",
      "Executive Dashboard & Analytics",
      "Granular Progress Tracking & Approval",
      "Existing Store Database Management",
      "External Proposal Integration (Midiland)",
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
      "Midiland is a platform that enables property owners and investors to offer their land or building assets for potential retail expansion, providing a simple way to submit property details and monitor their evaluation progress. By centralizing submissions and status tracking in one system, Midiland ensures transparency, faster communication, and a streamlined process for connecting property providers with retail opportunities.",
    logo: "/projects/Midiland/MidiLand_logo.svg",
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
      demo: "https://midiland.vercel.app/",
      github: "https://github.com/AlvinoWJ/Midiland",
    },
    features: [
      "Integrated Property Submission System",
      "Interactive Location Mapping",
      "Real-Time Status Tracking",
      "Smart Virtual Assistant (Milan)",
      "Live Notification System",
    ],
    galleryImages: [
      "/projects/Midiland/img_1.svg",
      "/projects/Midiland/img_2.svg",
      "/projects/Midiland/img_3.svg",
      "/projects/Midiland/img_4.svg",
      "/projects/Midiland/img_5.svg",
      "/projects/Midiland/img_6.svg",
      "/projects/Midiland/img_7.svg",
      "/projects/Midiland/img_8.svg",
      "/projects/Midiland/img_9.svg",
      "/projects/Midiland/img_10.svg",
      "/projects/Midiland/img_11.svg",
      "/projects/Midiland/img_12.svg",
      "/projects/Midiland/img_13.svg",
    ],
  },
];

export function getProjectById(id: string) {
  return projectsData.find((project) => project.id === id);
}
