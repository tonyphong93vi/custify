# Hướng dẫn Setup Vercel KV cho Demo Submissions

## Vấn đề
Khi deploy lên Vercel, bạn gặp lỗi `EROFS: read-only file system` vì Vercel sử dụng file system chỉ đọc. Không thể ghi file trực tiếp vào file system trên Vercel.

## Giải pháp: Sử dụng Vercel KV (Redis)

Vercel KV là một dịch vụ Redis được quản lý bởi Vercel, hoàn hảo cho việc lưu trữ dữ liệu trong môi trường serverless.

## Bước 1: Tạo Vercel KV Database

1. Đăng nhập vào [Vercel Dashboard](https://vercel.com/dashboard)
2. Chọn project của bạn
3. Vào tab **Storage**
4. Click **Create Database**
5. Chọn **KV** (Key-Value)
6. Đặt tên database (ví dụ: `custify-demo-submissions`)
7. Chọn region gần nhất (ví dụ: `sin1` cho Singapore)
8. Click **Create**

## Bước 2: Lấy Environment Variables

Sau khi tạo database, Vercel sẽ cung cấp các environment variables:

1. Trong Vercel Dashboard, vào **Storage** > chọn database vừa tạo
2. Vào tab **Settings**
3. Copy các giá trị sau:
   - `KV_URL`
   - `KV_REST_API_URL` 
   - `KV_REST_API_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN`

## Bước 3: Cấu hình Environment Variables

### Trên Vercel (Production):
1. Vào project settings trong Vercel Dashboard
2. Vào tab **Environment Variables**
3. Thêm các biến sau:
   ```
   KV_URL=redis://...
   KV_REST_API_URL=https://...
   KV_REST_API_TOKEN=...
   KV_REST_API_READ_ONLY_TOKEN=...
   ```

### Local Development:
1. Copy file `env.example` thành `.env.local`
2. Thêm các biến KV vào file `.env.local`:
   ```
   KV_URL=redis://...
   KV_REST_API_URL=https://...
   KV_REST_API_TOKEN=...
   KV_REST_API_READ_ONLY_TOKEN=...
   ```

## Bước 4: Deploy lại

1. Commit và push code lên GitHub
2. Vercel sẽ tự động deploy
3. Kiểm tra logs để đảm bảo không có lỗi

## Bước 5: Test

1. Truy cập website và submit demo form
2. Vào admin panel để xem submissions
3. Kiểm tra Vercel KV dashboard để xem dữ liệu

## Lưu ý quan trọng

- **Miễn phí**: Vercel KV có plan miễn phí với 256MB storage và 30,000 requests/tháng
- **Bảo mật**: Dữ liệu được mã hóa và chỉ có thể truy cập qua API keys
- **Hiệu suất**: Redis rất nhanh, phù hợp cho real-time applications
- **Backup**: Vercel tự động backup dữ liệu

## Troubleshooting

### Lỗi "KV not configured"
- Kiểm tra environment variables đã được set chưa
- Đảm bảo tên biến chính xác (KV_URL, KV_REST_API_URL, etc.)

### Lỗi "Unauthorized"
- Kiểm tra KV_REST_API_TOKEN có đúng không
- Đảm bảo token có quyền write (không phải read-only)

### Không thấy dữ liệu
- Kiểm tra Vercel KV dashboard
- Xem logs trong Vercel để debug

## Alternative Solutions

Nếu không muốn dùng Vercel KV, có thể dùng:

1. **MongoDB Atlas** (miễn phí 512MB)
2. **Supabase** (miễn phí 500MB)
3. **Firebase Firestore** (miễn phí 1GB)
4. **PlanetScale** (MySQL, miễn phí 1GB)

Nhưng Vercel KV là lựa chọn tốt nhất vì tích hợp sẵn với Vercel.
