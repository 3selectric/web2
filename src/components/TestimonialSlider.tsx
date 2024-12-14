import { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-4">
          {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
            <Star key={i} className="inline-block w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">
          "{testimonials[currentIndex].comment}"
        </p>
        <p className="text-green-600 dark:text-green-400 font-semibold">
          - {testimonials[currentIndex].name}
        </p>
      </div>
    </div>
  );
};