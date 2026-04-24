import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const games = [
  {
    id: 1,
    title: 'Moonlit Garden',
    description: 'Tend to magical plants under starry skies',
    image: 'https://images.unsplash.com/photo-1761166478784-dc565cffb472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBjbG91ZHMlMjBkcmVhbXklMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NjIzNjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#E7A0FF',
  },
  {
    id: 2,
    title: 'Crystal Café',
    description: 'Serve enchanted treats to mystical creatures',
    image: 'https://images.unsplash.com/photo-1761798983107-a48299f8fb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwcHVycGxlJTIwcGluayUyMGdyYWRpZW50fGVufDF8fHx8MTc3NjIzNjk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#A8FFEB',
  },
  {
    id: 3,
    title: 'Dreamy Skies',
    description: 'Float through clouds in a peaceful adventure',
    image: 'https://images.unsplash.com/photo-1770389356138-99567dd408f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXdhaWklMjBhZXN0aGV0aWMlMjBzb2Z0JTIwY29sb3JzfGVufDF8fHx8MTc3NjIzNjk0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#E7A0FF',
  },
  {
    id: 4,
    title: 'Whispering Woods',
    description: 'Explore a forest filled with gentle magic',
    image: 'https://images.unsplash.com/photo-1712725824834-5101660f6205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwZ2FtZSUyMGNoYXJhY3RlciUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzYyMzY5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#A8FFEB',
  },
];

export function GamesCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="games" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'var(--mint)' }}></div>

      <div className="max-w-7xl mx-auto">
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
            Our Universe
          </h2>
          <p className="text-lg" style={{ color: '#666' }}>
            Step into enchanting worlds crafted with care
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110"
            style={{ borderColor: '#E7A0FF', color: '#E7A0FF' }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110"
            style={{ borderColor: '#E7A0FF', color: '#E7A0FF' }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {games.map((game) => (
            <div key={game.id} className="px-4">
              <div
                className="group relative rounded-[32px] overflow-hidden transition-all duration-500 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 40px ${game.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.5rem',
                    }}
                  >
                    {game.title}
                  </h3>
                  <p className="text-sm opacity-90">{game.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Dots Styling */}
      <style>{`
        .slick-dots {
          bottom: -50px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #E7A0FF;
        }
        .slick-dots li.slick-active button:before {
          color: #A8FFEB;
        }
      `}</style>
    </section>
  );
}
