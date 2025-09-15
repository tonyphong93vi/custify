'use client'

import { FileText, Zap } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Problem Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-4">
                <FileText className="w-4 h-4 mr-2" />
                Vấn đề
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nói lời tạm biệt với việc phân tích văn bản tẻ nhạt
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Phân tích các câu trả lời mở trong khảo sát và đánh giá trực tuyến một cách thủ công tốn thời gian, chậm chạp và tẻ nhạt. 
                  Ngay cả các nền tảng mã hóa truyền thống cũng không đáp ứng được, đòi hỏi nỗ lực thủ công đáng kể mà không mang lại 
                  phân tích ở mức độ con người.
                </p>
                <p>
                  Điều này khiến bạn phải đối mặt với một lựa chọn khó khăn: hoặc dành các nguồn lực quý giá cho quá trình thủ công 
                  tốn công sức này hoặc bỏ lỡ những hiểu biết quan trọng ẩn trong phản hồi văn bản mở của khách hàng.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <img 
                  src="/good_bye_paper.svg" 
                  alt="Goodbye paperwork - AI automation" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:order-2">
              <div className="bg-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-blue-600">
                <Zap size={120} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Bảng điều khiển mã hóa Custify</p>
              </div>
              </div>
            </div>
            <div className="md:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Giải pháp
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Chuyển đổi phản hồi thành hiểu biết có thể hành động nhanh chóng & dễ dàng
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Custify tự động hóa quá trình mã hóa các câu trả lời mở trong khảo sát, đánh giá trực tuyến và các phản hồi văn bản mở khác, 
                  chuyển đổi chúng thành hiểu biết kinh doanh có thể hành động nhanh chóng và dễ dàng được hỗ trợ bởi AI Generative.
                </p>
                <p>
                  Custify đảm nhận việc mã hóa và phân tích tẻ nhạt, để nhóm của bạn có thể tập trung vào những điều quan trọng, 
                  tạo ra hiểu biết và thúc đẩy doanh nghiệp của bạn tiến lên.
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Mở khóa hiểu biết nhanh hơn, để chúng tôi lo việc nặng nhọc!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
