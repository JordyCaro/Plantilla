import { useState } from 'react';

interface Testimonial {
  name: string;
  achievement: string;
  role: string;
  image: string;
  testimonial: string;
  rating: number;
  transformation: string;
}

const testimonials: Testimonial[] = [
  {
    name: "María González",
    achievement: "Transformación Total",
    role: "Clienta desde 2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    testimonial: "Jairo no solo cambió mi cuerpo, cambió mi vida. Su motivación constante y enfoque personalizado me ayudaron a perder 20kg y ganar confianza. Realmente es mi mayor fan.",
    rating: 5,
    transformation: "Pérdida de 20kg en 6 meses"
  },
  {
    name: "Carlos Ramírez",
    achievement: "Ganancia Muscular",
    role: "Cliente desde 2022",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    testimonial: "Los entrenamientos con Jairo son intensos pero efectivos. Su conocimiento en nutrición y técnica correcta me ayudaron a ganar masa muscular de forma saludable. ¡100% recomendado!",
    rating: 5,
    transformation: "Ganancia de 12kg de músculo"
  },
  {
    name: "Laura Martínez",
    achievement: "Estilo de Vida Saludable",
    role: "Clienta desde 2021",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    testimonial: "Más que un entrenador, Jairo es un mentor. Me enseñó que el fitness es un estilo de vida, no solo una meta temporal. Su energía positiva es contagiosa.",
    rating: 5,
    transformation: "Cambio completo de hábitos"
  },
  {
    name: "Jorge Díaz",
    achievement: "Preparación de Competencia",
    role: "Cliente desde 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    testimonial: "Jairo me preparó para mi primera competencia de fitness. Su dedicación y plan personalizado fueron clave para lograr mi mejor versión. Es increíble tener un coach que cree más en ti que tú mismo.",
    rating: 5,
    transformation: "1er lugar en competencia local"
  },
  {
    name: "Ana Rodríguez",
    achievement: "Recuperación Post-Parto",
    role: "Clienta desde 2022",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    testimonial: "Después de mi embarazo, Jairo diseñó un programa seguro y efectivo para recuperar mi fuerza. Su paciencia y motivación fueron fundamentales en mi proceso. ¡Gracias por ser mi mayor fan!",
    rating: 5,
    transformation: "Recuperación completa post-parto"
  }
];


const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center gap-1 my-3">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-8">
        <button
          onClick={prev}
          className="absolute left-0 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Testimonio anterior"
        >
          <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex overflow-hidden py-12">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-none w-full md:w-1/3 transform transition-all duration-300 ${
                index === 1 ? 'scale-100 opacity-100' : 'scale-95 opacity-75'
              }`}
            >
              <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center h-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary-light dark:border-primary-dark mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-primary-dark dark:text-primary-light font-medium">{testimonial.achievement}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{testimonial.role}</p>
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">{testimonial.testimonial}</p>
                <div className="mt-auto">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-dark dark:text-primary-light text-sm font-medium">
                    {testimonial.transformation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          className="absolute right-0 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Siguiente testimonio"
        >
          <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
