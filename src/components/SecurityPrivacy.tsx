'use client'

import { useState } from 'react'
import { Shield, Lock, Eye } from 'lucide-react'
import DemoModal from './DemoModal'

export default function SecurityPrivacy() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const securityFeatures = [
    {
      icon: Shield,
      title: "Môi trường doanh nghiệp an toàn",
      description: "Dữ liệu của bạn được mã hóa và bảo vệ trong môi trường doanh nghiệp khép kín của chúng tôi."
    },
    {
      icon: Lock,
      title: "Không đào tạo mô hình. Dữ liệu của bạn, quyền sở hữu của bạn",
      description: "Chúng tôi không bao giờ sử dụng dữ liệu của bạn để đào tạo mô hình hoặc chia sẻ với người khác."
    },
    {
      icon: Eye,
      title: "Quyền riêng tư được đảm bảo",
      description: "Chúng tôi ưu tiên quyền riêng tư của bạn và đảm bảo rằng dữ liệu của bạn được xử lý với sự bảo mật tối đa."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Riêng tư & Bảo mật
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Lên lịch cuộc gọi
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
