'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AdminProtected from '@/components/AdminProtected'
import { Users, FileText, BarChart3, Settings } from 'lucide-react'

function AdminDashboardContent() {
  const router = useRouter()

  const stats = [
    {
      title: 'Demo Submissions',
      value: '0', // This would be fetched from API
      icon: FileText,
      color: 'blue',
      description: 'Tổng số đăng ký demo'
    },
    {
      title: 'Active Users',
      value: '0',
      icon: Users,
      color: 'green',
      description: 'Người dùng hoạt động'
    },
    {
      title: 'Conversion Rate',
      value: '0%',
      icon: BarChart3,
      color: 'purple',
      description: 'Tỷ lệ chuyển đổi'
    }
  ]

  const quickActions = [
    {
      title: 'Demo Submissions',
      description: 'Xem và quản lý các đăng ký demo',
      icon: FileText,
      href: '/admin/demo-submissions',
      color: 'blue'
    },
    {
      title: 'Settings',
      description: 'Cài đặt hệ thống',
      icon: Settings,
      href: '/admin/settings',
      color: 'gray'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      gray: 'bg-gray-100 text-gray-600'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Quản lý và theo dõi hoạt động của website Custify
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          {quickActions.map((action, index) => (
            <div 
              key={index}
              onClick={() => router.push(action.href)}
              className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${getColorClasses(action.color)}`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {action.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600">
                {action.description}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Hoạt động gần đây
          </h3>
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              Chưa có hoạt động nào gần đây
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <AdminProtected>
      <AdminDashboardContent />
    </AdminProtected>
  )
}
