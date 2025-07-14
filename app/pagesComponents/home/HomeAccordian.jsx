'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from './data';



export default function HomeAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="bg-white    overflow-hidden">
        {/* Header */}
        <div className="bg-white">
          <h1 className="text-2xl font-bold text-center text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>
        
        <div className="bg-white">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className=""
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 bg-white cursor-pointer hover:bg-gray-50 flex items-center justify-between transition-colors duration-200 focus:outline-none focus:bg-gray-50 text-left"
              >
                <span className="font-medium text-gray-900 text-base pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-gray-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}