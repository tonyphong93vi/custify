'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function ResourcesHero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tài nguyên & Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Khám phá các bài viết, hướng dẫn và tài nguyên hữu ích để tối ưu hóa 
            hỗ trợ khách hàng và phát triển doanh nghiệp của bạn.
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bài viết, hướng dẫn..."
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-white px-3 py-1 rounded-full">#Hỗ trợ khách hàng</span>
            <span className="bg-white px-3 py-1 rounded-full">#Tự động hóa</span>
            <span className="bg-white px-3 py-1 rounded-full">#Tích hợp</span>
            <span className="bg-white px-3 py-1 rounded-full">#Best practices</span>
          </div>
        </div>
      </div>
    </section>
  )
}
