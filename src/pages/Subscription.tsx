import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Bronze',
    price: '₹999/year',
    features: [
      'Basic EV check-up twice a year',
      'Priority booking for repairs',
      '10% discount on spare parts',
      '24/7 roadside assistance',
      'Basic warranty extension'
    ],
    color: 'from-amber-700 to-amber-500'
  },
  {
    name: 'Silver',
    price: '₹1,999/year',
    features: [
      'Quarterly EV check-up',
      'Priority booking with same-day service',
      '15% discount on spare parts',
      '24/7 premium roadside assistance',
      'Extended warranty coverage'
    ],
    color: 'from-gray-400 to-gray-300'
  },
  {
    name: 'Gold',
    price: '₹2,999/year',
    features: [
      'Monthly EV check-up',
      'VIP booking with instant service',
      '25% discount on spare parts',
      '24/7 premium roadside assistance with free towing',
      'Comprehensive warranty package'
    ],
    color: 'from-yellow-500 to-yellow-300'
  }
];

export const Subscription = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Subscription Plans
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Choose the perfect plan for your EV maintenance needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className={`h-2 bg-gradient-to-r ${plan.color}`} />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};