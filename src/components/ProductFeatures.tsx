import { MessageCircle, Inbox, Users, Bot, Zap, Smartphone, Plug, FileText, BookOpen } from 'lucide-react'

export default function ProductFeatures() {
  const features = [
    {
      icon: MessageCircle,
      title: "Website Live Chat",
      description: "Live chat đơn giản và thanh lịch cho website của bạn",
      color: "blue"
    },
    {
      icon: Inbox,
      title: "Hộp thư đa kênh",
      description: "Kết nối mọi kênh và tương tác với khách hàng từ một nơi",
      color: "green"
    },
    {
      icon: Users,
      title: "Cộng tác nhóm",
      description: "Cộng tác và quản lý cuộc trò chuyện bằng hộp thư chung",
      color: "purple"
    },
    {
      icon: Bot,
      title: "Chatbot",
      description: "Dễ dàng tích hợp với các nền tảng chatbot như Rasa hoặc Dialogflow để giảm tải cho nhân viên",
      color: "orange"
    },
    {
      icon: Zap,
      title: "Tự động hóa",
      description: "Tránh các tác vụ lặp lại bằng cách tự động hóa quy trình làm việc",
      color: "yellow"
    },
    {
      icon: Smartphone,
      title: "Ứng dụng di động",
      description: "Không bỏ lỡ khách hàng mới, tải ứng dụng di động và trò chuyện dễ dàng",
      color: "pink"
    },
    {
      icon: Plug,
      title: "Tích hợp",
      description: "Tăng cường quy trình làm việc với các tích hợp",
      color: "indigo"
    },
    {
      icon: FileText,
      title: "Biểu mẫu trước chat",
      description: "Thêm biểu mẫu chat có thể tùy chỉnh trước khi người dùng bắt đầu chat",
      color: "teal"
    },
    {
      icon: BookOpen,
      title: "Trung tâm trợ giúp",
      description: "Xây dựng cơ sở tri thức cho nhân viên và khách hàng hạnh phúc hơn",
      color: "red"
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
      indigo: "bg-indigo-100 text-indigo-600",
      teal: "bg-teal-100 text-teal-600",
      red: "bg-red-100 text-red-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sản phẩm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Các tính năng cốt lõi giúp bạn cung cấp hỗ trợ khách hàng tốt nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(feature.color)}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
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
