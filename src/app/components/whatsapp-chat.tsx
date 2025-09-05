"use client";
import { useState } from 'react';
import Image from 'next/image';
import { CloseCircle } from 'iconsax-reactjs';

interface WhatsAppChatProps {
  phoneNumber: string;
  message?: string;
  companyName?: string;
}

export default function WhatsAppChat({
  phoneNumber,
  message = 'Hello, I would like to get more information about your services.',
  companyName = 'Wikipage Pro'
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(true);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeBubble = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end">
      {/* Chat bubble */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl mb-3 max-w-xs border border-gray-200 animate-fade-in">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-3 border-b border-gray-100">
            <div className="flex items-center">
              <div className="bg-green-50 p-1 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.96.58 3.78 1.57 5.31L2 22l4.69-1.57A9.98 9.98 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.93 0-3.73-.58-5.23-1.57l-.3-.17-3.12.83.83-3.12-.17-.3A8 8 0 0112 4c4.42 0 8 3.58 8 8s-3.58 8-8 8zm4.47-6.05c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.21-.51-.42-.44-.57-.45-.15-.01-.32-.01-.49-.01s-.45.07-.69.33c-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.08 2.72.13.18 1.86 2.84 4.51 3.98.63.27 1.13.43 1.51.56.63.2 1.2.18 1.65.1.45-.08 1.48-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.07-.1-.23-.16-.48-.28z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">{companyName}</span>
            </div>
            <button 
              onClick={closeBubble}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
          
          {/* Message content */}
          <div className="p-4">
            <p className="text-gray-800 text-sm leading-relaxed">
              Chat with us via WhatsApp for<br />
              quick support and inquiries.
            </p>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.96.58 3.78 1.57 5.31L2 22l4.69-1.57A9.98 9.98 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.93 0-3.73-.58-5.23-1.57l-.3-.17-3.12.83.83-3.12-.17-.3A8 8 0 0112 4c4.42 0 8 3.58 8 8s-3.58 8-8 8zm4.47-6.05c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.89-.21-.51-.42-.44-.57-.45-.15-.01-.32-.01-.49-.01s-.45.07-.69.33c-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.08 2.72.13.18 1.86 2.84 4.51 3.98.63.27 1.13.43 1.51.56.63.2 1.2.18 1.65.1.45-.08 1.48-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.07-.1-.23-.16-.48-.28z"/>
              </svg>
              Start Chat
            </a>
          </div>
        </div>
      )}
      
      {/* WhatsApp button */}
      <button
        onClick={toggleChat}
        className="bg-green-600 hover:bg-green-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
            <CloseCircle size="36" variant="Outline" color="#fffff" className="fill-current" />
        ) : (
            <Image src="/icons/whatsapp-icon.png" alt='whatsapp-icon' width={36} height={36} />
        )}
      </button>
    </div>
  );
}