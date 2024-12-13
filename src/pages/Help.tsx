import { Phone, Mail, MessageCircle } from 'lucide-react';

export const Help = () => {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Need Help?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our customer support team is available 24/7 to assist you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Call Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Available 24/7 for emergency support
            </p>
            <a
              href="tel:1800123456789"
              className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              1800-123-456-789
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Email Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get response within 2 hours
            </p>
            <a
              href="mailto:support@3selectric.com"
              className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@3selectric.com
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Live Chat</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connect with us instantly
            </p>
            <button className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              Start Chat
            </button>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What are your service hours?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our workshop services are available from 9 AM to 6 PM, while our emergency roadside assistance is available 24/7.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Do you provide warranty on repairs?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we provide a 6-month warranty on all repairs and replacements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How do I book a service?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can book a service through our website, mobile app, or by calling our customer care number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};