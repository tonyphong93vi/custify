# Demo Submissions Data Storage

## Tổng quan

Website Custify hiện tại có hệ thống lưu trữ thông tin demo submissions với các tính năng sau:

### 📁 **Nơi lưu trữ dữ liệu**

**File-based Storage**: `/data/demo-submissions.json`
- Tất cả thông tin demo được lưu trong file JSON
- File được tạo tự động khi có submission đầu tiên
- Đường dẫn: `project-root/data/demo-submissions.json`

### 🔧 **API Endpoints**

#### `POST /api/demo`
Gửi thông tin demo mới
```json
{
  "name": "Nguyễn Văn A",
  "phone": "0123456789"
}
```

**Response thành công:**
```json
{
  "success": true,
  "message": "Demo request submitted successfully",
  "data": {
    "id": "1234567890abc123",
    "name": "Nguyễn Văn A",
    "phone": "0123456789",
    "timestamp": "2025-01-13T10:30:00.000Z"
  }
}
```

#### `GET /api/demo`
Lấy tất cả demo submissions (cho admin)

### 📊 **Trang Admin**

**URL**: `/admin/demo-submissions`

**Tính năng:**
- Xem tất cả demo submissions
- Xuất dữ liệu ra file CSV
- Làm mới dữ liệu
- Hiện/ẩn chi tiết (IP, User Agent)
- Tìm kiếm và lọc

### 📋 **Cấu trúc dữ liệu**

```typescript
interface DemoSubmission {
  id: string              // Unique ID
  name: string            // Họ và tên
  phone: string           // Số điện thoại
  timestamp: string       // ISO timestamp
  ip?: string            // IP address
  userAgent?: string     // Browser info
}
```

### 🔒 **Validation**

- **Tên**: Bắt buộc, không được để trống
- **Số điện thoại**: 
  - Bắt buộc
  - Format: `(+84|84|0)[1-9][0-9]{8,9}`
  - Ví dụ: `0123456789`, `+84123456789`, `84123456789`

### 📈 **Monitoring**

- Tất cả submissions được log vào console
- Timestamp chính xác đến millisecond
- IP address và User Agent được thu thập tự động

### 🚀 **Cách sử dụng**

1. **Người dùng**: Click "Đặt lịch Demo" → Điền form → Submit
2. **Admin**: Truy cập `/admin/demo-submissions` để xem dữ liệu
3. **Developer**: Check console logs hoặc file `/data/demo-submissions.json`

### 🔄 **Nâng cấp trong tương lai**

Có thể nâng cấp lên:
- **Database**: PostgreSQL, MySQL, SQLite
- **External services**: Google Sheets, Airtable, Zapier
- **Email notifications**: Gửi email khi có submission mới
- **Analytics**: Tracking và phân tích dữ liệu

### 📝 **Ghi chú**

- Dữ liệu được lưu local trên server
- Backup thường xuyên file `/data/demo-submissions.json`
- Có thể migrate sang database khi cần scale
- API có error handling và validation đầy đủ
