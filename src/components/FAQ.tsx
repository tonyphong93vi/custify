'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import DemoModal from './DemoModal'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const faqs = [
    {
      question: "Custify dành cho ai?",
      answer: "Custify được thiết kế cho các công ty nghiên cứu thị trường, nhóm customer insights và bất kỳ ai muốn chuyển đổi phản hồi mở thành hiểu biết có thể hành động nhanh chóng và hiệu quả. Cho dù bạn đang phân tích phản hồi khảo sát, đánh giá trực tuyến hay vé hỗ trợ khách hàng, Custify giúp bạn hoàn thành công việc mà không gặp rắc rối của mã hóa thủ công. Nó hoàn hảo cho các chuyên gia cần hiểu biết nhanh, chính xác trong khi vẫn kiểm soát đầy đủ quá trình."
    },
    {
      question: "Mã hóa của Custify chính xác đến mức nào?",
      answer: "Custify được thiết kế để có độ chính xác cấp độ chuyên nghiệp. AI của chúng tôi cung cấp mã hóa chính xác có thể khớp hoặc thậm chí vượt qua mã hóa thủ công, tiết kiệm thời gian cho bạn trong khi duy trì chất lượng cao. Bạn luôn có thể xem xét và điều chỉnh kết quả để đảm bảo mọi thứ đáp ứng tiêu chuẩn của bạn."
    },
    {
      question: "Tôi có thể tùy chỉnh quá trình mã hóa để phù hợp với nhu cầu của mình không?",
      answer: "Hoàn toàn có thể! Custify cho bạn kiểm soát đầy đủ quá trình mã hóa. Bạn có thể điều chỉnh danh mục, xem xét kết quả và tinh chỉnh phân tích để phù hợp với nhu cầu riêng của bạn, đảm bảo hiểu biết có liên quan đến doanh nghiệp của bạn."
    },
    {
      question: "Custify có phù hợp với bộ dữ liệu lớn không?",
      answer: "Có! Custify được xây dựng để mở rộng quy mô, cho dù bạn đang làm việc với một khảo sát nhỏ hay bộ dữ liệu lớn. Nó có thể xử lý khối lượng lớn dữ liệu hiệu quả mà không ảnh hưởng đến tốc độ hoặc độ chính xác."
    },
    {
      question: "Custify khác gì so với các công cụ mã hóa khác?",
      answer: "Custify nổi bật bằng cách cung cấp một nền tảng nhanh chóng, dễ sử dụng với kiểm soát đầy đủ và các tùy chọn tùy chỉnh. Không giống như các công cụ khác có thể yêu cầu thiết lập mở rộng hoặc nỗ lực thủ công, Custify được thiết kế để dễ dàng trong khi mang lại kết quả chuyên nghiệp, chính xác—mà không cần làm việc nặng nhọc."
    },
    {
      question: "Có thời gian dùng thử không?",
      answer: "Có, chúng tôi cung cấp thời gian dùng thử miễn phí để bạn có thể trải nghiệm Custify trước khi đưa ra cam kết. Sẵn sàng xem nó hoạt động? Đặt lịch demo ngay hôm nay và nhóm của chúng tôi sẽ hướng dẫn bạn qua nền tảng và giúp bạn bắt đầu."
    },
    {
      question: "Tôi có cần đăng ký không?",
      answer: "Không nhất thiết. Chúng tôi cung cấp cả kế hoạch đăng ký và các tùy chọn linh hoạt trả theo sử dụng, vì vậy bạn có thể chọn những gì phù hợp nhất với nhu cầu của mình."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Câu hỏi thường gặp
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
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
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Mở khóa hiểu biết nhanh hơn, để chúng tôi lo việc nặng nhọc!
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
