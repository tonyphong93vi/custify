'use client'

import { useState } from 'react'
import DemoModal from './DemoModal'

export default function AboutHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <img 
                src="/custify.jpg" 
                alt="Custify" 
                className="h-12 w-12 rounded-lg mr-3"
              />
              <span className="text-4xl font-bold text-gray-900">
                Custify
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Chuyển đổi phản hồi thành{' '}
            <span className="text-blue-600">hiểu biết có thể hành động</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Custify giúp các thương hiệu và công ty nghiên cứu thị trường khai thác sức mạnh 
            của phản hồi khách hàng thông qua phân tích văn bản được hỗ trợ bởi AI.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Đặt lịch Demo
            </button>
          </div>
        </div>
      </div>

      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
