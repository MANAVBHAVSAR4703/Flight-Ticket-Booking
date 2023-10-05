import React from 'react';
import './faq.css'
function FAQSection() {
  const faqs = [
    {
      question: 'What is Web Check-in?',
      answer:
        'Web check-in is the process of checking in for your flight online through the airline\'s website or mobile app before arriving at the airport.',
    },
    {
      question: 'What if I exceed my free baggage weight allowance?',
      answer:
        'If you exceed your free baggage weight allowance, you may be required to pay additional fees for the excess weight. Check with the airline for specific details.',
    },
    {
      question: 'How can I change/cancel my reservation?',
      answer:
        'You can change or cancel your reservation by contacting the airline\'s customer support or using their online booking management system, depending on their policies.',
    },
    {
      question: 'What is Kiosk Check-in?',
      answer:
        'Kiosk check-in allows you to check in for your flight using a self-service kiosk at the airport. Follow the on-screen instructions to complete the process.',
    },
    {
      question: 'Can I alter my name in case I am not able to travel and transfer my ticket to another person?',
      answer:
        'Ticket name changes and transfers vary by airline and fare type. Check with the airline for their specific policies and any associated fees.',
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="text-center">FAQs</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`faqHeading${index}`}>
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#faqCollapse${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`faqCollapse${index}`}
                >
                  {faq.question}
                </button>
              </h5>
            </div>
            <div
              id={`faqCollapse${index}`}
              className={`collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`faqHeading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  );
}

export default FAQSection;
