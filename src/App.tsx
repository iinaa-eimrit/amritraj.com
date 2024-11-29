import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import  About  from './components/sections/About'; // Updated import for consistency
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
      {/* Header */}
      <Header />

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg focus:outline-none transition"
        aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'} // Improved accessibility
      >
        {theme === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-yellow-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="..." />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="..." />
          </svg>
        )}
      </button>

      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
