'use client'

import { useState } from 'react'
import { Upload, Brain, Download, Globe } from 'lucide-react'
import DemoModal from './DemoModal'

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const steps = [
    {
      icon: Upload,
      title: "Nhập dữ liệu của bạn",
      description: "Dễ dàng tải lên dữ liệu của bạn ở định dạng Excel, CSV hoặc SPSS từ bất kỳ nguồn nào. Với Custify, việc đưa dữ liệu vào đơn giản như kéo và thả!"
    },
    {
      icon: Brain,
      title: "Phân tích được hỗ trợ bởi AI",
      description: "Ngồi lại và để Custify làm việc nặng nhọc. AI thông minh của chúng tôi lặn vào dữ liệu của bạn, khám phá chủ đề và thực hiện mã hóa ngữ nghĩa để chuyển văn bản thành hiểu biết có thể hành động."
    },
    {
      icon: Download,
      title: "Dữ liệu sẵn sàng sử dụng",
      description: "Nhận quyền truy cập tức thì vào hiểu biết của bạn. Custify tạo ra một bảng điều khiển tự động với biểu đồ và tóm tắt thú vị, cộng với một tệp Excel đầy đủ với tất cả dữ liệu được mã hóa của bạn. Mọi thứ bạn cần, sẵn sàng để sử dụng!"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nhanh chóng & dễ dàng phần mềm mã hóa verbatim
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Multi-language support */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hỗ trợ đa ngôn ngữ sẵn có
            </h3>
              <p className="text-lg text-gray-600 mb-8">
                Phân tích phản hồi từ khán giả toàn cầu một cách dễ dàng. Custify hỗ trợ nhiều ngôn ngữ sẵn có, 
                cho phép bạn có được hiểu biết từ các thị trường đa dạng mà không cần dịch thuật hoặc thiết lập thêm.
              </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">Tiếng Việt</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">English</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">中文</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">日本語</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">Español</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">Français</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">Deutsch</span>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Bắt đầu
              </button>
            </div>
          </div>
        </div>
      </div>

      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
