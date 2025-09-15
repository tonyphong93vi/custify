'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Khách hàng của chúng tôi rất hài lòng với những hiểu biết mà chúng tôi có thể rút ra nhờ Custify. Chúng tôi không thể hạnh phúc hơn!",
      author: "Moa Wirde",
      position: "Project Manager, Convosphere",
      company: "Convosphere"
    },
    {
      quote: "Bây giờ chúng tôi có thể tự tin hỏi các câu hỏi mở. Những gì từng cảm thấy quá sức giờ đây cảm thấy thú vị, như sáng Giáng sinh! Và khách hàng của chúng tôi YÊU THÍCH những hiểu biết!",
      author: "Matt Hussey",
      position: "Founder of Generosity X",
      company: "Generosity X"
    },
    {
      quote: "Tôi 100% ấn tượng với kết quả. Custify siêu đơn giản để sử dụng và rất chính xác.",
      author: "Marc Solby",
      position: "Owner, Lighthouse Consulting",
      company: "Lighthouse"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 relative">
            <blockquote className="text-lg text-gray-700 italic mb-6">
              &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
            </blockquote>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</p>
                <p className="text-sm text-gray-600">{testimonials[currentTestimonial].position}</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-500">{testimonials[currentTestimonial].company}</p>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
