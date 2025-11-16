import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  result?: string;
}

interface Props {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function TestimonialSlider({ 
  testimonials, 
  autoPlay = true, 
  autoPlayInterval = 12000 
}: Props) {
  // Usamos un índice interno mayor para el efecto infinito
  // El índice 0 es un duplicado del último, los índices 1-N son los reales, y el índice N+1 es un duplicado del primero
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Crear array con duplicados para el efecto infinito
  // [último, ...originales, primero]
  const infiniteTestimonials = [
    testimonials[testimonials.length - 1], // Duplicado del último al inicio
    ...testimonials,
    testimonials[0] // Duplicado del primero al final
  ];

  const totalSlides = infiniteTestimonials.length;
  // Convertir índice infinito a índice real (0-based)
  // índice 0 → último testimonio (testimonials.length - 1)
  // índices 1-N → testimonios reales (0 a N-1)
  // índice N+1 → primer testimonio (0)
  const getRealIndex = (infIndex: number): number => {
    if (infIndex === 0) return testimonials.length - 1;
    if (infIndex >= testimonials.length + 1) return 0;
    return infIndex - 1;
  };
  const realIndex = getRealIndex(currentIndex);

  useEffect(() => {
    if (isPlaying && autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // Si llegamos al último slide (duplicado), saltamos sin transición al primero real
          if (nextIndex >= totalSlides - 1) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentIndex(1);
              setTimeout(() => setIsTransitioning(true), 50);
            }, 500);
            return totalSlides - 1;
          }
          return nextIndex;
        });
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, autoPlay, autoPlayInterval, totalSlides]);

  // Resetear posición cuando llegamos a los extremos sin transición
  useEffect(() => {
    if (!isTransitioning && containerRef.current) {
      containerRef.current.style.transition = 'none';
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = '';
          setIsTransitioning(true);
        }
      }, 50);
    }
  }, [currentIndex, isTransitioning]);

  const goToSlide = (direction: 'next' | 'prev') => {
    setIsPlaying(false);
    
    if (direction === 'next') {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= totalSlides - 1) {
        // Saltar al duplicado del último, luego resetear sin transición
        setCurrentIndex(nextIndex);
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(1);
          setTimeout(() => {
            setIsTransitioning(true);
            setIsPlaying(true);
          }, 50);
        }, 500);
      } else {
        setCurrentIndex(nextIndex);
        setTimeout(() => setIsPlaying(true), 10000);
      }
    } else {
      const prevIndex = currentIndex - 1;
      if (prevIndex <= 0) {
        // Saltar al duplicado del primero, luego resetear sin transición
        setCurrentIndex(prevIndex);
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(testimonials.length);
          setTimeout(() => {
            setIsTransitioning(true);
            setIsPlaying(true);
          }, 50);
        }, 500);
      } else {
        setCurrentIndex(prevIndex);
        setTimeout(() => setIsPlaying(true), 10000);
      }
    }
  };

  const nextSlide = () => {
    goToSlide('next');
  };

  const prevSlide = () => {
    goToSlide('prev');
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Validar que hay testimonios
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="testimonial-slider relative w-full max-w-xl lg:max-w-2xl mx-auto lg:mx-0 lg:mr-0">
      {/* Main Testimonial Box - Green Card */}
      <div 
        ref={sliderRef}
        className="relative overflow-hidden rounded-xl shadow-2xl"
        style={{ backgroundColor: '#00FF88', minHeight: '400px' }}
      >
        {/* Slider Container with overflow hidden */}
        <div className="relative overflow-hidden w-full" style={{ minHeight: '400px' }}>
          <div 
            ref={containerRef}
            className="flex h-full"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              width: `${totalSlides * 100}%`,
              display: 'flex'
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 h-full"
                style={{ 
                  width: `${100 / totalSlides}%`,
                  minWidth: `${100 / totalSlides}%`,
                  maxWidth: `${100 / totalSlides}%`,
                  flex: `0 0 ${100 / totalSlides}%`
                }}
              >
                <div className="relative p-6 sm:p-8 lg:p-10 h-full w-full flex flex-col">
                  {/* Quote Icon - Top Left */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10">
                    <svg 
                      className="w-12 h-12 sm:w-16 sm:h-16 text-gray-900 opacity-20" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative pt-6 sm:pt-10 pb-14 sm:pb-16 lg:pb-20">
                    {/* Testimonial Text */}
                    <blockquote className="text-sm sm:text-base lg:text-lg font-black text-gray-900 uppercase leading-relaxed mb-6 sm:mb-8 tracking-tight">
                      {testimonial.content.toUpperCase()}
                    </blockquote>

                    {/* Author Info - Bottom Left */}
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-900/30 flex-shrink-0"
                        loading={index === 0 || index === totalSlides - 1 ? 'eager' : 'lazy'}
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wide">
                          {testimonial.name.toUpperCase()}
                        </h4>
                        <p className="text-xs text-gray-700 font-semibold uppercase">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows - Bottom Right */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 flex gap-2 z-10">
                    <button
                      onClick={prevSlide}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-900 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800 shadow-lg"
                      aria-label="Testimonio anterior"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-900 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800 shadow-lg"
                      aria-label="Siguiente testimonio"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


