import { Github, Linkedin, Mail } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { useParallax } from '../../utils/animations';
import { useTheme } from '../../hooks/useTheme';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export function Hero() {
  useParallax(0.5);
  const { theme } = useTheme();

  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  const lightThemeParticles = {
    background: { color: { value: "#ffffff" } },
    particles: {
      color: { value: "#a855f7" },
      links: { enable: true, color: "#38bdf8", distance: 150 },
      move: { enable: true, speed: 2 },
      number: { value: 50 },
      size: { value: 3 },
    },
  };

  const darkThemeParticles = {
    background: { color: { value: "#0f172a" } },
    particles: {
      color: { value: "#38bdf8" },
      links: { enable: true, color: "#a855f7", distance: 150 },
      move: { enable: true, speed: 2 },
      number: { value: 50 },
      size: { value: 3 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Particle Animation */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={theme === 'light' ? lightThemeParticles : darkThemeParticles}
        init={particlesInit}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {/* Profile Image */}
          <div className="relative inline-block" data-parallax>
            <div className="relative">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg mb-8 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            </div>
            <div className="absolute bottom-6 right-0 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
          {/* Title and Description */}
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <GradientText>Amrit Raj</GradientText>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Full Stack Developer
          </p>
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/iinaa-eimrit"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              aria-label="Visit my GitHub profile"
            >
              <Github className="w-6 h-6 group-hover:text-purple-600 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/amrit-raj-8a30b8247/"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin className="w-6 h-6 group-hover:text-purple-600 transition-colors" />
            </a>
            <a
              href="mailto:a16raj@gmail.com"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              aria-label="Send me an email"
            >
              <Mail className="w-6 h-6 group-hover:text-purple-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
