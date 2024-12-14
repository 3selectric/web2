import { Wrench, Shield, Clock, Users } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Our team consists of certified professionals specialized in electric vehicle maintenance and repair.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We use only genuine parts and follow manufacturer-specified procedures for all services.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your EV needs, including emergency roadside support.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our priority is your satisfaction, with transparent pricing and excellent service.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About 3S Electric
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We are India's premier electric vehicle service provider, dedicated to keeping your EV 
          running at peak performance while contributing to a sustainable future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <feature.icon className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          At 3S Electric, we're committed to revolutionizing the EV service industry in India. 
          Our mission is to provide comprehensive, reliable, and efficient service solutions 
          for all major electric vehicle brands, ensuring that EV owners can enjoy a seamless 
          and worry-free experience with their vehicles.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          We believe in the future of electric mobility and are dedicated to supporting the 
          growing EV ecosystem in India through our expert services, cutting-edge technology, 
          and customer-centric approach.
        </p>
      </div>
    </div>
  );
};