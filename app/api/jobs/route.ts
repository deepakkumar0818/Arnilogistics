import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Job, { IJob } from '@/models/Job';

// GET all jobs with optional filtering
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    let query: any = {};

    // Filter by status
    if (status && status !== 'all') {
      query.status = status;
    }

    // Search filter
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { department: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
      ];
    }

    const jobs = await Job.find(query).sort({ postedDate: -1 }).lean();

    return NextResponse.json(
      {
        success: true,
        data: jobs,
        count: jobs.length,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch jobs',
      },
      { status: 500 }
    );
  }
}

// POST create new job
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      title,
      department,
      location,
      type,
      salaryRange,
      description,
      requirements,
      responsibilities,
      status,
    } = body;

    // Validate required fields
    if (!title || !department || !location || !type || !salaryRange || !description) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    const job = await Job.create({
      title,
      department,
      location,
      type,
      salaryRange,
      description,
      requirements: requirements || [],
      responsibilities: responsibilities || [],
      status: status || 'active',
      postedDate: new Date(),
      applications: 0,
    });

    return NextResponse.json(
      {
        success: true,
        data: job,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to create job',
      },
      { status: 500 }
    );
  }
}

