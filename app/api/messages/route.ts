import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';

// POST - Create new message from contact form
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, phone, company, subject, message, service, priority } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: name, email, subject, and message are required',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        { status: 400 }
      );
    }

    // Create new message
    const newMessage = await Message.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      company: company?.trim() || '',
      subject: subject.trim(),
      message: message.trim(),
      service: service?.trim() || '',
      status: 'new',
      priority: priority || 'medium',
      submittedAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        data: newMessage,
        message: 'Message submitted successfully',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Message submission error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        {
          success: false,
          error: errors.join(', '),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit message',
      },
      { status: 500 }
    );
  }
}

// GET - Fetch all messages (for admin)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    // Build query
    let query: any = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (priority && priority !== 'all') {
      query.priority = priority;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
      ];
    }

    // Get total count for pagination
    const total = await Message.countDocuments(query);

    // Fetch messages with pagination
    const messages = await Message.find(query)
      .sort({ submittedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    return NextResponse.json(
      {
        success: true,
        data: messages,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch messages error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch messages',
      },
      { status: 500 }
    );
  }
}

