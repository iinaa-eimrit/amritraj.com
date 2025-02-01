import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    closeMenu();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navLinks = [
    { id: '#home', label: 'Home' },
    { id: '#projects', label: 'Projects' },
    { id: '#skills', label: 'Skills' },
    { id: '#about', label: 'About' },
    { id: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              AR
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1FKCE8S2sDWzgIj_MqQUP07s2N3GoZp5R/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              Resume
            </a>
          </nav>

          {/* Control Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed md:hidden top-16 left-0 right-0 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
            <nav className="px-4 py-4 flex flex-col space-y-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.id}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1FKCE8S2sDWzgIj_MqQUP07s2N3GoZp5R/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 py-2"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}