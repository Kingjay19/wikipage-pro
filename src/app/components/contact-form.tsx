import { useState, FormEvent } from 'react';
import { Send } from 'iconsax-reactjs';

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

const ContactForm = () => {
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
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setError(result.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
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
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          disabled={isSubmitting}
          defaultValue=""
        >
          <option value="">Select a service</option>
          <option value="web-dev">Website Development</option>
          <option value="web-revamp">Website Revamping</option>
          <option value="ui-ux">UI/UX Design</option>
          <option value="wiki">Wiki Services</option>
          <option value="wordpress">WordPress Services</option>
          <option value="google-business">Google Business Listing</option>
          <option value="ecommerce">E-Commerce Solutions</option>
          <option value="seo">SEO Optimization</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tell us about your project, timeline, and budget..."
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      {/* Optional file upload for general form too */}
      <div>
        <label htmlFor="file" className="block text-sm text-gray-700 mb-1">
          Attach Files (Optional)
        </label>
        <input
          type="file"
          id="file"
          name="file"
          multiple
          accept=".doc,.docx,.pdf,image/jpeg,image/jpg,image/png,.zip"
          className="w-full px-4 py-3 rounded-lg text-xs border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          disabled={isSubmitting}
        />
        <p className="text-xs text-gray-500 mt-1">
          Max 10MB per file. Accepted: DOC, PDF, JPEG, PNG, ZIP
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
            Sending...
          </>
        ) : (
          <>
            <Send size={20} className="mr-2" variant="Bold" />
            {isSuccess ? 'Sent!' : 'Send Message'}
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;