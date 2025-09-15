# Admin Security Guide

## 🔐 Hệ thống bảo mật Admin

Website Custify đã được bảo mật với hệ thống authentication và authorization đầy đủ.

### 📍 **Các trang được bảo vệ**

- `/admin` - Admin Dashboard
- `/admin/demo-submissions` - Xem demo submissions
- `/admin/login` - Trang đăng nhập admin

### 🔑 **Thông tin đăng nhập mặc định**

```
Username: admin
Password: custify2025
```

**⚠️ QUAN TRỌNG**: Thay đổi mật khẩu mặc định trong production!

### 🛡️ **Cách thức bảo mật**

#### 1. **Authentication (Xác thực)**
- JWT Token-based authentication
- Session management với localStorage
- Auto-logout khi token hết hạn (24h)
- Token verification trên server

#### 2. **Authorization (Phân quyền)**
- Role-based access control (admin role)
- Protected routes với middleware
- API endpoint protection
- Automatic redirect to login

#### 3. **Security Features**
- Password visibility toggle
- Input validation
- Error handling
- CSRF protection (built-in Next.js)
- Secure token storage

### 🔧 **Cấu hình Environment Variables**

Tạo file `.env.local`:

```env
# Admin Credentials
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-secure-password

# JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-jwt-key-here

# Optional: Database
DATABASE_URL=postgresql://username:password@localhost:5432/custify
```

### 🚀 **Cách sử dụng**

#### **Đăng nhập Admin:**
1. Truy cập: `http://localhost:3000/admin/login`
2. Nhập username và password
3. Click "Đăng nhập"
4. Tự động redirect đến dashboard

#### **Truy cập Demo Submissions:**
1. Đăng nhập admin
2. Truy cập: `http://localhost:3000/admin/demo-submissions`
3. Xem, export, và quản lý submissions

#### **Đăng xuất:**
- Click "Đăng xuất" ở góc phải header
- Hoặc xóa token trong localStorage

### 🔒 **API Security**

#### **Protected Endpoints:**
- `GET /api/demo` - Chỉ admin có thể xem submissions
- `POST /api/demo` - Public (để user submit demo)

#### **Authentication Header:**
```javascript
headers: {
  'Authorization': `Bearer ${token}`
}
```

### 📊 **Monitoring & Logging**

- Admin login attempts được log
- Failed authentication attempts
- Token verification logs
- API access logs

### 🛠️ **Production Security Checklist**

- [ ] Thay đổi mật khẩu mặc định
- [ ] Sử dụng JWT secret mạnh
- [ ] Cấu hình HTTPS
- [ ] Rate limiting cho login
- [ ] Backup dữ liệu thường xuyên
- [ ] Monitor failed login attempts
- [ ] Regular security updates

### 🔄 **Session Management**

- **Token Expiry**: 24 giờ
- **Auto-refresh**: Không (cần login lại)
- **Storage**: localStorage (client-side)
- **Validation**: Server-side verification

### 🚨 **Security Best Practices**

1. **Strong Passwords**: Sử dụng mật khẩu mạnh
2. **Regular Updates**: Cập nhật dependencies
3. **HTTPS Only**: Luôn sử dụng HTTPS trong production
4. **Backup**: Backup dữ liệu thường xuyên
5. **Monitoring**: Theo dõi logs và access patterns

### 🆘 **Troubleshooting**

#### **Không thể đăng nhập:**
- Kiểm tra username/password
- Check console logs
- Verify JWT secret
- Clear localStorage

#### **Token hết hạn:**
- Tự động redirect về login
- Login lại để có token mới

#### **API 401 Unauthorized:**
- Check Authorization header
- Verify token validity
- Login lại nếu cần

### 📞 **Support**

Nếu gặp vấn đề về bảo mật:
1. Check console logs
2. Verify environment variables
3. Test với curl/Postman
4. Review authentication flow
