'use client'

import { MessageCircle, Palette, Code, Smartphone, Globe } from 'lucide-react'

export default function OmnichannelSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bàn hỗ trợ đa kênh
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Giữ tất cả cuộc trò chuyện khách hàng ở một nơi
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custify cho phép bạn hỗ trợ khách hàng trên website, email, mạng xã hội và các nền tảng 
            nhắn tin như Facebook, Instagram, Telegram, Line v.v. — tất cả từ một nơi.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Tạo widget chat trực tiếp phù hợp với thương hiệu của bạn
            </h3>
            <p className="text-gray-600">
              Tùy chỉnh màu sắc, ngôn ngữ, văn bản và thiết kế để phù hợp với thương hiệu của bạn một cách dễ dàng. 
              Tương tác với khách hàng theo cách chân thực.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Tương tác với khách hàng trên WhatsApp
            </h3>
            <p className="text-gray-600">
              Gửi tin nhắn nội dung phong phú, chia sẻ cập nhật và xây dựng kết nối cá nhân hơn một cách dễ dàng.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Giải quyết các trường hợp sử dụng tùy chỉnh với API của chúng tôi
            </h3>
            <p className="text-gray-600">
              Mở rộng Custify với các tích hợp tùy chỉnh. Sử dụng API dành cho nhà phát triển của chúng tôi để xây dựng 
              các giải pháp phù hợp với nhu cầu hỗ trợ cụ thể của bạn.
            </p>
          </div>
        </div>

        {/* Live Chat Demo */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Chat Widget Demo */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Widget Chat Trực tiếp
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Xin chào.</h4>
                        <p className="text-sm text-gray-600">Chúng tôi có thể giúp gì cho bạn?</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                        Tìm kiếm Trung tâm Trợ giúp
                      </button>
                      <button className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                        Chat với chúng tôi
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Cài đặt chat trực tiếp</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span>Cài đặt chat trực tiếp</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span>bật xác thực danh tính</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Màu chủ đề</span>
                      <div className="w-6 h-6 bg-blue-600 rounded border"></div>
                      <span className="text-xs font-mono">#2781F6</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              &ldquo;Với một phần đáng kể doanh số bán hàng của chúng tôi diễn ra qua chat, nếu nền tảng hỗ trợ khách hàng 
              cốt lõi của chúng tôi không thể truy cập được, đó là một cuộc khủng hoảng. Custify đã rất cần thiết trong việc đảm bảo 
              hệ thống quan trọng này luôn đáng tin cậy và là trung tâm của hoạt động khách hàng của chúng tôi.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Prateek Jogani</p>
                <p className="text-sm text-gray-600">Co-founder & CTO, FairDee</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-blue-600 hover:underline cursor-pointer">Đọc nghiên cứu trường hợp</p>
          </div>
        </div>
      </div>
    </section>
  )
}