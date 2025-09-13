'use client'

import { BookOpen, Search, Globe, Users, FileText, Plus } from 'lucide-react'

export default function KnowledgeBaseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cơ sở tri thức
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Cung cấp trải nghiệm tự phục vụ mượt mà với Trung tâm Trợ giúp của chúng tôi
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giúp khách hàng tìm câu trả lời nhanh chóng với cơ sở tri thức linh hoạt, dễ sử dụng. 
            Tùy chỉnh nó để phù hợp với thương hiệu của bạn và mang đến trải nghiệm tự phục vụ 24/7 mượt mà.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Cá nhân hóa nội dung cho mọi phân khúc khách hàng
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Viết nội dung cá nhân hóa cho từng phân khúc khách hàng của bạn. Dù bạn quản lý 
              nhiều thương hiệu hay sản phẩm, hãy tạo các cổng thông tin chuyên dụng cho từng loại và quản lý tất cả từ một bảng điều khiển.
            </p>
            
            {/* Portal Demo */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">Cổng thông tin</h4>
                <span className="text-sm text-gray-500">Tạo và quản lý nhiều cổng thông tin</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Cửa hàng kem</p>
                    <p className="text-sm text-gray-600">custify.help/handbook</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Nhóm Burger</p>
                    <p className="text-sm text-gray-600">custify.help/user-guide</p>
                  </div>
                  <button className="text-gray-600 hover:text-gray-700">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Hướng dẫn người dùng</p>
                    <p className="text-sm text-gray-600">custify.help/user-guide</p>
                  </div>
                  <button className="text-gray-600 hover:text-gray-700">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button className="w-full mt-3 p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 transition-colors">
                Cổng thông tin mới
              </button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Cải thiện khám phá nội dung với tìm kiếm được hỗ trợ bởi AI
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Dễ dàng tìm nội dung với tìm kiếm được hỗ trợ bởi AI của chúng tôi, được xây dựng cho các truy vấn tự nhiên, hội thoại. 
              Cung cấp câu trả lời nhanh chóng, phù hợp cho trải nghiệm khách hàng tuyệt vời.
            </p>
            
            {/* Search Demo */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm bài viết..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <div className="p-2 bg-purple-50 rounded text-sm">
                  <p className="font-medium text-gray-900">Thiết lập tên miền tùy chỉnh cho cổng thông tin của bạn</p>
                  <p className="text-gray-600">Làm theo một vài bước đơn giản. Bắt đầu bằng cách điền tên miền tùy chỉnh của bạn...</p>
                </div>
                <div className="p-2 bg-gray-50 rounded text-sm">
                  <p className="font-medium text-gray-900">Chọn widget chat trực tiếp cho trung tâm trợ giúp của bạn</p>
                  <p className="text-gray-600">https://www.docs.yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Center Demo */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Sidebar */}
              <div className="bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Danh mục</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-white rounded border-l-4 border-blue-500">
                    <p className="font-medium text-gray-900">Bắt đầu</p>
                    <p className="text-sm text-gray-600">6 bài viết</p>
                  </div>
                  <div className="p-2 hover:bg-white rounded cursor-pointer">
                    <p className="font-medium text-gray-900">Tài liệu API</p>
                    <p className="text-sm text-gray-600">12 bài viết</p>
                  </div>
                  <div className="p-2 hover:bg-white rounded cursor-pointer">
                    <p className="font-medium text-gray-900">Tích hợp</p>
                    <p className="text-sm text-gray-600">8 bài viết</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Giữ các bài viết của bạn được nhóm và tổ chức</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>Tiếng Việt (vi-VN)</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Hỗ trợ tất cả ngôn ngữ</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2 p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Thiết lập tên miền tùy chỉnh cho cổng thông tin của bạn
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Nhận chứng chỉ SSL cho tên miền tùy chỉnh của bạn</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Bảo mật
                    </span>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Chúng tôi cung cấp chứng chỉ SSL cho tất cả khách hàng đám mây thiết lập tên miền tùy chỉnh cho cổng thông tin của họ. 
                    Truy cập bảo mật được đảm bảo.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Làm theo một vài bước đơn giản:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Bắt đầu bằng cách điền tên miền tùy chỉnh của bạn</li>
                      <li>Sau đó trỏ nó đến custify.help</li>
                      <li>Mở máy chủ tên của bạn</li>
                    </ol>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Viết nội dung phong phú với liên kết video và siêu dữ liệu</h4>
                    <p className="text-gray-600 text-sm">Trang web Custify</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Chọn widget chat trực tiếp cho trung tâm trợ giúp của bạn</h4>
                      <p className="text-gray-600 text-sm">https://www.docs.yourdomain.com</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Nhận chứng chỉ SSL tự động tạo của bạn</h4>
                      <p className="text-gray-600 text-sm">Bảo mật tên miền tùy chỉnh của bạn tự động</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Rất ấn tượng với @custifyapp - một chiến thắng mã nguồn mở khác. Trung tâm trợ giúp/tài liệu sẵn có rất sạch sẽ. 
              Tôi nên công khai tuyên bố - Chúng tôi yêu Custify. Trải nghiệm thật tuyệt vời!"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Aron Wagner</p>
                <p className="text-sm text-gray-600">CEO, American Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
