import { Heart, Users, Sparkle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: 'var(--lavender)' }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: 'var(--mint)' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #E7A0FF, #A8FFEB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Paw Studio
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#666' }}>
            We're a team of dreamers and creators dedicated to crafting games that bring comfort, joy, and a touch of magic to everyone who plays them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: 'Made with Love',
              description: 'Every pixel, sound, and mechanic is crafted with care and attention to detail',
            },
            {
              icon: Users,
              title: 'Player-Centered',
              description: 'Your feedback shapes our games and helps us create better experiences',
            },
            {
              icon: Sparkle,
              title: 'Always Magical',
              description: 'We believe games should be enchanting escapes from the everyday',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-[32px] transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(168, 255, 235, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #A8FFEB, #E7A0FF)',
                  }}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    color: '#A8FFEB',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Team CTA */}
        <div
          className="p-12 rounded-[32px] text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(231, 160, 255, 0.1), rgba(168, 255, 235, 0.1))',
            border: '1px solid rgba(231, 160, 255, 0.2)',
          }}
        >
          <h3
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              color: '#E7A0FF',
            }}
          >
            Want to Join Our Team?
          </h3>
          <p className="mb-6 text-lg" style={{ color: '#666' }}>
            We're always looking for talented, passionate creators to join our magical journey
          </p>
          <button
            className="px-8 py-4 rounded-full text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #E7A0FF, #A8FFEB)',
            }}
          >
            See Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
