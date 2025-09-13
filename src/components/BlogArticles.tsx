import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

export default function BlogArticles() {
  const articles = [
    {
      id: 1,
      title: "10 Cách Tối Ưu Hóa Hỗ Trợ Khách Hàng Với CusAI",
      excerpt: "Khám phá cách sử dụng trí tuệ nhân tạo để cải thiện trải nghiệm khách hàng và tăng hiệu quả làm việc của nhóm hỗ trợ.",
      category: "customer-support",
      author: "Nguyễn Minh Tuấn",
      date: "15 Tháng 1, 2025",
      readTime: "8 phút đọc",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Hướng Dẫn Tích Hợp Custify Với WhatsApp Business",
      excerpt: "Từng bước hướng dẫn chi tiết cách kết nối Custify với WhatsApp Business để quản lý tin nhắn khách hàng hiệu quả.",
      category: "integrations",
      author: "Trần Thị Lan",
      date: "12 Tháng 1, 2025",
      readTime: "6 phút đọc",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Tự Động Hóa Quy Trình Hỗ Trợ: Từ Cơ Bản Đến Nâng Cao",
      excerpt: "Học cách thiết lập các quy trình tự động hóa thông minh để giảm tải cho nhân viên và cải thiện thời gian phản hồi.",
      category: "automation",
      author: "Lê Văn Hùng",
      date: "10 Tháng 1, 2025",
      readTime: "12 phút đọc",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Xây Dựng Nhóm Hỗ Trợ Khách Hàng Hiệu Quả",
      excerpt: "Các chiến lược và best practices để xây dựng và quản lý nhóm hỗ trợ khách hàng chuyên nghiệp.",
      category: "team-management",
      author: "Phạm Thị Mai",
      date: "8 Tháng 1, 2025",
      readTime: "10 phút đọc",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Phân Tích Dữ Liệu Hỗ Trợ: Đo Lường Thành Công",
      excerpt: "Cách sử dụng các báo cáo và phân tích để đánh giá hiệu suất hỗ trợ khách hàng và tối ưu hóa quy trình.",
      category: "analytics",
      author: "Hoàng Minh Đức",
      date: "5 Tháng 1, 2025",
      readTime: "9 phút đọc",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "CusAI: Trợ Lý AI Thông Minh Cho Doanh Nghiệp",
      excerpt: "Tìm hiểu về CusAI - trợ lý AI mới của Custify và cách nó có thể cách mạng hóa cách bạn hỗ trợ khách hàng.",
      category: "customer-support",
      author: "Vũ Thị Hương",
      date: "3 Tháng 1, 2025",
      readTime: "7 phút đọc",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 7,
      title: "Tích Hợp API Custify: Mở Rộng Khả Năng",
      excerpt: "Hướng dẫn chi tiết về API Custify và cách sử dụng để tích hợp với các hệ thống khác trong doanh nghiệp.",
      category: "integrations",
      author: "Đặng Văn Nam",
      date: "1 Tháng 1, 2025",
      readTime: "15 phút đọc",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 8,
      title: "Best Practices: Quản Lý Cuộc Trò Chuyện Đa Kênh",
      excerpt: "Các phương pháp hay nhất để quản lý hiệu quả cuộc trò chuyện từ nhiều kênh khác nhau trong một giao diện thống nhất.",
      category: "customer-support",
      author: "Bùi Thị Linh",
      date: "28 Tháng 12, 2024",
      readTime: "11 phút đọc",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      'customer-support': 'bg-blue-100 text-blue-800',
      'automation': 'bg-green-100 text-green-800',
      'team-management': 'bg-purple-100 text-purple-800',
      'analytics': 'bg-orange-100 text-orange-800',
      'integrations': 'bg-pink-100 text-pink-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getCategoryName = (category: string) => {
    const names = {
      'customer-support': 'Hỗ trợ khách hàng',
      'automation': 'Tự động hóa',
      'team-management': 'Quản lý nhóm',
      'analytics': 'Phân tích & Báo cáo',
      'integrations': 'Tích hợp'
    }
    return names[category as keyof typeof names] || category
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài viết nổi bật</h2>
          {(() => {
            const featured = articles.find(article => article.featured)
            if (!featured) return null
            
            return (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">🤖</div>
                        <p className="text-lg font-medium">CusAI in Action</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featured.category)}`}>
                        {getCategoryName(featured.category)}
                      </span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{featured.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {featured.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{featured.author}</p>
                          <p className="text-sm text-gray-500">{featured.date}</p>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                        Đọc thêm
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>

        {/* All Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Tất cả bài viết</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-sm">Blog Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {getCategoryName(article.category)}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">{article.author}</p>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Đọc →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Xem thêm bài viết
          </button>
        </div>
      </div>
    </section>
  )
}
