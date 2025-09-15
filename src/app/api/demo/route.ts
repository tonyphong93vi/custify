import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'custify-admin-secret-key-2025'

interface JwtPayload {
  username: string
  role: string
  iat: number
}

// Verify admin token
function verifyAdminToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
    return decoded
  } catch {
    return null
  }
}

interface DemoSubmission {
  id: string
  name: string
  phone: string
  timestamp: string
  ip?: string
  userAgent?: string
}

// File path for storing demo submissions
const DATA_FILE = path.join(process.cwd(), 'data', 'demo-submissions.json')

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Read existing submissions
function readSubmissions(): DemoSubmission[] {
  ensureDataDirectory()
  if (!fs.existsSync(DATA_FILE)) {
    return []
  }
  
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading submissions:', error)
    return []
  }
}

// Write submissions to file
function writeSubmissions(submissions: DemoSubmission[]) {
  ensureDataDirectory()
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2))
  } catch (error) {
    console.error('Error writing submissions:', error)
    throw error
  }
}

// GET - Retrieve all demo submissions (for admin purposes)
export async function GET(request: NextRequest) {
  try {
    // Check if user is admin
    const adminUser = verifyAdminToken(request)
    if (!adminUser || adminUser.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized access' },
        { status: 401 }
      )
    }

    const submissions = readSubmissions()
    return NextResponse.json({ 
      success: true, 
      data: submissions,
      count: submissions.length 
    })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve submissions' },
      { status: 500 }
    )
  }
}

// POST - Submit new demo request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone } = body

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    // Basic phone validation (Vietnamese format)
    const phoneRegex = /^(\+84|84|0)[1-9][0-9]{8,9}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Create new submission
    const submission: DemoSubmission = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      phone: phone.trim(),
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    }

    // Read existing submissions and add new one
    const submissions = readSubmissions()
    submissions.push(submission)

    // Write back to file
    writeSubmissions(submissions)

    // Log to console for immediate feedback
    console.log('New demo submission:', {
      id: submission.id,
      name: submission.name,
      phone: submission.phone,
      timestamp: submission.timestamp
    })

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully',
      data: {
        id: submission.id,
        name: submission.name,
        phone: submission.phone,
        timestamp: submission.timestamp
      }
    })

  } catch (error) {
    console.error('Error processing demo submission:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
