import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, label: "GitHub", url: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/yourlinkedin" },
  { icon: <FaEnvelope />, label: "Email", url: "mailto:nick.petrykowycz@gmail.com" },
];

const SocialLinks = () => (
  <div className="flex gap-4 mt-3">
    {socials.map(s => (
      <a
        href={s.url}
        key={s.label}
        className="hover:text-green-500 text-2xl transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
      >
        {s.icon}
      </a>
    ))}
  </div>
);
export default SocialLinks;
