'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function HelpCenterHero() {
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
            Chào mừng 👋, đến với Trung tâm Trợ giúp của chúng tôi.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nếu bạn có câu hỏi, bối rối, hoặc chỉ muốn hiểu rõ hơn về sản phẩm của chúng tôi – 
            chúng tôi sẽ hỗ trợ bạn.
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
                placeholder="Bạn có thể nhập câu hỏi của bạn bên dưới."
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
          </form>

          <p className="text-lg text-gray-600">
            Hoặc duyệt qua các danh mục bên dưới.
          </p>
        </div>
      </div>
    </section>
  )
}
