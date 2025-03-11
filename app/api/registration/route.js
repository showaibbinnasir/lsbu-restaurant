
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import client from "@/lib/databaseConnect"
// authnexttest
// dNJ9I1APv1WNhqhV
export async function POST(req) {
    try{
        const users =  client.db("lsburestaurant").collection("users")
        const {name, email, password} =await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)
        const result = users.insertOne({name, email, password:hashedPassword})
        return NextResponse.json({message : "User created successfully", data : result}, {status : 201})

    }catch(error){
        return NextResponse.json({message : "Failed to create"}, {status : 500})
    }
}