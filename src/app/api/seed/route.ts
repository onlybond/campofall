import { NextResponse,NextRequest } from "next/server";
import dbConnect from "@/lib/database";
import ResourceModel from "@/app/models/resource";


// needs to be deleted later just to insert dummy data
export  async function GET(req: NextRequest, res: NextResponse) {
  await dbConnect(); 

  const dummyData = [
    {
      title: "Resource 1",
      type: "Type 1",
      email: "example1@mail.com",
      tags: ["tag1", "tag2"],
      description: "Description for Resource 1",
      resourceLink: "https://example.com/resource1",
      resourcePaid: true,
    },
    {
      title: "Resource 2",
      type: "Type 2",
      email: "example2@mail.com",
      tags: ["tag3", "tag4"],
      description: "Description for Resource 2",
      resourceLink: "https://example.com/resource2",
      resourcePaid: false,
    },
  ];

  try {
    await ResourceModel.insertMany(dummyData);
    return NextResponse.json({ success: true, message: "Dummy data inserted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error inserting dummy data", error: (error as Error).message });
  }
}
