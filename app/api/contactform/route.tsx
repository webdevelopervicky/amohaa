import { NextRequest, NextResponse } from "next/server";
import Connectdp from "@/lib/db"; // Database connection
import Contact from "@/models/contact"; // Contact model

export async function POST(request: NextRequest) {
  try {
    await Connectdp(); 
    const formData = await request.json(); // Get form data from request
    console.log("Received FormData:", formData); // Log received data

    // Create new contact record
    const newContact = new Contact(formData);

    // Save to database
    await newContact.save();

    return NextResponse.json({ message: "Data saved successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact form:", error); // Enhanced error logging
    if (error instanceof Error) {
      console.error("Error details:", error.message, error.stack); // Log detailed error message and stack trace
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
