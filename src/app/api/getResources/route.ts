import dbConnect from "@/lib/database";
import { NextResponse, NextRequest } from "next/server";
import resourceModel from "@/app/models/resource";
import APIFeatures from "@/lib/apiFeatures";

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const queryString = Object.fromEntries(
      request.nextUrl.searchParams.entries()
    );
    const features = new APIFeatures(resourceModel.find(), queryString)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const resources = await features.query;

    return NextResponse.json({ success: true, data: resources });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error fetching resources",
      error: (error as Error).message,
    });
  }
}
