import { Keyboard, Command, Layers, Copy, Users, Settings } from 'lucide-react'

export default function ProductivityFeatures() {
  const features = [
    {
      icon: Keyboard,
      title: "Phím tắt",
      description: "Làm chủ Custify với phím tắt",
      color: "blue"
    },
    {
      icon: Command,
      title: "Thanh lệnh",
      description: "Sử dụng thanh lệnh để thực hiện các hành động",
      color: "green"
    },
    {
      icon: Layers,
      title: "Hành động hàng loạt",
      description: "Cập nhật nhiều cuộc trò chuyện cùng một lúc",
      color: "purple"
    },
    {
      icon: Copy,
      title: "Phản hồi có sẵn",
      description: "Lưu các tin nhắn thường gửi dưới dạng mẫu",
      color: "orange"
    },
    {
      icon: Users,
      title: "Năng lực nhân viên",
      description: "Đặt giới hạn để tự động gán cuộc trò chuyện cho nhân viên",
      color: "yellow"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      yellow: "bg-yellow-100 text-yellow-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Năng suất
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Các công cụ giúp nhân viên của bạn làm việc hiệu quả hơn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-300">
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
