import client from "@/lib/databaseConnect"
import { NextResponse } from "next/server";

export async function POST(req) {
    
    try {
        const books = client.db('lsburestaurant').collection('books')
        const body = await req.json(); // Parse JSON request body
        const { name, email, phone, table, selectedDate, bookingTime } = body;
    
        // Create and save the new booking
        const result = await books.insertOne({ name, email, phone, table, selectedDate, bookingTime })
    
        return NextResponse.json(
          { success: true, message: "Booking successfully created!", data: result },
          { status: 201 }
        );
      } catch (error) {
        return NextResponse.json({ success: false, message: "Server error", error }, { status: 500 });
      }
}