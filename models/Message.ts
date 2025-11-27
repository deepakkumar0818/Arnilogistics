import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  service?: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  priority?: 'low' | 'medium' | 'high';
  submittedAt: Date;
  readAt?: Date;
  repliedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const MessageSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    service: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    readAt: {
      type: Date,
    },
    repliedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
MessageSchema.index({ status: 1, submittedAt: -1 });
MessageSchema.index({ email: 1 });
MessageSchema.index({ createdAt: -1 });

// Prevent model recompilation during development
const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);

export default Message;

