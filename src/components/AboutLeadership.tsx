'use client'

import { Linkedin } from 'lucide-react'

export default function AboutLeadership() {
  const teamMembers = [
    {
      name: "Nguyễn Văn A",
      position: "Đồng sáng lập & CEO",
      linkedin: "#",
      avatar: "/api/placeholder/200/200"
    },
    {
      name: "Trần Thị B",
      position: "Đồng sáng lập & CTO", 
      linkedin: "#",
      avatar: "/api/placeholder/200/200"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Đội ngũ lãnh đạo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Đội ngũ của chúng tôi được tạo thành từ những người giải quyết vấn đề và đổi mới đầy nhiệt huyết, 
            cam kết tạo ra các giải pháp vừa đơn giản vừa hiệu quả. Chúng tôi coi khách hàng là đối tác 
            và tự hào được làm việc cùng nhau để mang lại giá trị thực sự và tác động có ý nghĩa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {member.position}
                </p>
                <a 
                  href={member.linkedin}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
