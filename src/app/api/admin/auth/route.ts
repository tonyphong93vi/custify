import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

// In production, these should be environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'custify2025'
const JWT_SECRET = process.env.JWT_SECRET || 'custify-admin-secret-key-2025'

interface LoginRequest {
  username: string
  password: string
}

interface JwtPayload {
  username: string
  role: string
  iat: number
}

// POST - Admin login
export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json()
    const { username, password } = body

    // Validation
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Check credentials
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password' },
        { status: 401 }
      )
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        username: ADMIN_USERNAME,
        role: 'admin',
        iat: Math.floor(Date.now() / 1000)
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Log successful login
    console.log('Admin login successful:', {
      username: ADMIN_USERNAME,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    })

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token: token,
      expiresIn: '24h'
    })

  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET - Verify token
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'No token provided' },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' prefix

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
      
      return NextResponse.json({
        success: true,
        user: {
          username: decoded.username,
          role: decoded.role
        }
      })
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      )
    }

  } catch (error) {
    console.error('Token verification error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
