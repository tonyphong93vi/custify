'use client'

import { Shield, Users, Lock, Server, CheckCircle } from 'lucide-react'

export default function SecuritySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bảo mật, mở rộng, mã nguồn mở
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Tự hào là mã nguồn mở - lưu trữ trên hạ tầng riêng và sở hữu dữ liệu của bạn
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mã nguồn mở, tự lưu trữ. Lưu trữ Custify trên máy chủ riêng của bạn. Sở hữu dữ liệu khách hàng 
            và tuân thủ đầy đủ các tiêu chuẩn quy định.
          </p>
        </div>


        {/* Security Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nhân sự bảo mật</h3>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Server className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phát triển bảo mật</h3>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Kiểm thử bảo mật</h3>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bảo mật đám mây</h3>
          </div>
        </div>

        {/* SOC 2 Compliance */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Tuân thủ SOC 2 Type II</h3>
                    <p className="text-gray-600">Bảo mật cấp doanh nghiệp</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Với các giao thức nghiêm ngặt được áp dụng, bạn có thể tin tưởng chúng tôi bảo vệ thông tin của bạn một cách an toàn.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Đọc thêm →
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Bảo mật hàng đầu</h4>
                  <p className="text-gray-600 text-sm">Dữ liệu của bạn được bảo vệ với các tiêu chuẩn bảo mật hàng đầu ngành</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

