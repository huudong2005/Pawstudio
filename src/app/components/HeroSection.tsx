import { Play, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1762227144580-431ec0015003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpY2FsJTIwZmFudGFzeSUyMGdhbWUlMjBwYXN0ZWwlMjBkcmVhbXl8ZW58MXx8fHwxNzc2MjM2OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Magical game world"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
      </div>

      {/* Floating Blob Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: 'var(--lavender)' }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: 'var(--mint)' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60">
          <Sparkles className="w-4 h-4" style={{ color: 'var(--lavender)' }} />
          <span className="text-sm" style={{ color: '#666' }}>
            Creating Magical Experiences
          </span>
        </div>

        <h1
          className="mb-6 leading-tight"
          style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(135deg, #E7A0FF, #A8FFEB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Welcome to a World of Cozy Magic
        </h1>

        <p
          className="mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
          style={{ color: '#666', fontFamily: 'var(--font-body)' }}
        >
          Discover enchanting games crafted with love for those who seek wonder,
          warmth, and whimsy in every adventure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Solid Gradient Button */}
          <button
            className="px-8 py-4 rounded-full text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #E7A0FF, #A8FFEB)',
            }}
          >
            Explore Games
          </button>

          {/* Outline Button */}
          <button
            className="px-8 py-4 rounded-full bg-white border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
            style={{
              borderColor: '#E7A0FF',
              color: '#E7A0FF',
            }}
          >
            <Play className="w-5 h-5" />
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
}
