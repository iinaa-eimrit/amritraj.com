import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              AR
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Home</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Projects</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Skills</a>
            <a 
            href="https://drive.google.com/file/d/1FKCE8S2sDWzgIj_MqQUP07s2N3GoZp5R/view?usp=drive_link"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Resume
              </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">About</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
