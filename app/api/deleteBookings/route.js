import client from "@/lib/databaseConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    const books = client.db('lsburestaurant').collection('books')
    const body = await req.json()
    const {user_id} = body
    const query = { _id: new ObjectId(user_id)}
    const result = await books.deleteOne(query);
    return NextResponse.json({message : "Success", data : result})
}