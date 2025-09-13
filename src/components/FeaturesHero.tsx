export default function FeaturesHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tính năng mạnh mẽ cho doanh nghiệp của bạn
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Khám phá tất cả các tính năng mà Custify cung cấp để giúp bạn cung cấp 
            hỗ trợ khách hàng xuất sắc và tăng trưởng doanh nghiệp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Bắt đầu dùng thử miễn phí
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Xem demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
