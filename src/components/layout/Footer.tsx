import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { href: "https://github.com/iinaa-eimrit", label: "GitHub", icon: <Github className="w-6 h-6" /> },
  { href: "https://www.linkedin.com/in/amrit-raj-8a30b8247/", label: "LinkedIn", icon: <Linkedin className="w-6 h-6" /> },
  { href: "mailto:a16raj@gmail.com", label: "Email", icon: <Mail className="w-6 h-6" /> }
];

export function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <span>&copy; 2024 Amrit Raj</span>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white hover:text-gray-400 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div>
          <a href="#about" className="text-white hover:text-gray-400 mx-2">About</a> |
          <a href="#contact" className="text-white hover:text-gray-400 mx-2">Contact</a> |
          <a href="https://drive.google.com/file/d/1FKCE8S2sDWzgIj_MqQUP07s2N3GoZp5R/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-2">Resume</a>
        </div>
      </div>
    </footer>
  );
}
