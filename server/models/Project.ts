import mongoose, { Schema, Document } from 'mongoose';

export interface ProjectDocument extends Document {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
}

const ProjectSchema: Schema = new Schema<ProjectDocument>({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  tags: { type: [String], default: [] },
  link: { type: String }
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model<ProjectDocument>('Project', ProjectSchema);
