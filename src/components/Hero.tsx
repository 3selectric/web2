import { Wrench, Clock, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel } from './Carousel';

const slides = [
  {
    title: "Streamline Your EV Service Experience",
    description: "Professional care for your electric vehicle, just a click away",
    icon: <Wrench className="w-12 h-12 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7"
  },
  {
    title: "24/7 Emergency Assistance",
    description: "We're always here when you need us most",
    icon: <Clock className="w-12 h-12 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1631898039984-fd5f59c8502a"
  },
  {
    title: "Certified EV Technicians",
    description: "Expert service from trained professionals",
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837"
  },
  {
    title: "Quick Response Time",
    description: "10-minute response time for roadside assistance",
    icon: <Zap className="w-12 h-12 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1611516491426-03025e6043c8"
  }
];

export const Hero = () => {
  return (
    <div className="pt-16">
      <Carousel slides={slides} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Link
            to="/query"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Book Service Now
          </Link>
        </div>
      </div>
    </div>
  );
};