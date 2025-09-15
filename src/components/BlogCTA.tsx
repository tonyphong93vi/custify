'use client'

import { useState } from 'react'
import DemoModal from './DemoModal'

export default function BlogCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mở khóa hiểu biết nhanh hơn, để chúng tôi lo việc nặng nhọc!
          </h2>
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
