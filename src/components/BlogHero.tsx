'use client'

import Image from 'next/image'

export default function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <Image 
                src="/custify.jpg" 
                alt="Custify" 
                width={48}
                height={48}
                className="rounded-lg mr-3"
              />
              <span className="text-4xl font-bold text-gray-900">
                Custify
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Blog Custify
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Khám phá những hiểu biết sâu sắc về phân tích phản hồi khách hàng, 
            nghiên cứu thị trường và AI-powered text analysis
          </p>
        </div>
      </div>
    </section>
  )
}
