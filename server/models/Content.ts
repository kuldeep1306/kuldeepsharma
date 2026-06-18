import mongoose, { Schema, Document } from 'mongoose';

export interface ContentDocument extends Document {
  title: string;
  description: string;
  category: string;
  publishedAt: Date;
}

const ContentSchema: Schema = new Schema<ContentDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.models.Content || mongoose.model<ContentDocument>('Content', ContentSchema);
