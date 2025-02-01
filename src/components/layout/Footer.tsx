import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const socialLinks = [
  { 
    href: "https://github.com/iinaa-eimrit", 
    label: "GitHub", 
    icon: <Github className="w-6 h-6" />,
    aria: "Visit my GitHub profile"
  },
  { 
    href: "https://www.linkedin.com/in/amrit-raj-8a30b8247/", 
    label: "LinkedIn", 
    icon: <Linkedin className="w-6 h-6" />,
    aria: "Connect with me on LinkedIn"
  },
  { 
    href: "mailto:a16raj@gmail.com", 
    label: "Email", 
    icon: <Mail className="w-6 h-6" />,
    aria: "Send me an email"
  }
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { 
    href: "https://drive.google.com/file/d/1FKCE8S2sDWzgIj_MqQUP07s2N3GoZp5R/view?usp=drive_link", 
    label: "Resume",
    isExternal: true
  }
];

export function Footer() {
  const { theme } = useTheme();

  const handleEmailClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'email_click', {
        event_category: 'Contact',
        event_label: 'Footer Email Link'
      });
    }
  };

  return (
    <footer className={`border-t ${theme === 'dark' ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <nav aria-label="Social media links">
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.label === 'Email' ? '_self' : '_blank'}
                  rel={link.label === 'Email' ? '' : 'noopener noreferrer'}
                  aria-label={link.aria}
                  onClick={link.label === 'Email' ? handleEmailClick : undefined}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.isExternal ? '_blank' : '_self'}
                  rel={link.isExternal ? 'noopener noreferrer' : ''}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Copyright */}
          <div className={`text-sm ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            &copy; {new Date().getFullYear()} Amrit Raj. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}