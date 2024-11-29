import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedCard } from '../ui/AnimatedCard';
import { GradientText } from '../ui/GradientText';
import { useExpandableDescription } from '../../hooks/useExpandableDescription';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  date: string;
  author: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Pen Pulse",
    subtitle: "Social Journalism and Blog Hosting Platform - a scalable, serverless API for managing blog posts",
    description: "A serverless Blog API built with Cloudflare Workers, Prisma, and Zod, featuring JWT authentication, CRUD operations for blogs, and a monorepo structure with shared types for scalable and validated data handling.",
    imageUrl: "/pen pulse blog.png",
    technologies: ["Cloudflare Workers", "Prisma", "Zod", "JWT Authentication", "Monorepo"],
    date: "2024",
    author: "Amrit Raj",
    githubUrl: "https://github.com/iinaa-eimrit/Pen-Pulse",
    liveUrl: "https://pen-pulse-roan.vercel.app/",
  },
  {
    title: "Universe Explorer 3D",
    subtitle: "Interactive 3D solar system simulation with orbiting planets and animations",
    description: "A web-based application built with React Three.js and Next.js, enabling users to explore the solar system with interactive planets, detailed info panels, and smooth 3D animations.",
    imageUrl: "/universe-explorer-3d.png",
    technologies: ["React Three.js", "Three.js", "Next.js", "TypeScript", "Tailwind CSS"],
    date: "2024",
    author: "Amrit Raj",
    githubUrl: "https://github.com/iinaa-eimrit/Universe-Explorer-3D",
    liveUrl: "https://universe-explorer-3-d.vercel.app/"
  },
  {
  "title": "EcoTracker",
  "subtitle": "Track and Reduce Your Carbon Footprint",
  "description": "An interactive web application that helps users track their carbon footprint, monitor air quality, and participate in environmental challenges. Features real-time data, a carbon footprint calculator, and user authentication. Built with React, Firebase, Tailwind CSS, and various modern APIs.",
  "imageUrl": "/eco-tracker.png",
  "technologies": ["React", "TypeScript", "Firebase", "Tailwind CSS", "Zustand", "Air Quality API", "Firestore", "React Hook Form"],
  "date": "2024",
  "author": "Amrit Raj",
  "githubUrl": "https://github.com/iinaa-eimrit/EcoTracker",
  "liveUrl": "https://eco-tracker-two.vercel.app/"
},
  {
    title: "Skill Sharing",
    subtitle: "Collaborative Platform for Talks and Knowledge Sharing",
    description: "An interactive web application for sharing and discussing skills and ideas, featuring CRUD operations for talks, real-time commenting, and a clean, responsive UI. Built with React, Axios, and modern web development principles.",
    imageUrl: "/skill-sharing-app.png",
    technologies: ["React", "Axios", "REST API", "JavaScript", "CSS"],
    date: "2024",
    author: "Amrit Raj",
    githubUrl: "https://github.com/iinaa-eimrit/Skill-Sharing",
    liveUrl: "https://skill-sharing.vercel.app/"
  },
  {
    title: "An Interactive Kanban Board Application",
    subtitle: "Dynamic and responsive Kanban board with custom grouping and sorting",
    description: "An interactive Kanban board application built with ReactJS, allowing users to group and sort tasks dynamically using the provided API.",
    imageUrl: "/kanban interface.png",
    technologies: ["React", "JavaScript", "Tailwind - CSS", "Responsive Design"],
    date: "2024",
    author: "Amrit Raj",
    githubUrl: "https://github.com/iinaa-eimrit/An-Interactive-Kanban-Board-Application",
    liveUrl: "https://an-interactive-kanban-board-application-ceoc.vercel.app/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { displayText, isExpanded, toggleExpand, shouldShowMore } = useExpandableDescription(project.description, { maxLength: 100 });
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative h-48 overflow-hidden group">
  <img
    src={project.imageUrl}
    alt={project.title}
    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="flex space-x-4">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} on GitHub`}
        title={`View ${project.title} on GitHub`}
        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
      >
        <Github className="w-5 h-5 text-gray-900" />
      </a>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title} live demo`}
        title={`Visit ${project.title} live demo`}
        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
      >
        <ExternalLink className="w-5 h-5 text-gray-900" />
      </a>
    </div>
  </div>
</div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.subtitle}</p>
        <div className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {displayText}
            {shouldShowMore && (
              <button
                onClick={toggleExpand}
                className="ml-1 text-purple-600 dark:text-purple-400 hover:underline focus:outline-none"
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <>
                    Show less <ChevronUp className="inline w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show more <ChevronDown className="inline w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{project.date}</span>
          <span>{project.author}</span>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <GradientText>Personal Projects</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 200}>
              <ProjectCard project={project} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}