'use client'

interface BlogCardProps {
  title: string
  excerpt: string
  readMoreText: string
}

export default function BlogCard({ title, excerpt, readMoreText }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          {readMoreText}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  )
}
