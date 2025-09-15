'use client'

import BlogCard from './BlogCard'

export default function BlogPosts() {
  const blogPosts = [
    {
      title: "Cách phân tích câu hỏi mở trong khảo sát ở quy mô lớn",
      excerpt: "Chuyển đổi phản hồi mở trong khảo sát thành hiểu biết định lượng có thể hành động trong vài phút với mã hóa được hỗ trợ bởi AI. Xem cách bắt đầu ngay bây giờ.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Phân tích văn bản cho nghiên cứu thị trường: Chuyển phản hồi thành chiến lược",
      excerpt: "Mở khóa những hiểu biết ẩn từ khảo sát, NPS và đánh giá. Tìm hiểu cách phân tích văn bản cho nghiên cứu thị trường chuyển phản hồi thô thành quyết định thông minh dựa trên dữ liệu.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Lắng nghe xã hội: Chuyển cuộc trò chuyện trực tuyến thành tăng trưởng kinh doanh",
      excerpt: "Tìm hiểu cách sử dụng phân tích tình cảm nhân viên để hiểu tinh thần nhóm, cải thiện tỷ lệ giữ chân và hành động dựa trên phản hồi.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Phân tích tình cảm nhân viên: Chìa khóa cho nơi làm việc hạnh phúc hơn",
      excerpt: "Tìm hiểu cách sử dụng phân tích tình cảm nhân viên để hiểu tinh thần nhóm, cải thiện tỷ lệ giữ chân và hành động dựa trên phản hồi.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Phân tích NPS 101: Đạt hiểu biết từ phản hồi khách hàng",
      excerpt: "Tìm hiểu cách phân tích dữ liệu NPS bằng phân đoạn, phân tích văn bản và các chiến lược thực tế. Chuyển phản hồi khách hàng thành tăng trưởng kinh doanh.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "7 phần mềm phân tích khảo sát tốt nhất cho quyết định dựa trên dữ liệu năm 2025",
      excerpt: "Tìm kiếm phần mềm phân tích khảo sát tốt nhất năm 2025? Khám phá 7 công cụ được đánh giá cao nhất—với hiểu biết AI và trực quan hóa mạnh mẽ để giúp bạn chuyển dữ liệu khảo sát thành quyết định thông minh hơn.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Phân tích văn bản mở: Khám phá vàng ẩn trong phản hồi khách hàng",
      excerpt: "Tìm hiểu cách phân tích văn bản mở của câu chuyện và nghiên cứu trường hợp khách hàng có thể giúp định nghĩa lại đề xuất giá trị của bạn và làm cho thông điệp của bạn trở nên chân thực và hiệu quả hơn.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "8 loại nghiên cứu thị trường (& cách sử dụng chúng)",
      excerpt: "Tìm hiểu 8 loại nghiên cứu thị trường cần thiết và cách sử dụng chúng—từ phân tích khách hàng và đối thủ cạnh tranh đến thử nghiệm sản phẩm và nghiên cứu thương hiệu.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Câu hỏi mở vs. câu hỏi đóng trong nghiên cứu thị trường",
      excerpt: "Tìm hiểu sự khác biệt chính giữa câu hỏi mở và câu hỏi đóng trong nghiên cứu thị trường, khi nào sử dụng từng loại và cách kết hợp chúng dẫn đến hiểu biết khách hàng sâu sắc hơn và quyết định kinh doanh thông minh hơn.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Cách viết câu hỏi mở hay (với ví dụ)",
      excerpt: "Tìm hiểu cách tạo ra các câu hỏi mở hiệu quả cho nghiên cứu thị trường, với hơn 48 ví dụ câu hỏi mở và những sai lầm phổ biến cần tránh.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Dịch vụ và phần mềm mã hóa nghiên cứu thị trường hàng đầu năm 2025",
      excerpt: "Danh sách các dịch vụ mã hóa nghiên cứu thị trường hàng đầu, cũng như một giải pháp thay thế hiệu quả hơn: phần mềm mã hóa verbatim được hỗ trợ bởi AI.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Dữ liệu định tính vs định lượng: Sự khác biệt chính & khi nào sử dụng từng loại",
      excerpt: "Khám phá sự khác biệt chính giữa dữ liệu định tính và định lượng, khi nào sử dụng từng loại và cách kết hợp cả hai có thể thúc đẩy quyết định thông minh hơn.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Cách thành thạo phân tích tiếng nói khách hàng & xây dựng chương trình VoC",
      excerpt: "Mở khóa hiểu biết khách hàng và tăng cường tỷ lệ giữ chân với phân tích tiếng nói khách hàng. Khám phá sáu phương pháp đã được chứng minh để thu thập và phân tích phản hồi khách hàng, cải thiện trải nghiệm người dùng và xây dựng chương trình VoC dựa trên dữ liệu.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "9 công cụ phân tích tình cảm tốt nhất năm 2025",
      excerpt: "Khám phá 8 công cụ phân tích tình cảm tốt nhất năm 2025 để theo dõi cảm xúc khách hàng, nâng cao danh tiếng thương hiệu và đạt được hiểu biết có thể hành động.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Cách mã hóa câu hỏi mở trong Excel",
      excerpt: "Tìm hiểu cách mã hóa câu hỏi mở trong Excel với hướng dẫn từng bước này. Khám phá các phương pháp mã hóa thủ công, được hỗ trợ bởi AI và mã hóa verbatim chuyên nghiệp.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Hướng dẫn từng bước để phân tích dữ liệu định tính",
      excerpt: "Tìm hiểu các bước, phương pháp, công cụ và thực tiễn tốt nhất để phân tích dữ liệu định tính và khám phá hiểu biết có thể hành động cho nghiên cứu hoặc kinh doanh của bạn.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Mã hóa khảo sát: Hướng dẫn hoàn chỉnh để mã hóa verbatim",
      excerpt: "Tìm hiểu tất cả về mã hóa khảo sát, từ kỹ thuật thủ công và tự động đến thực tiễn tốt nhất để phân tích dữ liệu khảo sát hiệu quả. Thành thạo phân tích verbatim khảo sát năm 2025.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Phân tích phản hồi khách hàng: Hướng dẫn từng bước",
      excerpt: "Khám phá cách phân tích phản hồi khách hàng có thể chuyển đổi doanh nghiệp của bạn. Tìm hiểu X bước để phân tích của bạn ngay hôm nay.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Cách phân tích đánh giá khách hàng để có hiểu biết thực sự hữu ích",
      excerpt: "Tìm hiểu cách phân tích đánh giá khách hàng với phần mềm phân tích đánh giá AI. Khám phá hiểu biết có thể hành động để cải thiện sản phẩm và tăng tỷ lệ chuyển đổi.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "13 công cụ và phần mềm phân tích văn bản tốt nhất năm 2025",
      excerpt: "Khám phá 12 công cụ và phần mềm phân tích văn bản tốt nhất cho năm 2025. Từ phân tích tình cảm đến trích xuất chủ đề, tìm hiểu các giải pháp tiên tiến để hợp lý hóa hiểu biết từ đánh giá khách hàng, dữ liệu khảo sát và nhiều hơn nữa.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Sử dụng ChatGPT cho phân tích văn bản (& thứ gì đó thậm chí tốt hơn)",
      excerpt: "Khám phá cách phân tích văn bản ChatGPT có thể hợp lý hóa quy trình làm việc của bạn. Tìm hiểu điểm mạnh, hạn chế và tại sao Custify có thể là lựa chọn tốt hơn cho các chuyên gia.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "10 công cụ nghiên cứu thị trường AI tốt nhất để tăng cường doanh nghiệp",
      excerpt: "Khám phá 10 công cụ nghiên cứu thị trường AI tốt nhất để hợp lý hóa phân tích dữ liệu, khám phá xu hướng và thúc đẩy tăng trưởng kinh doanh.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Phân tích văn bản khảo sát: Hướng dẫn từng bước",
      excerpt: "Tìm hiểu cách phân tích phản hồi mở trong khảo sát với hướng dẫn từng bước về phân tích văn bản khảo sát. Công cụ, kỹ thuật, ví dụ & nhiều hơn nữa.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Trao quyền cho đối tác: Thu thập phản hồi khách hàng trong khi giữ đối tác hạnh phúc và tham gia",
      excerpt: "Tìm hiểu cách sử dụng mạng lưới đối tác của bạn để thu thập phản hồi khách hàng và giữ đối tác tham gia. Khám phá mẹo cho khảo sát, giá trị của câu hỏi mở và cách Custify hợp lý hóa phân tích phản hồi thành hiểu biết có thể hành động.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Phân tích tình cảm là gì? Hướng dẫn đơn giản (nhưng hoàn chỉnh)",
      excerpt: "Tìm hiểu về phân tích tình cảm, một công cụ mạnh mẽ để hiểu cảm xúc khách hàng trong dữ liệu văn bản. Khám phá cách hoạt động, ứng dụng và ví dụ thực tế.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Cách phân tích phản hồi mở trong khảo sát",
      excerpt: "Tìm hiểu chính xác cách phân tích phản hồi mở trong khảo sát một cách nhanh chóng và chính xác bằng phần mềm phân tích khảo sát được hỗ trợ bởi AI của Custify.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Mã hóa câu hỏi mở: Hướng dẫn cho nhà nghiên cứu thị trường",
      excerpt: "Tìm hiểu thực tiễn tốt nhất để mã hóa câu hỏi mở trong nghiên cứu định tính. Khám phá công cụ & kỹ thuật để phân tích dữ liệu nhằm đạt được hiểu biết có thể hành động.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Phần mềm phân tích verbatim: Dễ dàng phân tích mở cuối khảo sát",
      excerpt: "Phần mềm phân tích verbatim có thể mở khóa hiểu biết sâu hơn trong nghiên cứu thị trường. Tìm hiểu kỹ thuật, vượt qua thách thức và xem cách AI Custify đơn giản hóa quá trình.",
      readMoreText: "Đọc bài viết đầy đủ"
    },
    {
      title: "Mã hóa verbatim cho phân tích khảo sát mở",
      excerpt: "Mã hóa verbatim là một quy trình cần thiết để phân tích dữ liệu định tính trong nghiên cứu thị trường, chẳng hạn như phản hồi mở trong khảo sát và phản hồi văn bản khách hàng. Hãy nghĩ về nó như thế này — khảo sát và đánh giá khách hàng của bạn chứa kho báu ẩn về cách cải thiện doanh nghiệp của bạn, và quá trình mã hóa verbatim giống như vẽ bản đồ kho báu.",
      readMoreText: "Đọc bài viết đầy đủ"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              readMoreText={post.readMoreText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
