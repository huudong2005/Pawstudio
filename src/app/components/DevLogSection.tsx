import { Code2, Palette, Music } from 'lucide-react';

const processItems = [
  {
    id: 1,
    icon: Code2,
    title: 'Code',
    description: 'Building robust systems with clean, maintainable architecture',
  },
  {
    id: 2,
    icon: Palette,
    title: 'Art',
    description: 'Crafting beautiful visuals that tell enchanting stories',
  },
  {
    id: 3,
    icon: Music,
    title: 'Music',
    description: 'Composing melodies that bring our worlds to life',
  },
];

export function DevLogSection() {
  return (
    <section id="devlog" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
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
            Our Creative Process
          </h2>
          <p className="text-lg" style={{ color: '#666' }}>
            Every magical moment is thoughtfully crafted
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="text-center p-8 rounded-[32px] transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(231, 160, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #E7A0FF, #A8FFEB)',
                  }}
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    color: '#E7A0FF',
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

        {/* Behind the Scenes */}
        <div className="mt-16 text-center">
          <button
            className="px-8 py-4 rounded-full border-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{
              borderColor: '#E7A0FF',
              color: '#E7A0FF',
              background: 'white',
            }}
          >
            Read Our Dev Blog
          </button>
        </div>
      </div>
    </section>
  );
}
