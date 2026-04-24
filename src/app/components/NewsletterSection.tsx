import { Mail } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

export function NewsletterSection() {
  return (
    <section className="relative">
      {/* Top Wave Divider */}
      <WaveDivider color="#A8FFEB" />

      <div className="py-24 px-6" style={{ background: '#A8FFEB' }}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Floating Blobs */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-2xl opacity-30" style={{ background: '#E7A0FF' }}></div>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full blur-2xl opacity-30" style={{ background: '#FFFFFF' }}></div>

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm">
                <Mail className="w-8 h-8" style={{ color: '#E7A0FF' }} />
              </div>

              <h2
                className="mb-4"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontFamily: 'var(--font-heading)',
                  color: '#FFFFFF',
                }}
              >
                Stay in the Loop
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Get updates on new releases, behind-the-scenes content, and exclusive previews
              </p>

              {/* Newsletter Form */}
              <div className="max-w-md mx-auto">
                <div
                  className="flex gap-3 p-2 rounded-full"
                  style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 bg-transparent border-none outline-none text-white placeholder-white/60"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                  <button
                    className="px-8 py-3 rounded-full text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #E7A0FF, #A8FFEB)',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 text-sm text-white/70">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <WaveDivider color="#A8FFEB" flip />
    </section>
  );
}
