'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/custify.jpg"
                alt="Custify Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">Custify</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Tính năng
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Giá cả
            </a>
            <a href="/help-center" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Trung tâm trợ giúp
            </a>
            <a href="/resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Tài nguyên
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Đăng nhập
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Đăng ký
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="/features" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Tính năng
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Giá cả
              </a>
              <a href="/help-center" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Trung tâm trợ giúp
              </a>
              <a href="/resources" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Tài nguyên
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
                  Đăng nhập
                </button>
                <button className="bg-blue-600 text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors w-full mt-2">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
