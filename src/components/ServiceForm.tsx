import { useState, useEffect } from 'react';
import { evBrands } from '../data/evBrands';
import { locations } from '../data/locations';
import { timeSlots } from '../data/timeSlots';
import { AlertCircle } from 'lucide-react';

interface ServiceFormProps {
  onSubmit: (data: any) => void;
}

export const ServiceForm = ({ onSubmit }: ServiceFormProps) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    issue: '',
    customerName: '',
    contactNumber: '',
    serviceType: '',
    city: '',
    area: '',
    timeSlot: '',
    termsAccepted: false
  });

  const [showEmergencyMessage, setShowEmergencyMessage] = useState(false);

  const selectedBrandData = evBrands.find(brand => brand.id === selectedBrand);
  const selectedCityData = locations.find(loc => loc.city === selectedCity);

  useEffect(() => {
    if (formData.serviceType === 'onspot') {
      setShowEmergencyMessage(true);
      setTimeout(() => setShowEmergencyMessage(false), 5000);
    }
  }, [formData.serviceType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Query Section */}
      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Service Query</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select your EV brand
          </label>
          <select
            value={formData.brand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setFormData({ ...formData, brand: e.target.value, model: '' });
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          >
            <option value="">Select a brand</option>
            {evBrands.map(brand => (
              <option key={brand.id} value={brand.id}>{brand.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select your EV Model
          </label>
          <select
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
            disabled={!selectedBrandData}
          >
            <option value="">Select a model</option>
            {selectedBrandData?.models.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Describe your issue
          </label>
          <textarea
            value={formData.issue}
            onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            maxLength={500}
            placeholder="Please describe your issue in detail (max 500 words)"
            required
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {formData.issue.length}/500 characters
          </p>
        </div>
      </div>

      {/* Customer Details Section */}
      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Customer Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contact Number
            </label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="10-digit mobile number"
              required
            />
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Service Details</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Service Type
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                name="serviceType"
                value="onspot"
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                required
              />
              <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                On-spot Service
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="serviceType"
                value="workshop"
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                required
              />
              <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Workshop Service
              </label>
            </div>
          </div>
        </div>

        {showEmergencyMessage && (
          <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 px-4 py-3 rounded relative">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              <p>We'll reach you within 10 minutes!</p>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select City
          </label>
          <select
            value={formData.city}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setFormData({ ...formData, city: e.target.value, area: '' });
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          >
            <option value="">Select a city</option>
            {locations.map(location => (
              <option key={location.city} value={location.city}>{location.city}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Area
          </label>
          <select
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
            disabled={!selectedCityData}
          >
            <option value="">Select an area</option>
            {selectedCityData?.areas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        {formData.serviceType === 'workshop' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Select Time Slot
            </label>
            <select
              value={formData.timeSlot}
              onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Select a time slot</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          required
        />
        <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
          I agree to the terms and conditions
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors transform hover:scale-105"
      >
        Book Now!
      </button>
    </form>
  );
};
