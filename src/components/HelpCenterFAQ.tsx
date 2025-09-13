'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function HelpCenterFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Làm thế nào để tự động hóa cuộc trò chuyện với chatbot?",
      answer: "Bạn có thể tích hợp Custify với các nền tảng chatbot như Dialogflow, Rasa, hoặc các chatbot tùy chỉnh khác. Điều này cho phép bạn tự động hóa các phản hồi thường gặp và giảm tải cho nhân viên hỗ trợ."
    },
    {
      question: "Tôi có thể tùy chỉnh thương hiệu Custify không?",
      answer: "Có, Custify cho phép bạn tùy chỉnh hoàn toàn giao diện và thương hiệu. Bạn có thể thay đổi logo, màu sắc, tên thương hiệu và nhiều yếu tố khác để phù hợp với thương hiệu của doanh nghiệp."
    },
    {
      question: "Làm thế nào để mở rộng Custify cho các hoạt động back-office?",
      answer: "Custify cung cấp API mạnh mẽ và khả năng tích hợp để mở rộng chức năng cho các hoạt động back-office. Bạn có thể tích hợp với CRM, hệ thống kế toán, và các công cụ quản lý khác."
    },
    {
      question: "Làm thế nào để tích hợp Custify với Dialogflow?",
      answer: "Bạn có thể tích hợp Custify với Dialogflow thông qua webhook và API. Điều này cho phép bạn sử dụng sức mạnh AI của Dialogflow để tự động hóa các cuộc trò chuyện và cung cấp phản hồi thông minh."
    },
    {
      question: "Làm thế nào để cấu hình IMAP trong kênh Email?",
      answer: "Để cấu hình IMAP trong kênh Email, bạn cần vào phần Cài đặt > Kênh > Email và nhập thông tin máy chủ IMAP của bạn. Custify sẽ hướng dẫn bạn qua quá trình thiết lập từng bước."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-xl text-gray-600">
            Tìm câu trả lời cho các câu hỏi phổ biến nhất
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Không tìm thấy câu trả lời bạn đang tìm kiếm?
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Liên hệ hỗ trợ
          </button>
        </div>
      </div>
    </section>
  )
}
