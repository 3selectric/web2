import { Phone, Mail, MapPin } from 'lucide-react';

export const Help = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Need Help?
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Our customer support team is here to assist you 24/7
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <Phone className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Call Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            24/7 Emergency Support
          </p>
          <a
            href="tel:+911234567890"
            className="text-xl font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500"
          >
            +91 1234 567 890
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <Mail className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Email Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Get in touch via email
          </p>
          <a
            href="mailto:support@3selectric.com"
            className="text-xl font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500"
          >
            support@3selectric.com
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <MapPin className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Visit Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Find our service centers
          </p>
          <button className="text-xl font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500">
            View Locations
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              What are your service hours?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our workshop services are available from 9 AM to 8 PM daily. However, our emergency roadside assistance is available 24/7.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Do you provide warranty on repairs?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we provide a 6-month warranty on all repairs and replacements done at our service centers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              How can I track my service request?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Once you book a service, you'll receive a tracking ID via SMS and email. You can use this ID to track your service status on our website or mobile app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};