import mongoose, { Document, Model, Schema } from "mongoose";

// Define the TypeScript interface for the resource document
export interface IResource extends Document {
  title: string;
  type: string;
  email: string;
  tags: string[];
  description: string;
  resourceLink: string;
  resourcePaid: boolean;
}

// Define the Mongoose schema
const resourceSchema: Schema<IResource> = new Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    email: { type: String, required: true },
    tags: { type: [String], required: true },
    description: { type: String, required: true },
    resourceLink: { type: String, required: true },
    resourcePaid: { type: Boolean, required: true },
  },
  { timestamps: true }
);

// Ensure the model is only defined once
const Resource: Model<IResource> =
  mongoose.models.Resource || mongoose.model<IResource>("Resource", resourceSchema);

export default Resource;
