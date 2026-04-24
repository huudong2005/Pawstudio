import { Sparkles, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8" style={{ color: 'var(--lavender)' }} />
              <span
                className="text-2xl tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Paw Studio
              </span>
            </div>
            <p className="mb-6" style={{ color: '#666', lineHeight: '1.6' }}>
              Creating cozy, magical games for those who seek wonder in every adventure.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ borderColor: '#E7A0FF', color: '#E7A0FF' }}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ borderColor: '#E7A0FF', color: '#E7A0FF' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ borderColor: '#E7A0FF', color: '#E7A0FF' }}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Games */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#E7A0FF' }}
            >
              Games
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors" style={{ color: '#666' }}>
                  Moonlit Garden
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#666' }}>
                  Crystal Café
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#666' }}>
                  Dreamy Skies
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#E7A0FF' }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="transition-colors" style={{ color: '#666' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#devlog" className="transition-colors" style={{ color: '#666' }}>
                  Dev Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#666' }}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors" style={{ color: '#666' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p style={{ color: '#999', fontSize: '0.875rem' }}>
            © 2026 Paw Studio. Crafted with magic and love. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
