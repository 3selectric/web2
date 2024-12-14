import { ServiceForm } from '../components/ServiceForm';

export const Query = () => {
  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Service booked successfully! We will contact you shortly.');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Book Your Service
      </h1>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <ServiceForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};