'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import DemoModal from './DemoModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/custify.jpg" 
                alt="Custify" 
                width={32}
                height={32}
                className="rounded-lg mr-2"
              />
              <span className="text-2xl font-bold text-gray-900">
                Custify
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Trang chủ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              Giới thiệu
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
              Blog
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Liên hệ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Đăng nhập
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Đặt lịch Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Trang chủ
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Giới thiệu
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Blog
              </Link>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Liên hệ
              </a>
              <div className="px-3 py-2 space-y-2">
                <button className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium">
                  Đăng nhập
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Đặt lịch Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  )
}
