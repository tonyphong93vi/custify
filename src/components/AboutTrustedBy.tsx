'use client'

import { useState } from 'react'
import DemoModal from './DemoModal'

export default function AboutTrustedBy() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const trustedBrands = [
    'Nespresso',
    'Insights Exchange', 
    'Spark Emotions',
    'Sapio',
    'Convosphere',
    '8 Acre Perspective',
    'CI Media',
    'Dialogue'
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted by section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Được tin tưởng bởi các thương hiệu hàng đầu & công ty nghiên cứu thị trường:
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedBrands.map((brand, index) => (
              <div key={index} className="text-lg font-semibold text-gray-500">
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mở khóa hiểu biết nhanh hơn, để chúng tôi lo việc nặng nhọc!
          </h3>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Đặt lịch Demo
          </button>
        </div>

        <DemoModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  )
}
