import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Code2, Cog, Database, Lock, Layers, Cloud, GitBranch, FileCode2, Cpu, Monitor } from 'lucide-react'

const skills = [
  {
    name: "JavaScript, TypeScript, Node.js",
    description: "Proficient in full-stack development with extensive experience in JavaScript and TypeScript. Developed robust applications using Node.js and frameworks like Express, enhancing backend performance and scalability.",
    expertise: ["JavaScript", "TypeScript", "Node.js", "Express"],
    icon: <Monitor className="w-6 h-6" />
  },
  {
    name: "React, Next.js",
    description: "Skilled in building dynamic user interfaces and complex web applications using React and Next.js, implementing state management, routing, and server-side rendering for optimized performance.",
    expertise: ["React", "Next.js", "State Management", "SSR"],
    icon: <Code2 className="w-6 h-6" />
  },
  {
    name: "DevOps, CI/CD",
    description: "Expertise in DevOps practices, including Docker, Kubernetes, and AWS, with hands-on experience in CI/CD pipeline implementation to streamline deployments and improve development efficiency.",
    expertise: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    icon: <Cog className="w-6 h-6" />
  },
  {
    name: "MongoDB, PostgreSQL",
    description: "Experienced in designing and managing databases using MongoDB and PostgreSQL, with a focus on performance optimization and data integrity in high-scale applications.",
    expertise: ["MongoDB", "PostgreSQL", "Database Design", "Performance Optimization"],
    icon: <Database className="w-6 h-6" />
  },
  {
    name: "Authentication & Security",
    description: "Implemented secure authentication mechanisms using JWT, OAuth, and OpenID Connect, ensuring robust security standards for user data and application access.",
    expertise: ["JWT", "OAuth", "OpenID Connect", "Security"],
    icon: <Lock className="w-6 h-6" />
  },
  {
    name: "Backend Architecture & Middleware",
    description: "Built scalable backend architectures with asynchronous programming, middleware integration, and RESTful APIs, enabling efficient server-side functionality and seamless communication with front-end systems.",
    expertise: ["Backend Architecture", "Middleware", "RESTful APIs", "Async Programming"],
    icon: <Layers className="w-6 h-6" />
  },
  {
    name: "Cloud Services & Serverless",
    description: "Experienced with cloud platforms like AWS, specializing in serverless architectures and load balancing solutions to optimize resource allocation and cost-effectiveness.",
    expertise: ["AWS", "Serverless", "Load Balancing", "Cloud Optimization"],
    icon: <Cloud className="w-6 h-6" />
  },
  {
    name: "CI/CD Pipelines & Monitoring",
    description: "Developed CI/CD pipelines with Jenkins and GitHub Actions, utilizing monitoring tools like Prometheus and Grafana to track system performance and reliability.",
    expertise: ["Jenkins", "GitHub Actions", "Prometheus", "Grafana"],
    icon: <GitBranch className="w-6 h-6" />
  },
  {
    name: "TypeScript, Zod",
    description: "In-depth experience with TypeScript for static type checking, along with Zod for schema validation, contributing to robust and error-free codebases in complex applications.",
    expertise: ["TypeScript", "Zod", "Static Type Checking", "Schema Validation"],
    icon: <FileCode2 className="w-6 h-6" />
  },
  {
    name: "C++",
    description: "2+ years of C++ programming experience, focusing on game engines and computer vision applications.",
    expertise: ["C++", "Game Engines", "Computer Vision"],
    icon: <Cpu className="w-6 h-6" />
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply blur-3xl animate-float animation-delay-2000" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Below are some of my skills, and I'm always looking to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-2 bg-blue-500 dark:bg-blue-700">
                <CardTitle className="text-white flex items-center space-x-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {skill.description}
                </p>
                <div>
                  <h4 className="font-medium mb-2 text-sm text-blue-600 dark:text-blue-400">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {skill.expertise.map((exp, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

