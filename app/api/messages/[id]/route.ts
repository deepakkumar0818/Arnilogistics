import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import mongoose from 'mongoose';

// GET - Fetch single message by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid message ID',
        },
        { status: 400 }
      );
    }

    const message = await Message.findById(id).lean();

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: message,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch message error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch message',
      },
      { status: 500 }
    );
  }
}

// PUT - Update message (status, priority, etc.)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid message ID',
        },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { status, priority, readAt, repliedAt } = body;

    // Build update object
    const updateData: any = {};

    if (status) {
      if (!['new', 'read', 'replied', 'archived'].includes(status)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Invalid status value. Must be: new, read, replied, or archived',
          },
          { status: 400 }
        );
      }
      updateData.status = status;

      // Auto-set timestamps based on status
      if (status === 'read' && !readAt) {
        updateData.readAt = new Date();
      }
      if (status === 'replied' && !repliedAt) {
        updateData.repliedAt = new Date();
      }
    }

    if (priority) {
      if (!['low', 'medium', 'high'].includes(priority)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Invalid priority value. Must be: low, medium, or high',
          },
          { status: 400 }
        );
      }
      updateData.priority = priority;
    }

    if (readAt !== undefined) {
      updateData.readAt = readAt ? new Date(readAt) : null;
    }

    if (repliedAt !== undefined) {
      updateData.repliedAt = repliedAt ? new Date(repliedAt) : null;
    }

    const message = await Message.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).lean();

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: message,
        message: 'Message updated successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Update message error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to update message',
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete message
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid message ID',
        },
        { status: 400 }
      );
    }

    const message = await Message.findByIdAndDelete(id).lean();

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message deleted successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Delete message error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to delete message',
      },
      { status: 500 }
    );
  }
}

