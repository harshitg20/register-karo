import  { useState } from 'react';
import { ChevronRight, ChevronLeft, Star, ChevronDown } from 'lucide-react';
import chris from './../assets/chris.png'

const TestimonialsFAQ = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number|null>(null);

  const testimonials = [
    {
      id: 1,
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident eu commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: chris
    },
    // Add more testimonials as needed
  ];

  const faqs = [
    {
      id: 1,
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files..."
    },
    {
      id: 2,
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files..."
    },
    {
      id: 3,
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files..."
    },
    {
      id: 4,
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files..."
    },
    {
      id: 5,
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files..."
    }
  ];

 

  return (
    <div className="w-full bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            What peoples says about us
          </h2>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      {/* Stars */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-gray-600 mb-6">
                        "{testimonials[0].content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center">
                        <img
                          src={testimonials[0].image}
                          alt={testimonials[0].author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-semibold">{testimonials[0].author}</div>
                          <div className="text-sm text-gray-500">
                            {testimonials[0].position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute -top-16 right-0 flex gap-2">
              <button
               
                className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
               
                className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="w-full  mx-auto ">
          <div className="flex items-center justify-center gap-3 mb-8">
            
            <h2 className="text-2xl font-bold">Frequent Ask Questions</h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
              key={faq.id}
              className="relative group"
            >
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-100"></div>
            
              <button
                className="w-full pl-12 pr-6 py-4 text-left flex items-center justify-between bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
              >
                <span className="font-medium text-gray-700">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-12 py-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-8">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Show more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsFAQ;