'use client'

import { Star, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Giới thiệu CusAI, trợ lý AI của chúng tôi
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Công cụ hỗ trợ khách hàng hiện đại cho{' '}
            <span className="text-blue-600">doanh nghiệp của bạn</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Trợ lý AI, bàn hỗ trợ đa kênh, cơ sở tri thức. Mọi thứ bạn cần cho{' '}
            <span className="font-semibold">hỗ trợ khách hàng liền mạch</span>, tất cả trong một nơi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Bắt đầu dùng thử miễn phí
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
              Yêu cầu demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.5+ đánh giá</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Được tin tưởng bởi 15,000+ doanh nghiệp</span>
            </div>
          </div>

          {/* AI Powered Badge */}
          <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 animate-pulse"></span>
            Được hỗ trợ bởi AI
            <span className="ml-2 text-purple-600 hover:underline cursor-pointer">Tìm hiểu thêm</span>
          </div>
        </div>
      </div>
    </section>
  )
}
