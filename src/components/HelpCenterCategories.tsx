import { Server, BookOpen, Code, GitBranch, FileText, MessageCircle, Library, HelpCircle } from 'lucide-react'

export default function HelpCenterCategories() {
  const categories = [
    {
      icon: Server,
      title: "Custify Tự lưu trữ",
      description: "Cách thiết lập và chạy phiên bản tự lưu trữ của Custify",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Tài liệu Sản phẩm",
      description: "Tính năng trên Custify, cách sử dụng Custify",
      color: "green"
    },
    {
      icon: Code,
      title: "Tham chiếu API",
      description: "Tìm chi tiết của tất cả các tài nguyên REST API",
      color: "purple"
    },
    {
      icon: GitBranch,
      title: "Hướng dẫn Đóng góp",
      description: "Học cách thiết lập Custify trên máy cục bộ và đóng góp",
      color: "orange"
    },
    {
      icon: FileText,
      title: "Sổ tay",
      description: "Hướng dẫn về cách chúng tôi vận hành Custify như một tổ chức, cách chúng tôi làm việc, v.v.",
      color: "yellow"
    },
    {
      icon: MessageCircle,
      title: "Đặt câu hỏi",
      description: "Bạn có câu hỏi? Liên hệ với nhóm Custify để được hỗ trợ",
      color: "pink"
    },
    {
      icon: Library,
      title: "Thư viện Phản hồi Có sẵn Mới",
      description: "Bộ sưu tập các phản hồi có sẵn được tuyển chọn mà bạn có thể sử dụng trong giao tiếp với khách hàng.",
      color: "indigo"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      yellow: "bg-yellow-100 text-yellow-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(category.color)}`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Tìm hiểu thêm
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
