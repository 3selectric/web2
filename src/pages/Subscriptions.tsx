import { Shield, Zap, Star } from 'lucide-react';

export const Subscriptions = () => {
  const plans = [
    {
      name: 'Bronze',
      price: '₹999/year',
      icon: <Shield className="w-12 h-12 text-bronze" />,
      features: [
        'Basic EV checkup twice a year',
        '10% discount on repairs',
        'Priority booking',
        'Phone support'
      ],
      color: 'from-amber-700 to-amber-600'
    },
    {
      name: 'Silver',
      price: '₹1,999/year',
      icon: <Zap className="w-12 h-12 text-silver" />,
      features: [
        'Quarterly EV checkup',
        '20% discount on repairs',
        'Priority booking',
        '24/7 phone support',
        'Free roadside assistance'
      ],
      color: 'from-gray-400 to-gray-300'
    },
    {
      name: 'Gold',
      price: '₹2,999/year',
      icon: <Star className="w-12 h-12 text-gold" />,
      features: [
        'Monthly EV checkup',
        '30% discount on repairs',
        'VIP priority booking',
        '24/7 premium support',
        'Unlimited roadside assistance',
        'Free battery health monitoring'
      ],
      color: 'from-yellow-500 to-yellow-400'
    }
  ];

  return (
    <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Select the perfect service package for your EV
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${plan.color}`} />
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};