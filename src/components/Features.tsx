'use client'

import { Search, Zap, FileText } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "Khám phá chủ đề tự động",
      description: "AI tiên tiến của chúng tôi quét qua phản hồi văn bản mở của bạn và tự động xác định các chủ đề và chủ đề chính, đảm bảo không bỏ sót hiểu biết giá trị nào.",
      image: "Custify mockup image"
    },
    {
      icon: Zap,
      title: "Mã hóa nhanh chóng & dễ dàng với AI",
      description: "Nói lời tạm biệt với mã hóa thủ công. Nền tảng được hỗ trợ bởi AI của chúng tôi dễ dàng phân loại và mã hóa các phản hồi mở, chuyển đổi văn bản không có cấu trúc thành dữ liệu có cấu trúc, định lượng trong thời gian ngắn.",
      image: "Quick & Effortless AI-Powered Coding"
    },
    {
      icon: FileText,
      title: "Báo cáo và tóm tắt tự động",
      description: "Nhận báo cáo và tóm tắt toàn diện mà không cần động tay. Nền tảng của chúng tôi tạo ra hiểu biết chi tiết và tóm tắt có thể hành động, sẵn sàng để chia sẻ với nhóm và các bên liên quan của bạn.",
      image: "Custify Chart Image"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
