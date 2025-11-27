import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

// POST create new contact submission
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, phone, company, subject, message, service } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      email,
      phone: phone || '',
      company: company || '',
      subject,
      message,
      service: service || '',
      status: 'new',
      submittedAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        data: contact,
        message: 'Contact form submitted successfully',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit contact form',
      },
      { status: 500 }
    );
  }
}

// GET all contacts (for admin)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    let query: any = {};

    if (status && status !== 'all') {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
      ];
    }

    const contacts = await Contact.find(query)
      .sort({ submittedAt: -1 })
      .lean();

    return NextResponse.json(
      {
        success: true,
        data: contacts,
        count: contacts.length,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch contacts',
      },
      { status: 500 }
    );
  }
}

