import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';
import Job from '@/models/Job';

// Application Schema
const ApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Job',
  },
  jobTitle: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  resume: {
    filename: String,
    originalName: String,
    size: Number,
    mimetype: String,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'shortlisted', 'rejected'],
    default: 'pending',
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);

// POST create new application
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const formData = await request.formData();
    
    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!jobId || !fullName || !email || !phone || !coverLetter) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    // Validate jobId
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid job ID',
        },
        { status: 400 }
      );
    }

    // Handle resume file
    let resumeData = null;
    if (resumeFile && resumeFile.size > 0) {
      // Convert file to buffer
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // In a production environment, you would upload this to cloud storage (S3, etc.)
      // For now, we'll store file metadata
      resumeData = {
        filename: resumeFile.name,
        originalName: resumeFile.name,
        size: resumeFile.size,
        mimetype: resumeFile.type,
        // In production, store the file URL or path here
        // For now, we'll just store metadata
      };

      // Optional: Save file to public/uploads (not recommended for production)
      // You should use cloud storage instead
    }

    const application = await Application.create({
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      coverLetter,
      resume: resumeData,
      status: 'pending',
    });

    // Increment application count for the job
    await Job.findByIdAndUpdate(jobId, {
      $inc: { applications: 1 }
    });

    return NextResponse.json(
      {
        success: true,
        data: application,
        message: 'Application submitted successfully',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit application',
      },
      { status: 500 }
    );
  }
}

// GET all applications (for admin)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const jobId = searchParams.get('jobId');
    const status = searchParams.get('status');

    let query: any = {};

    if (jobId) {
      query.jobId = jobId;
    }

    if (status) {
      query.status = status;
    }

    const applications = await Application.find(query)
      .sort({ submittedAt: -1 })
      .lean();

    return NextResponse.json(
      {
        success: true,
        data: applications,
        count: applications.length,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch applications',
      },
      { status: 500 }
    );
  }
}

