'use client'

import { useState } from 'react'
import { Users, TrendingUp, Target } from 'lucide-react'
import DemoModal from './DemoModal'

export default function TargetAudience() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const audiences = [
    {
      icon: Users,
      title: "Nhà nghiên cứu thị trường",
      description: "Giảm thời gian hoàn thành nghiên cứu và cung cấp hiểu biết sâu sắc, toàn diện từ các câu trả lời mở trong khảo sát. Chuyển đổi văn bản mở thành dữ liệu định lượng nhanh chóng và dễ dàng, nâng cao khả năng nghiên cứu và sự hài lòng của khách hàng.",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Chuyên gia Consumer Insights & CX",
      description: "Tăng cường sự hài lòng của khách hàng và cải thiện điểm NPS của bạn bằng cách mở khóa những hiểu biết ẩn trong phản hồi khách hàng không có cấu trúc. Chuyển đổi những hiểu biết này thành các chiến lược có thể hành động thúc đẩy tăng trưởng kinh doanh và tăng doanh thu.",
      color: "green"
    },
    {
      icon: Target,
      title: "Nhà phân tích CI",
      description: "Gain a competitive edge by uncovering what your competitors' customers think about their products and services through online reviews. Identify competitors' strengths and weaknesses, and leverage these insights to enhance your own market position.",
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Custify hoàn hảo cho
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(audience.color)}`}>
                <audience.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Lên lịch cuộc gọi
          </button>
          <p className="text-lg font-semibold text-gray-900 mt-4">
            Mở khóa hiểu biết nhanh hơn, để chúng tôi lo việc nặng nhọc!
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4"
          >
            Đặt lịch Demo
          </button>
        </div>
      </div>

      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
