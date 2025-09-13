import { MessageSquare, Facebook, Instagram, Send, Mail, Slack } from 'lucide-react'

export default function IntegrationFeatures() {
  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quản lý tương tác kinh doanh WhatsApp từ Custify",
      color: "green"
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Giữ kết nối với khách hàng trên Facebook",
      color: "blue"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Giữ kết nối với khách hàng trên Instagram",
      color: "pink"
    },
    {
      icon: Send,
      title: "Telegram",
      description: "Quản lý tương tác khách hàng Telegram từ Custify",
      color: "blue"
    },
    {
      icon: MessageSquare,
      title: "Line",
      description: "Quản lý tương tác khách hàng Line từ Custify",
      color: "green"
    },
    {
      icon: Send,
      title: "SMS",
      description: "Quản lý tương tác khách hàng SMS từ Custify",
      color: "orange"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Quản lý tương tác khách hàng email từ Custify",
      color: "gray"
    },
    {
      icon: Slack,
      title: "Slack",
      description: "Trả lời truy vấn khách hàng từ Slack",
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      pink: "bg-pink-100 text-pink-600",
      orange: "bg-orange-100 text-orange-600",
      gray: "bg-gray-100 text-gray-600",
      purple: "bg-purple-100 text-purple-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tích hợp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kết nối với các nền tảng yêu thích của bạn để tối ưu hóa quy trình làm việc
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
