import connectionToDb from "@/lib/server.js";
import User from "@/models/User.js";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await connectionToDb();
        const {name,email}=await request.json();
        const newUser = new User({name,email});
        await newUser.save();
        return NextResponse.json(newUser,{status:201})
    } catch (error) {
        console.log(error)
    }
}