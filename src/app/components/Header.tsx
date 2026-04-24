import { useState, useEffect } from 'react';
import logoImg from '../../imports/logo_final.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl shadow-sm'
          : ''
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(231, 160, 255, 0.7)' 
          : 'rgba(231, 160, 255, 0.5)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Paw Studio"
            className="w-10 h-10 object-contain"
          />
          <span
            className="text-2xl tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Paw Studio
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#games"
            className="transition-colors hover:opacity-70"
            style={{ color: '#666' }}
          >
            Games
          </a>
          <a
            href="#devlog"
            className="transition-colors hover:opacity-70"
            style={{ color: '#666' }}
          >
            Dev Log
          </a>
          <a
            href="#about"
            className="transition-colors hover:opacity-70"
            style={{ color: '#666' }}
          >
            About
          </a>
        </div>

        {/* CTA Button */}
        <button
          className="px-6 py-2.5 rounded-full border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
          style={{
            borderImage: 'linear-gradient(135deg, #E7A0FF, #A8FFEB) 1',
            background: 'white',
            color: '#E7A0FF',
          }}
        >
          Join Community
        </button>
      </nav>
    </header>
  );
}