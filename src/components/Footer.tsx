'use client'

import { Github, MessageCircle, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/custify.jpg"
                alt="Custify Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="ml-2 text-xl font-bold">Custify</span>
            </div>
            <p className="text-gray-400 mb-6">
              Nền tảng hỗ trợ khách hàng hiện đại
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tính năng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tích hợp</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ứng dụng di động</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nhật ký thay đổi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hướng dẫn người dùng</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Công ty</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Đội ngũ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sổ tay</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tài nguyên</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custify Tự lưu trữ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tài liệu sản phẩm</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tài liệu API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hướng dẫn đóng góp</a></li>
            </ul>
          </div>
        </div>


        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Custify Inc. All rights reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Bảo mật</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
