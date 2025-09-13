import { Eye, MessageSquare, Users, Tag, Star, Inbox, BarChart3, TrendingUp } from 'lucide-react'

export default function AnalyseFeatures() {
  const features = [
    {
      icon: Eye,
      title: "Xem trực tiếp",
      description: "Nhận thông tin chi tiết theo thời gian thực về hoạt động hỗ trợ của bạn",
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Báo cáo cuộc trò chuyện",
      description: "Nhận thông tin chi tiết về cuộc trò chuyện của bạn",
      color: "green"
    },
    {
      icon: Users,
      title: "Báo cáo nhân viên",
      description: "Theo dõi hiệu suất nhân viên của bạn với báo cáo tự động cập nhật",
      color: "purple"
    },
    {
      icon: Tag,
      title: "Báo cáo nhãn",
      description: "Xem nhãn nào có nhiều cuộc trò chuyện nhất và mất bao lâu để giải quyết",
      color: "orange"
    },
    {
      icon: Star,
      title: "Báo cáo CSAT",
      description: "Nhận báo cáo về cách khách hàng phản hồi cuộc trò chuyện của bạn",
      color: "yellow"
    },
    {
      icon: Inbox,
      title: "Báo cáo hộp thư",
      description: "Nhận thông tin chi tiết về hộp thư của bạn",
      color: "pink"
    },
    {
      icon: BarChart3,
      title: "Báo cáo nhóm",
      description: "Phân tích hiệu suất của từng nhóm",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Phân tích
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thông tin chi tiết và báo cáo để tối ưu hóa hiệu suất hỗ trợ khách hàng
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
