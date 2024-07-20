import mongoose, { Document, Model, Schema } from "mongoose";

// Define the TypeScript interface for the resource document
export interface IResource extends Document {
  resourceTitle: string;
  resourceType: string;
  email: string;
  resourceTags: string[];
  resourceDescription: string;
  resourceLink: string;
  resourcePaid: boolean;
}

// Define the Mongoose schema
const resourceSchema: Schema<IResource> = new Schema(
  {
    resourceTitle: { type: String, required: true },
    resourceType: { type: String, required: true },
    email: { type: String, required: true },
    resourceTags: { type: [String], required: true },
    resourceDescription: { type: String, required: true },
    resourceLink: { type: String, required: true },
    resourcePaid: { type: Boolean, required: true },
  },
  { timestamps: true }
);

// Ensure the model is only defined once
const Resource: Model<IResource> =
  mongoose.models.Resource || mongoose.model<IResource>("Resource", resourceSchema);

export default Resource;
