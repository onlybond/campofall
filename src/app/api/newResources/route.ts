import dbConnect from "@/lib/database";
import { NextResponse, NextRequest } from "next/server";
import resourceModel from "@/app/models/resource";

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const {
      title,
      type,
      email,
      tags,
      description,
      resourceLink,
      resourcePaid,
    } = await request.json();

    const newResource = new resourceModel({
      title,
      type,
      email,
      tags,
      description,
      resourceLink,
      resourcePaid,
    });

    console.log("New resource: ", newResource);

    return NextResponse.json({
      success: true,
      message: "Resource created successfully",
      data:newResource
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error fetching resources",
      error: (error as Error).message,
    });
  }
}
