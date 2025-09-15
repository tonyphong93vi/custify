'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/custify.jpg" 
                alt="Custify" 
                width={32}
                height={32}
                className="rounded-lg mr-2"
              />
              <span className="text-2xl font-bold">Custify</span>
            </div>
            <p className="text-gray-400 mb-6">
              Phân tích phản hồi khách hàng trong vài phút, không phải vài ngày.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Tham gia bản tin của chúng tôi!</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Đăng ký
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Bằng cách gửi biểu mẫu này, bạn đồng ý với Chính sách Quyền riêng tư của chúng tôi và đồng ý nhận email tiếp thị thỉnh thoảng từ Custify. Bạn có thể hủy đăng ký bất cứ lúc nào.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Trang chủ</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Giới thiệu</Link></li>
              <li><a href="#market-research" className="text-gray-400 hover:text-white transition-colors">Nghiên cứu thị trường</a></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Custify Ltd. Tất cả quyền được bảo lưu 2025
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Điều khoản và Điều kiện
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Chính sách Quyền riêng tư
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Phụ lục Xử lý Dữ liệu
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
