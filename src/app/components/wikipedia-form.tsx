import { useState, FormEvent } from 'react';
import { Send } from 'iconsax-reactjs';

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

const WikipediaForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result: ApiResponse = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setError(result.error || 'Failed to submit form');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          Thank you! Your Wiki request has been submitted. We'll review it within 24-48 hours.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your name"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="your@email.com"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="+123 456 7890"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
          Wiki Page Topic
        </label>
        <input
          type="text"
          id="topic"
          name="topic"
          className="w-full px-4 py-3 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., John Doe - Entrepreneur"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="info" className="block text-sm font-medium text-gray-700 mb-1">
          Available Information
        </label>
        <textarea
          id="info"
          name="info"
          rows={3}
          className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Please provide details about achievements, awards, publications, media coverage, etc."
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      <div>
        <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-1">
          Available References (Optional)
        </label>
        <textarea
          id="references"
          name="references"
          rows={2}
          className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="News articles, official websites, academic publications, etc."
          disabled={isSubmitting}
        ></textarea>
      </div>

      <div>
        <label htmlFor="file" className="block text-sm text-gray-700 mb-1">
          Upload Supporting Documents (Optional)
        </label>
        <input
          type="file"
          id="file"
          name="file"
          multiple
          accept=".doc,.docx,.pdf,image/jpeg,image/jpg,image/png"
          className="w-full px-4 py-3 rounded-lg text-xs border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          disabled={isSubmitting}
        />
        <p className="text-xs text-gray-500 mt-1">
          Max 10MB per file. Accepted: DOC, PDF, JPEG, PNG
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Submitting...
          </>
        ) : (
          <>
            <Send size={20} className="mr-2" variant="Bold" />
            Submit Wiki Request
          </>
        )}
      </button>
    </form>
  );
};

export default WikipediaForm;