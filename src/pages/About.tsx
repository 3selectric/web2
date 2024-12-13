import { Wrench, Users, Clock, Shield } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-500" />,
      title: 'Expert Technicians',
      description: 'Our team consists of certified EV specialists with years of experience in electric vehicle maintenance and repair.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction and ensure transparent communication throughout the service process.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: 'Quick Response',
      description: 'With our 10-minute response time guarantee, we ensure your EV gets back on the road as quickly as possible.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Quality Assurance',
      description: 'We use only genuine parts and follow manufacturer-recommended service procedures for all repairs.'
    }
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About 3S Electric
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            3S Electric is India's leading EV service provider, specializing in comprehensive maintenance and repair solutions for electric two-wheelers. Founded in 2023, we've quickly become the most trusted name in EV care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            At 3S Electric, our mission is to accelerate the adoption of electric vehicles by providing reliable, efficient, and accessible service solutions. We believe in a sustainable future where electric mobility is the norm, not the exception.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 space-y-4">
            <li>Specialized expertise in all major EV brands</li>
            <li>Pan-India service network with 10-minute response time</li>
            <li>Transparent pricing and service procedures</li>
            <li>State-of-the-art diagnostic tools and equipment</li>
            <li>Comprehensive warranty on all repairs</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};