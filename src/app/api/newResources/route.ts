import dbConnect from "@/lib/database";
import { NextResponse, NextRequest } from "next/server";
import resourceModel from "@/app/models/resource";

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const data = await request.json();
    const resource = await resourceModel.create(data);
    return NextResponse.json({ resource }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error fetching resources",
      error: (error as Error).message,
    });
  }
}
