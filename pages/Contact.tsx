
import React, { useState, useEffect } from 'react';
import { FAQ_DATA } from '../constants';
import { PlusIcon, CloseIcon } from '../components/Icons';

interface ContactPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-serif">
      <h2 className="text-xl font-bold text-uw-orange mb-2 uppercase tracking-widest">Frequently Asked Questions</h2>
      <p className="text-gray-300 mb-8">Here are some of the frequently asked questions,</p>
      <div className="space-y-4">
        {FAQ_DATA.map((faq, index) => (
          <div key={index} className="bg-uw-grey-3 rounded-lg transition-all duration-300">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <h3 className="font-semibold text-uw-dark flex-1 pr-4">{faq.question}</h3>
              <div className="text-uw-orange">
                <PlusIcon className="w-6 h-6"/>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="px-5 pb-5 pt-0">
                <p className={`text-uw-dark/80 ${openIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 delay-200`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const ContactForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
    };

    return (
        <div className="font-serif">
            <h2 id="contact-panel-title" className="text-lg sm:text-xl font-bold text-uw-orange mb-2 uppercase tracking-wider">Contact Us</h2>
            <p className="text-gray-300 mb-8 sm:mb-12 max-w-xl text-sm sm:text-base">
              Thank you for contacting us. We appreciate your interest and look forward to assisting you. Our team will respond to your message shortly.
            </p>
            
            <h3 className="text-lg sm:text-xl font-bold text-uw-orange mb-4 sm:mb-6 uppercase tracking-wider">Let's Talk</h3>

            <form onSubmit={handleSubmit}>
                <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm text-gray-300 mb-2">
                                First Name : <span className="text-uw-orange">*</span>
                            </label>
                            <input type="text" id="firstName" required className="block w-full bg-uw-grey-3 text-uw-dark border border-uw-orange rounded-xl p-3 placeholder-uw-grey-1 focus:outline-none focus:ring-2 focus:ring-uw-orange"/>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm text-gray-300 mb-2">
                                Last Name : <span className="text-uw-orange">*</span>
                            </label>
                            <input type="text" id="lastName" required className="block w-full bg-uw-grey-3 text-uw-dark border border-uw-orange rounded-xl p-3 placeholder-uw-grey-1 focus:outline-none focus:ring-2 focus:ring-uw-orange"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                                Email Address : <span className="text-uw-orange">*</span>
                            </label>
                            <input type="email" id="email" required className="block w-full bg-uw-grey-3 text-uw-dark border border-uw-orange rounded-xl p-3 placeholder-uw-grey-1 focus:outline-none focus:ring-2 focus:ring-uw-orange"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm text-gray-300 mb-2">
                                Phone Number :
                            </label>
                            <input type="tel" id="phone" className="block w-full bg-uw-grey-3 text-uw-dark border border-uw-orange rounded-xl p-3 placeholder-uw-grey-1 focus:outline-none focus:ring-2 focus:ring-uw-orange"/>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-2">( * required fields )</p>
                        <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                            Your Message :
                        </label>
                        <textarea id="message" rows={5} className="block w-full bg-uw-grey-3 text-uw-dark border border-uw-orange rounded-xl p-3 placeholder-uw-grey-1 focus:outline-none focus:ring-2 focus:ring-uw-orange"></textarea>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 flex justify-end">
                    <button type="submit" className="bg-uw-orange text-white font-bold uppercase tracking-widest py-3 px-6 sm:px-8 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-uw-dark focus:ring-uw-orange transition-all duration-300 ease-in-out text-sm sm:text-base">
                        Send Message
                    </button>
                </div>
            </form>
            
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-uw-grey-1/30 text-gray-300 text-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
                    <div>
                        <p className="font-bold text-white">United Works Pte. Ltd.</p>
                        <p>33 Ubi Avenue 3, #07-61</p>
                        <p>Vertex, Singapore 408868</p>
                    </div>
                    <div className="text-left sm:text-right">
                        <p>Tel: +65 6636 3196</p>
                        <p>Email: info@unitedworks.com.sg</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Contact: React.FC<ContactPanelProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 bg-black/60' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-panel-title"
    >
      <div
        className={`fixed top-0 right-0 h-full w-full transform bg-uw-dark text-white shadow-lg transition-transform duration-500 ease-in-out overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="grid lg:grid-cols-5 h-full">
            {/* Left Column: Form */}
            <div className="lg:col-span-3 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 h-full overflow-y-auto">
                <ContactForm />
            </div>

            {/* Right Column: FAQ */}
            <div className="lg:col-span-2 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 h-full overflow-y-auto border-l border-uw-grey-1/30 relative">
                 <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex items-center gap-4">
                    <div className="hidden sm:block w-px h-8 bg-uw-grey-1/50"></div>
                    <button 
                        onClick={onClose} 
                        className="text-uw-orange hover:text-orange-300 transition-colors"
                        aria-label="Close contact panel"
                    >
                        <CloseIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                </div>
                <FaqAccordion />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;