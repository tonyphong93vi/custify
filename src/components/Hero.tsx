'use client'

import { useState } from 'react'
import DemoModal from './DemoModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Phân tích phản hồi khách hàng trong{' '}
            <span className="text-blue-600">vài phút, không phải vài ngày</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Được xây dựng cho các nhà nghiên cứu cần chuyển đổi các phản hồi mở thành những hiểu biết rõ ràng, thuyết phục. Nhanh chóng.
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

          {/* Trusted by section */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-gray-600 mb-6">
              Được tin tưởng bởi các thương hiệu hàng đầu & công ty nghiên cứu thị trường:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-500">Nespresso</div>
              <div className="text-lg font-semibold text-gray-500">Insights Exchange</div>
              <div className="text-lg font-semibold text-gray-500">Spark Emotions</div>
              <div className="text-lg font-semibold text-gray-500">Sapio</div>
              <div className="text-lg font-semibold text-gray-500">Convosphere</div>
              <div className="text-lg font-semibold text-gray-500">8 Acre Perspective</div>
              <div className="text-lg font-semibold text-gray-500">CI Media</div>
              <div className="text-lg font-semibold text-gray-500">Dialogue</div>
            </div>
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
