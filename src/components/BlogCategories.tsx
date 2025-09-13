'use client'

import { useState } from 'react'
import { MessageCircle, Zap, Users, BarChart3, Code, BookOpen } from 'lucide-react'

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Tất cả', icon: BookOpen, count: 24 },
    { id: 'customer-support', name: 'Hỗ trợ khách hàng', icon: MessageCircle, count: 8 },
    { id: 'automation', name: 'Tự động hóa', icon: Zap, count: 6 },
    { id: 'team-management', name: 'Quản lý nhóm', icon: Users, count: 5 },
    { id: 'analytics', name: 'Phân tích & Báo cáo', icon: BarChart3, count: 3 },
    { id: 'integrations', name: 'Tích hợp', icon: Code, count: 2 }
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
