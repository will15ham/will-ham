import Link from "next/link";
import React from "react";
import BackButton from "./BackButton";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  src?: string;
}

const projects: Project[] = [
  {
    id: 4,
    name: "Personal Site",
    description:
      "Designed and developed a personal website using Next.js and Tailwind CSS. Implemented a responsive design for optimal user experience across all devices. Integrated TypeScript for type safety and improved code quality.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    src: "https://github.com/will15ham/will-ham",
  },
  {
    id: 2,
    name: "AI Icon Generator",
    description:
      "Developed a dynamic, full-stack icon generation application using Next.js and TypeScript. Integrated tRPC for efficient API communication and Prisma for robust database management. Leveraged React's reactive capabilities for an intuitive user interface, enabling users to customize and generate icons based on their input.",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "React",
      "OpenAI API",
    ],
    src: "https://github.com/will15ham/t3-ai-logo-final",
  },
  {
    id: 1,
    name: "Kage AIO - Sneaker Bot",
    description:
      "Developed a high-performance auto checkout module for a popular United States sneaker website, significantly improving checkout times. Successfully replicated the fingerprints of popular web browsers like Chrome and Firefox using the uTLS package, which contributed to over $1.5 million in user transactions and over 100,000 successful checkouts.",
    technologies: ["Go", "uTLS", "MongoDB"],
  },
  {
    id: 3,
    name: "Shopify Monitor",
    description:
      "Developed a real-time Shopify Product Availability Monitor in Go, featuring Discord integration for instant stock alerts. This tool efficiently tracks and notifies users about product restocks on Shopify stores, enhancing the shopping experience.",
    technologies: ["Go", "Discord API"],
  },
];

export default function ProjectsList() {
  return (
    <section className="bg-white p-6 md:p-10 rounded-lg shadow-lg mx-4 md:mx-auto max-w-4xl">
      <div className="flex justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">
          Projects 👨‍💻
        </h2>
        <BackButton href="/" />
      </div>

      {projects.map((project) => (
        <div key={project.id} className="mt-4">
          {project.src ? (
            <h3 className="text-xl font-semibold">
              <Link href={project.src}>
                {project.name} -{" "}
                <span className="text-blue-500">Source Code</span>
              </Link>
            </h3>
          ) : (
            <h3 className="text-xl font-semibold">{project.name}</h3>
          )}
          <p className="text-gray-700 text-base md:text-lg mt-2">
            {project.description}
          </p>
          <div className="mt-2">
            <span className="font-medium text-gray-800">
              Technologies Used:
            </span>
            {project.technologies.map((tech, index) => (
              <span key={index} className="ml-2 text-gray-600">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
