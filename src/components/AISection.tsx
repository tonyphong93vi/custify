'use client'

import { Bot, Zap, Languages, MessageSquare, Sparkles } from 'lucide-react'

export default function AISection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Giảm thiểu câu hỏi hỗ trợ với CusAI, trợ lý AI của bạn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CusAI là trợ lý AI tích hợp của Custify giúp nhân viên của bạn làm việc nhanh hơn, phản hồi thông minh hơn, 
            và kết nối với khách hàng một cách cá nhân hóa hơn. Mọi cuộc trò chuyện đều diễn ra mượt mà và được giải quyết nhanh chóng hơn.
          </p>
        </div>

        {/* Chat Demo */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-6 shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                  Xin chào, tôi cần được giúp đỡ!
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg max-w-xs shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Bot className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">CusAI</span>
                  </div>
                  Xin chào, tôi là CusAI! Tôi có thể giúp gì cho bạn?
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Tự động hóa cuộc trò chuyện với CusAI
            </h3>
            <p className="text-gray-600">
              Giảm khối lượng hỗ trợ với trợ lý AI của chúng tôi, học hỏi từ trung tâm trợ giúp, 
              cuộc trò chuyện và FAQ để trả lời các câu hỏi thường gặp một cách hiệu quả.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Tăng năng suất với CusAI Copilot
            </h3>
            <p className="text-gray-600">
              Với Copilot bên cạnh, bạn sẽ có được các gợi ý câu trả lời thông minh, truy cập tức thì vào 
              các cuộc trò chuyện trước đó và tra cứu nhanh từ các bài viết trợ giúp.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Languages className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Nói ngôn ngữ của khách hàng
            </h3>
            <p className="text-gray-600">
              CusAI giúp nhân viên phản hồi khách hàng bằng ngôn ngữ mẹ đẻ của họ, 
              cung cấp bản dịch mượt mà để mọi người đều cảm thấy được hiểu.
            </p>
          </div>
        </div>

        {/* Copilot Demo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  CusAI Copilot trong hành động
                </h3>
                <p className="text-gray-600 mb-6">
                  Xem cách CusAI Copilot giúp nhân viên cung cấp phản hồi tốt hơn, nhanh hơn cho khách hàng.
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Bạn</span>
                    </div>
                    <p className="text-gray-600">Bạn có thể gợi ý câu trả lời không?</p>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">Co-Pilot</span>
                    </div>
                    <p className="text-gray-700">
                      Câu trả lời là tôi, Co-Pilot! Tôi có thể cung cấp gợi ý câu trả lời thông minh, 
                      truy cập tức thì vào các cuộc trò chuyện trước đó và tra cứu nhanh từ trung tâm trợ giúp.
                    </p>
                    <div className="flex gap-2 mt-3">
                      <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">
                        Sử dụng
                      </button>
                      <button className="text-xs bg-white text-purple-600 px-3 py-1 rounded-full border border-purple-200">
                        Cải thiện
                      </button>
                      <button className="text-xs bg-white text-purple-600 px-3 py-1 rounded-full border border-purple-200">
                        Dịch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-600">Hỏi co-pilot...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
